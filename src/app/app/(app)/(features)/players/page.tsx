import { HydrateClient } from "@/trpc/server";
import { Players } from "./Players";
import { api } from "@/trpc/server";

export default async function PlayersPage() {
  void api.player.getPlayers.prefetch();

  return (
    <HydrateClient>
      <Players />
    </HydrateClient>
  );
}
