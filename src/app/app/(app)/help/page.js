'use client'

import { useTranslations } from "next-intl";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Help() {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    { question: 'help.faq1Question', answer: 'help.faq1Answer' },
    { question: 'help.faq2Question', answer: 'help.faq2Answer' },
    { question: 'help.faq3Question', answer: 'help.faq3Answer' },
  ];

  const filteredFaqs = faqs.filter(faq => 
    t(faq.question).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(faq.answer).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('help.title')}</h1>

      <Input
        type="text"
        placeholder={t('help.searchPlaceholder')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6"
      />

      <Card>
        <CardHeader>
          <CardTitle>{t('help.faqTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{t(faq.question)}</AccordionTrigger>
                <AccordionContent>{t(faq.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

