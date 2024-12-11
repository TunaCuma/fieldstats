import { type teams } from "@/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";

export type TeamSelectType = InferSelectModel<typeof teams>;
