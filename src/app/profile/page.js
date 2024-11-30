'use client'

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  const { t } = useTranslation();
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', { name, email });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('profile.title')}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('profile.editProfile')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button type="button" variant="outline">{t('profile.uploadPicture')}</Button>
            </div>

            <div>
              <Label htmlFor="name">{t('profile.name')}</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder={t('profile.namePlaceholder')}
              />
            </div>

            <div>
              <Label htmlFor="email">{t('profile.email')}</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={t('profile.emailPlaceholder')}
              />
            </div>

            <Button type="submit">{t('profile.saveChanges')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

