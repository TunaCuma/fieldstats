'use client'

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PlayerDetails() {
  const { t } = useTranslation();
  const params = useParams();
  const { playerId } = params;

  // Mock data for a player
  const player = {
    id: playerId,
    name: 'John Doe',
    position: 'Forward',
    team: 'Team A',
    age: 25,
    height: '180cm',
    weight: '75kg',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('playerDetails.title', { playerName: player.name })}</h1>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={`/player-avatars/${player.id}.jpg`} alt={player.name} />
              <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{player.name}</CardTitle>
              <p>{player.position} - {player.team}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>{t('playerDetails.age')}: {player.age}</p>
          <p>{t('playerDetails.height')}: {player.height}</p>
          <p>{t('playerDetails.weight')}: {player.weight}</p>
        </CardContent>
      </Card>

      <div className="mb-6 space-x-2">
        <Button asChild variant="outline">
          <Link href={`/players/${playerId}/edit`}>{t('playerDetails.editPlayer')}</Link>
        </Button>
      </div>

      <Tabs defaultValue="stats">
        <TabsList>
          <TabsTrigger value="stats">{t('playerDetails.stats')}</TabsTrigger>
          <TabsTrigger value="matches">{t('playerDetails.matches')}</TabsTrigger>
          <TabsTrigger value="analysis">{t('playerDetails.analysis')}</TabsTrigger>
        </TabsList>
        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>{t('playerDetails.statsTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('playerDetails.statsContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="matches">
          <Card>
            <CardHeader>
              <CardTitle>{t('playerDetails.matchesTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('playerDetails.matchesContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <CardTitle>{t('playerDetails.analysisTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('playerDetails.analysisContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

