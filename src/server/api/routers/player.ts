import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { players } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const playerRouter = createTRPCRouter({
  // Create a new player
  createPlayer: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1), // Required
        teamId: z.number().optional(), // Optional
        position: z.string().optional(), // Optional
        jerseyNumber: z.number().min(1), // Required
        dateOfBirth: z.string().optional(), // Optional (ensure format)
        height: z.number().optional(), // Optional
        weight: z.number().optional(), // Optional
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Filter out undefined fields from input
      const sanitizedInput = {
        ...input,
        teamId: input.teamId ?? null,
        position: input.position ?? null,
        dateOfBirth: input.dateOfBirth ?? null,
        height: input.height ?? null,
        weight: input.weight ?? null,
      };

      const newPlayer = await ctx.db
        .insert(players)
        .values({
          name: sanitizedInput.name,
          teamId: sanitizedInput.teamId,
          position: sanitizedInput.position,
          jerseyNumber: sanitizedInput.jerseyNumber,
          dateOfBirth: sanitizedInput.dateOfBirth,
          height: sanitizedInput.height,
          weight: sanitizedInput.weight,
          createdBy: ctx.session.user.id,
        })
        .returning();

      return newPlayer[0]; // Return the first (and only) item in the returning array
    }),

  // Get player by ID
  getPlayerById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const player = await ctx.db.query.players.findFirst({
        where: eq(players.id, input.id),
        with: {
          createdByUser: true, // Include the creator details
          team: true, // Include team details
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
          name: input.name ?? undefined, // Set undefined to skip updating if not provided
          teamId: input.teamId ?? undefined,
          position: input.position ?? undefined,
          stats: input.stats ?? undefined,
        })
        .where(eq(players.id, input.id))
        .returning();
      return updatedPlayer[0]; // Return the first (and only) item in the returning array
    }),

  // Delete a player
  deletePlayer: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(players).where(eq(players.id, input.id));
      return { success: true };
    }),

  // Get all players with team
  getPlayers: protectedProcedure.query(async ({ ctx }) => {
    const allPlayers = await ctx.db.query.players.findMany({
      where: eq(players.createdBy, ctx.session.user.id),
      with: {
        team: true, // Include team details
      },
    });
    return allPlayers;
  }),
});
