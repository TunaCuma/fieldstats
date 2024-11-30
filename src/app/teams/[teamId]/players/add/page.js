'use client'

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AddPlayersToTeam() {
  const { t } = useTranslation();
  const router = useRouter();
  const params = useParams();
  const { teamId } = params;

  // Mock data for available players
  const [availablePlayers, setAvailablePlayers] = useState([
    { id: 1, name: 'John Doe', position: 'Forward' },
    { id: 2, name: 'Jane Smith', position: 'Midfielder' },
    { id: 3, name: 'Mike Johnson', position: 'Defender' },
    { id: 4, name: 'Emily Brown', position: 'Goalkeeper' },
    { id: 5, name: 'Chris Wilson', position: 'Forward' },
    { id: 6, name: 'Alex Lee', position: 'Midfielder' },
  ]);

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePlayerToggle = (playerId) => {
    setSelectedPlayers(prev => 
      prev.includes(playerId)
        ? prev.filter(id => id !== playerId)
        : [...prev, playerId]
    );
  };

  const filteredPlayers = availablePlayers.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    console.log('Adding players to team:', teamId, 'Selected players:', selectedPlayers);
    // For now, we'll just simulate a successful addition and redirect
    router.push(`/teams/${teamId}/players`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('addPlayersToTeam.title')}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('addPlayersToTeam.selectPlayers')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="search">{t('addPlayersToTeam.searchPlayers')}</Label>
              <Input
                id="search"
                type="text"
                placeholder={t('addPlayersToTeam.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <ScrollArea className="h-[300px] mb-4">
              {filteredPlayers.map(player => (
                <div key={player.id} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={`player-${player.id}`}
                    checked={selectedPlayers.includes(player.id)}
                    onCheckedChange={() => handlePlayerToggle(player.id)}
                  />
                  <Label htmlFor={`player-${player.id}`} className="flex-grow">
                    {player.name} - {player.position}
                  </Label>
                </div>
              ))}
            </ScrollArea>

            <div className="flex justify-between items-center">
              <p>{t('addPlayersToTeam.selectedCount', { count: selectedPlayers.length })}</p>
              <Button type="submit" disabled={selectedPlayers.length === 0}>
                {t('addPlayersToTeam.addPlayers')}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

