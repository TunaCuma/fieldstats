import { type InferSelectModel } from "drizzle-orm";
import { type players } from "@/server/db/schema";
import { type TeamSelectType } from "../teams/teamTypes";

export type PlayerSelectType = InferSelectModel<typeof players>;

export type PlayerType = PlayerSelectType & {
  team: TeamSelectType | null;
};
