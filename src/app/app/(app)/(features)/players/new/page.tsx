"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import createPlayer from "./createPlayer";

export default function NewPlayer() {
  const t = useTranslations();

  //TODO add image upload functionality
  //TODO add validation
  //TODO add error handling

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">{t("newPlayer.title")}</h1>

      <Card>
        <CardHeader>
          <CardTitle>{t("newPlayer.formTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={createPlayer}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div>
              <Label
                htmlFor="name"
                className="after:ml-1 after:text-red-400 after:content-['*']"
              >
                {t("newPlayer.name")}
              </Label>
              <Input id="name" name="name" required />
            </div>

            <div>
              <Label
                htmlFor="jerseyNumber"
                className="after:ml-1 after:text-red-400 after:content-['*']"
              >
                {t("newPlayer.jerseyNumber")}
              </Label>
              <Input
                id="jerseyNumber"
                name="jerseyNumber"
                type="number"
                required
              />
            </div>

            <div>
              <Label htmlFor="position">{t("newPlayer.position")}</Label>
              <Select name="position">
                <SelectTrigger>
                  <SelectValue placeholder={t("newPlayer.selectPosition")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Forward">
                    {t("newPlayer.forward")}
                  </SelectItem>
                  <SelectItem value="Midfielder">
                    {t("newPlayer.midfielder")}
                  </SelectItem>
                  <SelectItem value="Defender">
                    {t("newPlayer.defender")}
                  </SelectItem>
                  <SelectItem value="Goalkeeper">
                    {t("newPlayer.goalkeeper")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="dateOfBirth">{t("newPlayer.dateOfBirth")}</Label>
              <Input id="dateOfBirth" name="dateOfBirth" type="date" />
            </div>

            <div>
              <Label htmlFor="height">{t("newPlayer.height")} (cm)</Label>
              <Input id="height" name="height" type="number" />
            </div>

            <div>
              <Label htmlFor="weight">{t("newPlayer.weight")} (kg)</Label>
              <Input id="weight" name="weight" type="number" />
            </div>

            <div>
              <Label htmlFor="team">{t("newPlayer.team")}</Label>
              <Input id="team" name="team" />
            </div>

            <Button className="col-span-2 mr-auto" type="submit">
              {t("newPlayer.submit")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
