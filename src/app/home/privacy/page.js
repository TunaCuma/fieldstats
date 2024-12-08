'use client'

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  const t = useTranslations();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('privacy.title')}</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('privacy.introductionTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('privacy.introductionContent')}</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('privacy.dataCollectionTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('privacy.dataCollectionContent')}</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('privacy.dataUsageTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('privacy.dataUsageContent')}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('privacy.userRightsTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('privacy.userRightsContent')}</p>
        </CardContent>
      </Card>
    </div>
  );
}

