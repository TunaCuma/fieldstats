"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Teams() {
  const t = useTranslations();

  // Mock data for teams
  const teams = [
    { id: 1, name: "Kavaklıderespor", playerCount: 11, matchCount: 1 },
    { id: 2, name: "Metespor", playerCount: 11, matchCount: 1 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">{t("teams.title")}</h1>

      <div className="mb-4 flex items-center justify-between">
        <Input
          type="text"
          placeholder={t("teams.search")}
          className="max-w-sm"
        />
        <Button asChild>
          <Link href="/teams/new">{t("teams.addTeam")}</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {t("teams.players")}: {team.playerCount}
              </p>
              <p>
                {t("teams.matches")}: {team.matchCount}
              </p>
              <div className="mt-4">
                <Button asChild>
                  <Link href={`/teams/${team.id}`}>
                    {t("teams.viewDetails")}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {teams.length === 0 && (
        <Card>
          <CardContent>
            <p className="py-4">{t("teams.noTeams")}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
