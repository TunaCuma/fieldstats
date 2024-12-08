'use client'

import { useTranslations } from "next-intl";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NewPlayer() {
  const t = useTranslations();
  const router = useRouter();
  const [player, setPlayer] = useState({
    name: '',
    position: '',
    dateOfBirth: '',
    nationality: '',
    height: '',
    weight: '',
    team: '',
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
    // Here you would typically send the data to your backend API
    console.log('New player data:', player);
    // For now, we'll just simulate a successful creation and redirect
    router.push('/players');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('newPlayer.title')}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('newPlayer.formTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">{t('newPlayer.name')}</Label>
              <Input 
                id="name" 
                name="name" 
                value={player.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="position">{t('newPlayer.position')}</Label>
              <Select name="position" value={player.position} onValueChange={(value) => handleSelectChange('position', value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t('newPlayer.selectPosition')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Forward">{t('newPlayer.forward')}</SelectItem>
                  <SelectItem value="Midfielder">{t('newPlayer.midfielder')}</SelectItem>
                  <SelectItem value="Defender">{t('newPlayer.defender')}</SelectItem>
                  <SelectItem value="Goalkeeper">{t('newPlayer.goalkeeper')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="dateOfBirth">{t('newPlayer.dateOfBirth')}</Label>
              <Input 
                id="dateOfBirth" 
                name="dateOfBirth" 
                type="date" 
                value={player.dateOfBirth} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="nationality">{t('newPlayer.nationality')}</Label>
              <Input 
                id="nationality" 
                name="nationality" 
                value={player.nationality} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="height">{t('newPlayer.height')} (cm)</Label>
              <Input 
                id="height" 
                name="height" 
                type="number" 
                value={player.height} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="weight">{t('newPlayer.weight')} (kg)</Label>
              <Input 
                id="weight" 
                name="weight" 
                type="number" 
                value={player.weight} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="team">{t('newPlayer.team')}</Label>
              <Input 
                id="team" 
                name="team" 
                value={player.team} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <Button type="submit">{t('newPlayer.submit')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

