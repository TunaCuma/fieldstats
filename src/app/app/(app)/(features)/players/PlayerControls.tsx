"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PlayerDisplayProvider,
  usePlayerDisplay,
} from "@/contexts/PlayerDisplayContext";

function PlayerControlsContent() {
  const t = useTranslations();
  const { sortBy, setSortBy, filterBy, setFilterBy } = usePlayerDisplay();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <Input
          type="text"
          placeholder={t("players.search")}
          className="max-w-sm"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Button
          variant={filterBy === "all" ? "default" : "outline"}
          onClick={() => setFilterBy("all")}
        >
          {t("players.filters.all")}
        </Button>
        <Button
          variant={filterBy === "forwards" ? "default" : "outline"}
          onClick={() => setFilterBy("forwards")}
        >
          {t("players.filters.forwards")}
        </Button>
        <Button
          variant={filterBy === "midfielders" ? "default" : "outline"}
          onClick={() => setFilterBy("midfielders")}
        >
          {t("players.filters.midfielders")}
        </Button>
        <Button
          variant={filterBy === "defenders" ? "default" : "outline"}
          onClick={() => setFilterBy("defenders")}
        >
          {t("players.filters.defenders")}
        </Button>
        <Button
          variant={filterBy === "goalkeepers" ? "default" : "outline"}
          onClick={() => setFilterBy("goalkeepers")}
        >
          {t("players.filters.goalkeepers")}
        </Button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Button
          variant={sortBy === "name" ? "default" : "outline"}
          onClick={() => setSortBy("name")}
        >
          {t("players.sort.name")}
        </Button>
        <Button
          variant={sortBy === "position" ? "default" : "outline"}
          onClick={() => setSortBy("position")}
        >
          {t("players.sort.position")}
        </Button>
        <Button
          variant={sortBy === "age" ? "default" : "outline"}
          onClick={() => setSortBy("age")}
        >
          {t("players.sort.age")}
        </Button>
      </div>
    </>
  );
}

export default function PlayerControls() {
  return (
    <PlayerDisplayProvider>
      <PlayerControlsContent />
    </PlayerDisplayProvider>
  );
}
