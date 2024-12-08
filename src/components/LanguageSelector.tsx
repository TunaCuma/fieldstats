"use client";

import { useRouter } from "next/navigation";

export default function LanguageSelector() {
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    // Set the preferred locale in a cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/;`;

    // Refresh the page to fetch content in the new language
    router.refresh();
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("tr")}>Türkçe</button>
    </div>
  );
}
