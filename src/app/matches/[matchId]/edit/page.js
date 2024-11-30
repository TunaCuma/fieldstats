'use client'

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function EditMatch() {
  const { t } = useTranslation();
  const params = useParams();
  const { matchId } = params;

  // Mock data for a match
  const [match, setMatch] = useState({
    id: matchId,
    name: 'Match 1',
    date: '2023-05-01',
    teamA: 'Team A',
    teamB: 'Team B',
    scoreA: 2,
    scoreB: 1,
    status: 'completed',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatch(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setMatch(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Updated match data:', match);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('editMatch.title', { matchName: match.name })}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('editMatch.matchInfo')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">{t('editMatch.name')}</Label>
              <Input id="name" name="name" value={match.name} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="date">{t('editMatch.date')}</Label>
              <Input id="date" name="date" type="date" value={match.date} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="teamA">{t('editMatch.teamA')}</Label>
              <Input id="teamA" name="teamA" value={match.teamA} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="teamB">{t('editMatch.teamB')}</Label>
              <Input id="teamB" name="teamB" value={match.teamB} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="scoreA">{t('editMatch.scoreA')}</Label>
              <Input id="scoreA" name="scoreA" type="number" value={match.scoreA} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="scoreB">{t('editMatch.scoreB')}</Label>
              <Input id="scoreB" name="scoreB" type="number" value={match.scoreB} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="status">{t('editMatch.status')}</Label>
              <Select name="status" value={match.status} onValueChange={(value) => handleSelectChange('status', value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t('editMatch.selectStatus')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduled">{t('editMatch.scheduled')}</SelectItem>
                  <SelectItem value="inProgress">{t('editMatch.inProgress')}</SelectItem>
                  <SelectItem value="completed">{t('editMatch.completed')}</SelectItem>
                  <SelectItem value="cancelled">{t('editMatch.cancelled')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit">{t('editMatch.saveChanges')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

