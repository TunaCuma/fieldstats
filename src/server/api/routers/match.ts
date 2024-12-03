import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { matches, matchMetrics, events } from "@/server/db/schema";

export const matchRouter = createTRPCRouter({
  // Create a new match
  createMatch: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        date: z.string(), // ISO string
        videoPath: z.string().optional(),
        status: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newMatch = await ctx.db
        .insert(matches)
        .values({
          name: input.name,
          date: new Date(input.date),
          uploadedBy: ctx.session.user.id,
          videoPath: input.videoPath || null,
          status: input.status,
        })
        .returning();
      return newMatch;
    }),

  // Get latest match
  getLatestMatch: protectedProcedure.query(async ({ ctx }) => {
    const latestMatch = await ctx.db.query.matches.findFirst({
      orderBy: (match, { desc }) => [desc(match.date)],
    });
    return latestMatch ?? null;
  }),

  // Get a match by ID
  getMatchById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const match = await ctx.db.query.matches.findFirst({
        where: (m) => m.id.equals(input.id),
        with: {
          matchMetrics: true,
          events: true,
        },
      });
      return match ?? null;
    }),

  // Update a match
  updateMatch: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1).optional(),
        date: z.string().optional(), // ISO string
        videoPath: z.string().optional(),
        status: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updatedMatch = await ctx.db
        .update(matches)
        .set({
          name: input.name,
          date: input.date ? new Date(input.date) : undefined,
          videoPath: input.videoPath,
          status: input.status,
        })
        .where(matches.id.equals(input.id))
        .returning();
      return updatedMatch;
    }),

  // Delete a match
  deleteMatch: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(matches).where(matches.id.equals(input.id));
      return { success: true };
    }),

  // Match Metrics Procedures
  createMatchMetrics: protectedProcedure
    .input(
      z.object({
        matchId: z.number(),
        ballTrackingData: z.string().optional(),
        possessionData: z.string().optional(),
        ballPossession: z.number().optional(),
        totalPasses: z.number().optional(),
        shotsOnGoal: z.number().optional(),
        totalDistanceCovered: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newMetrics = await ctx.db
        .insert(matchMetrics)
        .values({
          matchId: input.matchId,
          ballTrackingData: input.ballTrackingData || null,
          possessionData: input.possessionData || null,
          ballPossession: input.ballPossession || null,
          totalPasses: input.totalPasses || null,
          shotsOnGoal: input.shotsOnGoal || null,
          totalDistanceCovered: input.totalDistanceCovered || null,
        })
        .returning();
      return newMetrics;
    }),

  // Get match metrics by match ID
  getMatchMetrics: protectedProcedure
    .input(z.object({ matchId: z.number() }))
    .query(async ({ ctx, input }) => {
      const metrics = await ctx.db.query.matchMetrics.findFirst({
        where: (m) => m.matchId.equals(input.matchId),
      });
      return metrics ?? null;
    }),

  // Events Procedures
  createEvent: protectedProcedure
    .input(
      z.object({
        type: z.string().min(1),
        timestamp: z.string(), // ISO string
        playerId: z.number(),
        matchId: z.number(),
        category: z.string().optional(),
        ballLocation: z.string().optional(),
        playerLocation: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newEvent = await ctx.db
        .insert(events)
        .values({
          type: input.type,
          timestamp: new Date(input.timestamp),
          playerId: input.playerId,
          matchId: input.matchId,
          category: input.category || null,
          ballLocation: input.ballLocation || null,
          playerLocation: input.playerLocation || null,
        })
        .returning();
      return newEvent;
    }),

  // Get events by match ID
  getEventsByMatchId: protectedProcedure
    .input(z.object({ matchId: z.number() }))
    .query(async ({ ctx, input }) => {
      const matchEvents = await ctx.db.query.events.findMany({
        where: (e) => e.matchId.equals(input.matchId),
        orderBy: (e) => [e.timestamp.asc()],
      });
      return matchEvents;
    }),
});
