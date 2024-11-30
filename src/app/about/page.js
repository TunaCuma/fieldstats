'use client'

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const t = useTranslations();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('about.title')}</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('about.missionTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('about.missionContent')}</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('about.teamTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('about.teamContent')}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('about.technologyTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('about.technologyContent')}</p>
        </CardContent>
      </Card>
    </div>
  );
}

