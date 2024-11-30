'use client'

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function PlayerStats() {
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

  // Mock performance data
  const performanceData = [
    { name: 'Goals', value: 15 },
    { name: 'Assists', value: 7 },
    { name: 'Shots', value: 45 },
    { name: 'Passes', value: 500 },
    { name: 'Tackles', value: 20 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('playerStats.title', { playerName: player.name })}</h1>

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
          <p>{t('playerStats.age')}: {player.age}</p>
          <p>{t('playerStats.height')}: {player.height}</p>
          <p>{t('playerStats.weight')}: {player.weight}</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('playerStats.performanceMetrics')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('playerStats.matchPerformance')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('playerStats.matchPerformanceContent')}</p>
          {/* Add match-by-match performance data here */}
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('playerStats.advancedStats')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('playerStats.advancedStatsContent')}</p>
          {/* Add AI-driven analysis and visualizations here */}
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button>{t('playerStats.compareStats')}</Button>
        <Button variant="outline">{t('playerStats.exportStats')}</Button>
      </div>
    </div>
  );
}

