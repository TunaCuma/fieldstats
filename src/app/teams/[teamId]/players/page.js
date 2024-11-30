'use client'

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamPlayers() {
  const { t } = useTranslation();
  const params = useParams();
  const { teamId } = params;

  // Mock data for a team
  const team = {
    id: teamId,
    name: 'Team A',
  };

  // Mock data for players
  const players = [
    { id: 1, name: 'John Doe', position: 'Forward', number: 10 },
    { id: 2, name: 'Jane Smith', position: 'Midfielder', number: 8 },
    { id: 3, name: 'Mike Johnson', position: 'Defender', number: 4 },
    { id: 4, name: 'Sarah Brown', position: 'Goalkeeper', number: 1 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('teamPlayers.title', { teamName: team.name })}</h1>

      <div className="flex justify-between items-center mb-4">
        <Input type="text" placeholder={t('teamPlayers.searchPlayers')} className="max-w-sm" />
        <Button asChild>
          <Link href={`/teams/${teamId}/players/add`}>{t('teamPlayers.addPlayer')}</Link>
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
                <div>
                  <CardTitle>{player.name}</CardTitle>
                  <p className="text-sm text-gray-500">#{player.number}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{t('teamPlayers.position')}: {player.position}</p>
              <div className="mt-4">
                <Button asChild>
                  <Link href={`/teams/${teamId}/players/${player.id}`}>{t('teamPlayers.viewDetails')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {players.length === 0 && (
        <Card>
          <CardContent>
            <p className="py-4">{t('teamPlayers.noPlayers')}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

