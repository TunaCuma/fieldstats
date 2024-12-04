'use client'

import { useTranslations } from "next-intl";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MatchDetails() {
  const t = useTranslations();
  const params = useParams();
  const { matchId } = params;

  // Mock data for a match
  const match = {
    id: matchId,
    name: 'Match 1',
    date: '2023-05-01',
    teamA: 'Team A',
    teamB: 'Team B',
    score: '2 - 1',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('matchDetails.title', { matchName: match.name })}</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('matchDetails.summary')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('matchDetails.date')}: {match.date}</p>
          <p>{t('matchDetails.teams')}: {match.teamA} vs {match.teamB}</p>
          <p>{t('matchDetails.score')}: {match.score}</p>
        </CardContent>
      </Card>

      <div className="mb-6 space-x-2">
        <Button asChild>
          <Link href={`/matches/${matchId}/reports`}>{t('matchDetails.viewReports')}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`/matches/${matchId}/edit`}>{t('matchDetails.editMatch')}</Link>
        </Button>
        <Button variant="destructive">{t('matchDetails.deleteMatch')}</Button>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">{t('matchDetails.overview')}</TabsTrigger>
          <TabsTrigger value="reports">{t('matchDetails.reports')}</TabsTrigger>
          <TabsTrigger value="interactive">{t('matchDetails.interactive')}</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>{t('matchDetails.overviewTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('matchDetails.overviewContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>{t('matchDetails.reportsTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('matchDetails.reportsContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="interactive">
          <Card>
            <CardHeader>
              <CardTitle>{t('matchDetails.interactiveTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('matchDetails.interactiveContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

