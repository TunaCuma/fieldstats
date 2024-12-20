"use client";
import { useState, useEffect } from "react";
import { fetchPlayers } from "./_actions/fetchPlayersAction";
import { useTranslations } from "next-intl";
import { DataTable } from "@/app/app/(app)/(features)/players/PlayersDataTable";
import { columns } from "./columns";
import { type PlayerType } from "@/data-access/players/playerTypes";

export default function Players() {
  const t = useTranslations();

  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    fetchPlayers().then(setPlayers).catch(console.error);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">{t("players.title")}</h1>
      <DataTable columns={columns} data={players} />
    </div>
  );
}
