'use client'

import { useTranslations } from "next-intl";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Upload() {
  const t = useTranslations();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here
    console.log('File to upload:', file);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('upload.title')}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t('upload.instructions')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{t('upload.instructionsText')}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="file">{t('upload.selectFile')}</Label>
              <Input id="file" type="file" onChange={handleFileChange} accept="video/*" />
            </div>

            <div>
              <Label htmlFor="matchName">{t('upload.matchName')}</Label>
              <Input id="matchName" type="text" placeholder={t('upload.matchNamePlaceholder')} />
            </div>

            <div>
              <Label htmlFor="matchDate">{t('upload.matchDate')}</Label>
              <Input id="matchDate" type="date" />
            </div>

            <div>
              <Label htmlFor="teamA">{t('upload.teamA')}</Label>
              <Input id="teamA" type="text" placeholder={t('upload.teamAPlaceholder')} />
            </div>

            <div>
              <Label htmlFor="teamB">{t('upload.teamB')}</Label>
              <Input id="teamB" type="text" placeholder={t('upload.teamBPlaceholder')} />
            </div>

            <Button type="submit">{t('upload.submit')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

