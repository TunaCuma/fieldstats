import { type InferSelectModel } from "drizzle-orm";
import { type players, type teams } from "@/server/db/schema";

export type PlayerSelectType = InferSelectModel<typeof players>;
export type TeamSelectType = InferSelectModel<typeof teams>;

export type PlayerType = PlayerSelectType & {
  team: TeamSelectType | null;
};
