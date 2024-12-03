import { relations, sql } from "drizzle-orm";
import {
  index,
  real,
  integer,
  pgTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `fieldstats_${name}`);

export const users = createTable("user", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("email_verified", {
    mode: "date",
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar("image", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = createTable(
  "account",
  {
    userId: varchar("user_id", { length: 255 })
      .notNull()
      .references(() => users.id),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("provider_account_id", {
      length: 255,
    }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index("account_user_id_idx").on(account.userId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = createTable(
  "session",
  {
    sessionToken: varchar("session_token", { length: 255 })
      .notNull()
      .primaryKey(),
    userId: varchar("user_id", { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: timestamp("expires", {
      mode: "date",
      withTimezone: true,
    }).notNull(),
  },
  (session) => ({
    userIdIdx: index("session_user_id_idx").on(session.userId),
  }),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  "verification_token",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", {
      mode: "date",
      withTimezone: true,
    }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

// Match Table
export const matches = createTable(
  "match",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    date: timestamp("date", { withTimezone: true }).notNull(),
    uploadedBy: varchar("uploaded_by", { length: 255 })
      .notNull()
      .references(() => users.id),
    videoPath: varchar("video_path", { length: 255 }),
    status: varchar("status", { length: 255 }).notNull(),
  },
  (match) => ({
    uploadedByIdx: index("match_uploaded_by_idx").on(match.uploadedBy),
  }),
);

export const matchesRelations = relations(matches, ({ one, many }) => ({
  uploadedByUser: one(users, {
    fields: [matches.uploadedBy],
    references: [users.id],
  }),
  matchMetrics: many(matchMetrics),
  playerMetrics: many(playerMetrics),
  events: many(events),
}));

// MatchMetrics Table
export const matchMetrics = createTable(
  "match_metrics",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    matchId: integer("match_id")
      .notNull()
      .references(() => matches.id),
    ballTrackingData: text("ball_tracking_data"),
    possessionData: text("possession_data"),
    ballPossession: real("ball_possession"),
    totalPasses: integer("total_passes"),
    shotsOnGoal: integer("shots_on_goal"),
    totalDistanceCovered: real("total_distance_covered"),
  },
  (metrics) => ({
    matchIdIdx: index("match_metrics_match_id_idx").on(metrics.matchId),
  }),
);

export const matchMetricsRelations = relations(matchMetrics, ({ one }) => ({
  match: one(matches, {
    fields: [matchMetrics.matchId],
    references: [matches.id],
  }),
}));

// Player Table
export const players = createTable(
  "player",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 255 }),
    teamId: integer("team_id").notNull(),
    position: varchar("position", { length: 255 }).notNull(),
    stats: text("stats"),
  },
  (player) => ({
    teamIdIdx: index("player_team_id_idx").on(player.teamId),
  }),
);

// PlayerMetrics Table
export const playerMetrics = createTable(
  "player_metrics",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    playerId: integer("player_id")
      .notNull()
      .references(() => players.id),
    matchId: integer("match_id")
      .notNull()
      .references(() => matches.id),
    positions: text("positions"),
    distanceCovered: real("distance_covered"),
    passesCompleted: integer("passes_completed"),
    shotsTaken: integer("shots_taken"),
    keyEvents: text("key_events"),
    fieldHeatmap: text("field_heatmap"),
  },
  (metrics) => ({
    playerIdIdx: index("player_metrics_player_id_idx").on(metrics.playerId),
    matchIdIdx: index("player_metrics_match_id_idx").on(metrics.matchId),
  }),
);

export const playerMetricsRelations = relations(playerMetrics, ({ one }) => ({
  player: one(players, {
    fields: [playerMetrics.playerId],
    references: [players.id],
  }),
  match: one(matches, {
    fields: [playerMetrics.matchId],
    references: [matches.id],
  }),
}));

// Team Table
export const teams = createTable("team", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 255 }),
  coach: varchar("coach", { length: 255 }).notNull(),
});

// Event Table
export const events = createTable(
  "event",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    type: varchar("type", { length: 255 }).notNull(),
    timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
    playerId: integer("player_id")
      .notNull()
      .references(() => players.id),
    matchId: integer("match_id")
      .notNull()
      .references(() => matches.id),
    category: varchar("category", { length: 255 }),
    ballLocation: varchar("ball_location", { length: 255 }),
    playerLocation: varchar("player_location", { length: 255 }),
  },
  (event) => ({
    playerIdIdx: index("event_player_id_idx").on(event.playerId),
    matchIdIdx: index("event_match_id_idx").on(event.matchId),
  }),
);

export const eventsRelations = relations(events, ({ one }) => ({
  player: one(players, { fields: [events.playerId], references: [players.id] }),
  match: one(matches, { fields: [events.matchId], references: [matches.id] }),
}));
