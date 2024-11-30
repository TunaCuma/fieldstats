'use client'

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EditTeam() {
  const { t } = useTranslation();
  const params = useParams();
  const { teamId } = params;

  // Mock data for a team
  const [team, setTeam] = useState({
    id: teamId,
    name: 'Team A',
    logo: '/team-logos/team-a.png',
    foundedYear: 1900,
    homeStadium: 'Stadium A',
    coach: 'Coach Name',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeam(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Updated team data:', team);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('editTeam.title', { teamName: team.name })}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('editTeam.teamInfo')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={team.logo} alt={team.name} />
                <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button type="button" variant="outline">{t('editTeam.uploadLogo')}</Button>
            </div>

            <div>
              <Label htmlFor="name">{t('editTeam.name')}</Label>
              <Input id="name" name="name" value={team.name} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="foundedYear">{t('editTeam.foundedYear')}</Label>
              <Input id="foundedYear" name="foundedYear" type="number" value={team.foundedYear} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="homeStadium">{t('editTeam.homeStadium')}</Label>
              <Input id="homeStadium" name="homeStadium" value={team.homeStadium} onChange={handleInputChange} />
            </div>

            <div>
              <Label htmlFor="coach">{t('editTeam.coach')}</Label>
              <Input id="coach" name="coach" value={team.coach} onChange={handleInputChange} />
            </div>

            <Button type="submit">{t('editTeam.saveChanges')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

