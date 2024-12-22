"use client";
import { useTranslations } from "next-intl";
import { DataTable } from "@/app/app/(app)/(features)/players/PlayersDataTable";
import { columns } from "./columns";
import { api } from "@/trpc/react";

export function Players() {
  const t = useTranslations();
  const [players] = api.player.getPlayers.useSuspenseQuery();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">{t("players.title")}</h1>
      {players ? <DataTable columns={columns} data={players} /> : null}
    </div>
  );
}
