import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import {
  users,
  accounts,
  sessions,
  verificationTokens,
} from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const userRouter = createTRPCRouter({
  // Public procedure to create a new user
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        image: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newUser = await ctx.db
        .insert(users)
        .values({
          name: input.name,
          email: input.email,
          image: input.image ?? null,
        })
        .returning();
      return newUser;
    }),

  // Protected procedure to get the current user's profile
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.query.users.findFirst({
      where: eq(users.id, ctx.session.user.id),
    });
    return user ?? null;
  }),

  // Protected procedure to update the current user's profile
  updateProfile: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).optional(),
        image: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updatedUser = await ctx.db
        .update(users)
        .set({
          name: input.name,
          image: input.image,
        })
        .where(users.id.equals(ctx.session.user.id))
        .returning();
      return updatedUser;
    }),

  // Public procedure to get a user by ID
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.query.users.findFirst({
        where: (user) => user.id.equals(input.id),
      });
      return user ?? null;
    }),

  // Protected procedure to delete the current user's account
  deleteUser: protectedProcedure.mutation(async ({ ctx }) => {
    await ctx.db.delete(users).where(users.id.equals(ctx.session.user.id));
    // Additional cleanup (e.g., delete related accounts, sessions) can be added here
    return { success: true };
  }),

  // Accounts Procedures
  createAccount: protectedProcedure
    .input(
      z.object({
        type: z.string(),
        provider: z.string(),
        providerAccountId: z.string(),
        refresh_token: z.string().optional(),
        access_token: z.string().optional(),
        expires_at: z.number().optional(),
        token_type: z.string().optional(),
        scope: z.string().optional(),
        id_token: z.string().optional(),
        session_state: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newAccount = await ctx.db
        .insert(accounts)
        .values({
          userId: ctx.session.user.id,
          type: input.type,
          provider: input.provider,
          providerAccountId: input.providerAccountId,
          refresh_token: input.refresh_token ?? null,
          access_token: input.access_token ?? null,
          expires_at: input.expires_at ?? null,
          token_type: input.token_type ?? null,
          scope: input.scope ?? null,
          id_token: input.id_token ?? null,
          session_state: input.session_state ?? null,
        })
        .returning();
      return newAccount;
    }),

  // Sessions Procedures
  createSession: protectedProcedure
    .input(
      z.object({
        sessionToken: z.string(),
        expires: z.string(), // ISO string
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newSession = await ctx.db
        .insert(sessions)
        .values({
          sessionToken: input.sessionToken,
          userId: ctx.session.user.id,
          expires: new Date(input.expires),
        })
        .returning();
      return newSession;
    }),

  // Verification Tokens Procedures
  createVerificationToken: publicProcedure
    .input(
      z.object({
        identifier: z.string(),
        token: z.string(),
        expires: z.string(), // ISO string
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const newToken = await ctx.db
        .insert(verificationTokens)
        .values({
          identifier: input.identifier,
          token: input.token,
          expires: new Date(input.expires),
        })
        .returning();
      return newToken;
    }),
});
