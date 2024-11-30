'use client'

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Players() {
  const { t } = useTranslation();

  // Mock data for players
  const players = [
    { id: 1, name: 'John Doe', position: 'Forward', team: 'Team A' },
    { id: 2, name: 'Jane Smith', position: 'Midfielder', team: 'Team B' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('players.title')}</h1>

      <div className="flex justify-between items-center mb-4">
        <Input type="text" placeholder={t('players.search')} className="max-w-sm" />
        <Button asChild>
          <Link href="/players/new">{t('players.addPlayer')}</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <Card key={player.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`/player-avatars/${player.id}.jpg`} alt={player.name} />
                  <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{player.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{t('players.position')}: {player.position}</p>
              <p>{t('players.team')}: {player.team}</p>
              <div className="mt-4">
                <Button asChild>
                  <Link href={`/players/${player.id}`}>{t('players.viewDetails')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {players.length === 0 && (
        <Card>
          <CardContent>
            <p className="py-4">{t('players.noPlayers')}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

