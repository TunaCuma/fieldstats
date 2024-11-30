'use client'

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewTeam() {
  const { t } = useTranslation();
  const router = useRouter();
  const [team, setTeam] = useState({
    name: '',
    foundedYear: '',
    homeStadium: '',
    coach: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeam(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    console.log('New team data:', team);
    // For now, we'll just simulate a successful creation and redirect
    router.push('/teams');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('newTeam.title')}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('newTeam.formTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">{t('newTeam.name')}</Label>
              <Input 
                id="name" 
                name="name" 
                value={team.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="foundedYear">{t('newTeam.foundedYear')}</Label>
              <Input 
                id="foundedYear" 
                name="foundedYear" 
                type="number" 
                value={team.foundedYear} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="homeStadium">{t('newTeam.homeStadium')}</Label>
              <Input 
                id="homeStadium" 
                name="homeStadium" 
                value={team.homeStadium} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="coach">{t('newTeam.coach')}</Label>
              <Input 
                id="coach" 
                name="coach" 
                value={team.coach} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div>
              <Label htmlFor="description">{t('newTeam.description')}</Label>
              <Textarea 
                id="description" 
                name="description" 
                value={team.description} 
                onChange={handleInputChange} 
                rows={4} 
              />
            </div>

            <Button type="submit">{t('newTeam.submit')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

