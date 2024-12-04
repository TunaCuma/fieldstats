'use client'

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  const t = useTranslations();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('terms.title')}</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('terms.introductionTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('terms.introductionContent')}</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('terms.useOfServiceTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('terms.useOfServiceContent')}</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('terms.privacyTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('terms.privacyContent')}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('terms.disclaimerTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('terms.disclaimerContent')}</p>
        </CardContent>
      </Card>
    </div>
  );
}

