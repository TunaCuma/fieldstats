import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { players, playerMetrics } from "@/server/db/schema";

export const playerRouter = createTRPCRouter({
  // Create a new player
  createPlayer: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        teamId: z.number(),
        position: z.string().min(1),
        stats: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newPlayer = await ctx.db
        .insert(players)
        .values({
          name: input.name,
          teamId: input.teamId,
          position: input.position,
          stats: input.stats ?? null,
        })
        .returning();
      return newPlayer;
    }),

  // Get player by ID
  getPlayerById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const player = await ctx.db.query.players.findFirst({
        where: (p) => p.id.equals(input.id),
        with: {
          playerMetrics: true,
        },
      });
      return player ?? null;
    }),

  // Update a player
  updatePlayer: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1).optional(),
        teamId: z.number().optional(),
        position: z.string().min(1).optional(),
        stats: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updatedPlayer = await ctx.db
        .update(players)
        .set({
          name: input.name,
          teamId: input.teamId,
          position: input.position,
          stats: input.stats,
        })
        .where(players.id.equals(input.id))
        .returning();
      return updatedPlayer;
    }),

  // Delete a player
  deletePlayer: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(players).where(players.id.equals(input.id));
      // Additional cleanup (e.g., delete related metrics) can be added here
      return { success: true };
    }),

  // Player Metrics Procedures
  createPlayerMetrics: protectedProcedure
    .input(
      z.object({
        playerId: z.number(),
        matchId: z.number(),
        positions: z.string().optional(),
        distanceCovered: z.number().optional(),
        passesCompleted: z.number().optional(),
        shotsTaken: z.number().optional(),
        keyEvents: z.string().optional(),
        fieldHeatmap: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newMetrics = await ctx.db
        .insert(playerMetrics)
        .values({
          playerId: input.playerId,
          matchId: input.matchId,
          positions: input.positions ?? null,
          distanceCovered: input.distanceCovered ?? null,
          passesCompleted: input.passesCompleted ?? null,
          shotsTaken: input.shotsTaken ?? null,
          keyEvents: input.keyEvents ?? null,
          fieldHeatmap: input.fieldHeatmap ?? null,
        })
        .returning();
      return newMetrics;
    }),

  // Get player metrics by player ID and match ID
  getPlayerMetrics: protectedProcedure
    .input(
      z.object({
        playerId: z.number(),
        matchId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const metrics = await ctx.db.query.playerMetrics.findFirst({
        where: (m) =>
          m.playerId.equals(input.playerId) && m.matchId.equals(input.matchId),
      });
      return metrics ?? null;
    }),
});
