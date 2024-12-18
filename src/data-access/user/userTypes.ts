import { type users } from "@/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";

export type UserSelectType = InferSelectModel<typeof users>;
