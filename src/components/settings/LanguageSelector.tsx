"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
];

export default function LanguageSelector() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    // Read the current language from the cookie
    const cookies = document.cookie.split(";");
    const localeCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("NEXT_LOCALE="),
    );
    const currentLocale = localeCookie ? localeCookie.split("=")[1] : "en";

    // Set the initial selected language based on the cookie
    const initialLanguage =
      languages.find((lang) => lang.code === currentLocale) || languages[0];
    setSelectedLanguage(initialLanguage);
  }, []);

  const changeLanguage = (newLocale: string) => {
    // Set the preferred locale in a cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/;`;

    // Update the selected language state
    setSelectedLanguage(
      languages.find((lang) => lang.code === newLocale) || languages[0],
    );

    // Refresh the page to fetch content in the new language
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[180px] justify-between">
          {selectedLanguage.name}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
          >
            <Check
              className={`mr-2 h-4 w-4 ${selectedLanguage.code === language.code
                  ? "opacity-100"
                  : "opacity-0"
                }`}
            />
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
