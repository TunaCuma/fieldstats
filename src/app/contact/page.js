'use client'

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission logic here
    console.log('Contact form submitted:', { name, email, message });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('contact.title')}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('contact.formTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">{t('contact.name')}</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder={t('contact.namePlaceholder')}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">{t('contact.email')}</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={t('contact.emailPlaceholder')}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">{t('contact.message')}</Label>
              <Textarea 
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder={t('contact.messagePlaceholder')}
                required
              />
            </div>

            <Button type="submit">{t('contact.submit')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

