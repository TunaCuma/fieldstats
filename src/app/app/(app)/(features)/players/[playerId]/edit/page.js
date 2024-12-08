'use client'

import { useTranslations } from "next-intl";
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EditPlayer() {
  const t = useTranslations();
  const params = useParams();
  const { playerId } = params;

  // Mock data for a player
  const [player, setPlayer] = useState({
    id: playerId,
    name: 'John Doe',
    position: 'Forward',
    team: 'Team A',
    age: 25,
    height: 180,
    weight: 75,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayer(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setPlayer(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Updated player data:', player);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('editPlayer.title', { playerName: player.name })}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('editPlayer.playerInfo')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={`/player-avatars/${player.id}.jpg`} alt={player.name} />
                <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button type="button" variant="outline">{t('editPlayer.uploadPicture')}</Button>
            </div>

            <div>
              <Label htmlFor="name">{t('editPlayer.name')}</Label>
              <Input id="name" name="name" value={player.name} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="position">{t('editPlayer.position')}</Label>
              <Select name="position" value={player.position} onValueChange={(value) => handleSelectChange('position', value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t('editPlayer.selectPosition')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Forward">{t('editPlayer.forward')}</SelectItem>
                  <SelectItem value="Midfielder">{t('editPlayer.midfielder')}</SelectItem>
                  <SelectItem value="Defender">{t('editPlayer.defender')}</SelectItem>
                  <SelectItem value="Goalkeeper">{t('editPlayer.goalkeeper')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="age">{t('editPlayer.age')}</Label>
              <Input id="age" name="age" type="number" value={player.age} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="height">{t('editPlayer.height')} (cm)</Label>
              <Input id="height" name="height" type="number" value={player.height} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="weight">{t('editPlayer.weight')} (kg)</Label>
              <Input id="weight" name="weight" type="number" value={player.weight} onChange={handleInputChange} />
            </div>

            <Button type="submit">{t('editPlayer.saveChanges')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

