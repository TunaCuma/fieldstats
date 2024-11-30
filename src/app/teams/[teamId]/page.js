'use client'

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TeamDetails() {
  const { t } = useTranslation();
  const params = useParams();
  const { teamId } = params;

  // Mock data for a team
  const team = {
    id: teamId,
    name: 'Team A',
    playerCount: 22,
    matchCount: 5,
    wins: 3,
    losses: 2,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('teamDetails.title', { teamName: team.name })}</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('teamDetails.summary')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('teamDetails.players')}: {team.playerCount}</p>
          <p>{t('teamDetails.matches')}: {team.matchCount}</p>
          <p>{t('teamDetails.record')}: {team.wins}W - {team.losses}L</p>
        </CardContent>
      </Card>

      <div className="mb-6 space-x-2">
        <Button asChild>
          <Link href={`/teams/${teamId}/players`}>{t('teamDetails.viewPlayers')}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`/teams/${teamId}/edit`}>{t('teamDetails.editTeam')}</Link>
        </Button>
      </div>

      <Tabs defaultValue="stats">
        <TabsList>
          <TabsTrigger value="stats">{t('teamDetails.stats')}</TabsTrigger>
          <TabsTrigger value="matches">{t('teamDetails.matches')}</TabsTrigger>
          <TabsTrigger value="analysis">{t('teamDetails.analysis')}</TabsTrigger>
        </TabsList>
        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>{t('teamDetails.statsTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('teamDetails.statsContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="matches">
          <Card>
            <CardHeader>
              <CardTitle>{t('teamDetails.matchesTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('teamDetails.matchesContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <CardTitle>{t('teamDetails.analysisTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('teamDetails.analysisContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

