'use client'

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamPlayer() {
  const { t } = useTranslation();
  const params = useParams();
  const { teamId, playerId } = params;

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
      <h1 className="text-3xl font-bold mb-6">{t('teamPlayer.title', { playerName: player.name })}</h1>

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
          <p>{t('teamPlayer.age')}: {player.age}</p>
          <p>{t('teamPlayer.height')}: {player.height}</p>
          <p>{t('teamPlayer.weight')}: {player.weight}</p>
        </CardContent>
      </Card>

      <div className="mb-6 space-x-2">
        <Button asChild>
          <Link href={`/players/${playerId}/edit`}>{t('teamPlayer.editPlayer')}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`/teams/${teamId}/edit`}>{t('teamPlayer.editTeam')}</Link>
        </Button>
        <Button asChild>
          <Link href={`/players/${playerId}/stats`}>{t('teamPlayer.viewStats')}</Link>
        </Button>
      </div>

      <Tabs defaultValue="performance">
        <TabsList>
          <TabsTrigger value="performance">{t('teamPlayer.performance')}</TabsTrigger>
          <TabsTrigger value="history">{t('teamPlayer.history')}</TabsTrigger>
          <TabsTrigger value="analysis">{t('teamPlayer.analysis')}</TabsTrigger>
        </TabsList>
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>{t('teamPlayer.performanceTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('teamPlayer.performanceContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>{t('teamPlayer.historyTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('teamPlayer.historyContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <CardTitle>{t('teamPlayer.analysisTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('teamPlayer.analysisContent')}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

