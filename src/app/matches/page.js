'use client'

import { useTranslations } from "next-intl";
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Matches() {
  const t = useTranslations();

  // Mock data for matches
  const matches = [
    { id: 1, name: 'Match 1', date: '2023-05-01', teamA: 'Team A', teamB: 'Team B' },
    { id: 2, name: 'Match 2', date: '2023-05-15', teamA: 'Team C', teamB: 'Team D' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('matches.title')}</h1>

      <div className="mb-4">
        <Input type="text" placeholder={t('matches.search')} className="max-w-sm" />
      </div>

      <div className="grid gap-4">
        {matches.map((match) => (
          <Card key={match.id}>
            <CardHeader>
              <CardTitle>{match.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('matches.date')}: {match.date}</p>
              <p>{t('matches.teams')}: {match.teamA} vs {match.teamB}</p>
              <div className="mt-4">
                <Button asChild>
                  <Link href={`/matches/${match.id}`}>{t('matches.viewDetails')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {matches.length === 0 && (
        <Card>
          <CardContent>
            <p className="py-4">{t('matches.noMatches')}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

