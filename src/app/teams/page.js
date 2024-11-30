'use client'

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Teams() {
  const { t } = useTranslation();

  // Mock data for teams
  const teams = [
    { id: 1, name: 'Team A', playerCount: 22, matchCount: 5 },
    { id: 2, name: 'Team B', playerCount: 20, matchCount: 3 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('teams.title')}</h1>

      <div className="flex justify-between items-center mb-4">
        <Input type="text" placeholder={t('teams.search')} className="max-w-sm" />
        <Button asChild>
          <Link href="/teams/new">{t('teams.addTeam')}</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('teams.players')}: {team.playerCount}</p>
              <p>{t('teams.matches')}: {team.matchCount}</p>
              <div className="mt-4">
                <Button asChild>
                  <Link href={`/teams/${team.id}`}>{t('teams.viewDetails')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {teams.length === 0 && (
        <Card>
          <CardContent>
            <p className="py-4">{t('teams.noTeams')}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

