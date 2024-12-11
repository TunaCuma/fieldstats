import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PlayersList from "./PlayersList";
// import PlayerControls from "@/components/players/PlayerControls";

export default function Players() {
  const t = useTranslations();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">{t("players.title")}</h1>
      <div className="mb-4 flex items-center justify-between">
        <div />
        {
          //<PlayerControls />
        }
        <Button asChild>
          <Link href="/players/new">{t("players.addPlayer")}</Link>
        </Button>
      </div>
      <PlayersList />
    </div>
  );
}
