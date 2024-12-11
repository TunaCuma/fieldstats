"use server";

import { api } from "@/trpc/server";

export async function fetchPlayers() {
  return await api.player.getPlayers();
}
