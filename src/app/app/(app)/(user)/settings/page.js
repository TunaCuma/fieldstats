import LanguageSelector from "@/components/settings/LanguageSelector";
import { DarkModeToggle } from "@/components/settings/DarkModeToggle";
import AccountInfo from "@/components/settings/AccountInfo";
import { routes } from "@/constants/routes";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SearchSettings from "@/components/settings/SearchSettings";

export default function Settings() {
  const t = useTranslations();

  const settingsSections = [
    {
      id: "language",
      title: t("settings.languageSelector"),
      content: <LanguageSelector />,
    },
    {
      id: "appearance",
      title: t("settings.appearanceSettings"),
      content: (
        <div className="flex min-h-[3rem] items-center justify-between">
          <Label htmlFor="dark-mode">{t("settings.theme")}</Label>
          <DarkModeToggle />
        </div>
      ),
    },
    {
      id: "account",
      title: t("settings.account"),
      content: (
        <div className="flex min-h-[3rem] items-center justify-between">
          <AccountInfo />
          <Link href={routes.signout}>
            <Button variant="secondary">{t("settings.signout")}</Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">{t("settings.title")}</h1>
      <SearchSettings settingsSections={settingsSections} />
    </div>
  );
}
