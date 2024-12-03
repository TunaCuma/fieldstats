import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { teams } from "@/server/db/schema";

export const teamRouter = createTRPCRouter({
  // Create a new team
  createTeam: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        coach: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newTeam = await ctx.db
        .insert(teams)
        .values({
          name: input.name,
          coach: input.coach,
        })
        .returning();
      return newTeam;
    }),

  // Get all teams
  getAllTeams: protectedProcedure.query(async ({ ctx }) => {
    const allTeams = await ctx.db.query.teams.findMany();
    return allTeams;
  }),

  // Get a team by ID
  getTeamById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const team = await ctx.db.query.teams.findFirst({
        where: (t) => t.id.equals(input.id),
      });
      return team ?? null;
    }),

  // Update a team
  updateTeam: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1).optional(),
        coach: z.string().min(1).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updatedTeam = await ctx.db
        .update(teams)
        .set({
          name: input.name,
          coach: input.coach,
        })
        .where(teams.id.equals(input.id))
        .returning();
      return updatedTeam;
    }),

  // Delete a team
  deleteTeam: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(teams).where(teams.id.equals(input.id));
      // Additional cleanup (e.g., delete related players) can be added here
      return { success: true };
    }),
});
