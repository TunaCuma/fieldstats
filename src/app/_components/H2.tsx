"use client"; // Ensures the component runs on the client side

import { useTranslations } from "next-intl";

interface H2Props {
  translationKey: string; // Key for translations
}

export default function H2({ translationKey }: H2Props) {
  const t = useTranslations("HomePage"); // Namespace for translations
  return <h2 className="text-3xl font-bold">{t(translationKey)}</h2>;
}
