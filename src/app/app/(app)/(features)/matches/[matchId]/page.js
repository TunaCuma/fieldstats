"use client";

import MatchPage from "./MatchPage";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlayerVisualization from "@/components/graphs/PlayerVisualization";
import Figure from "../../../(debug)/debug/Figure";
import DataFigures from "./DataFigures";
import DistanceCharts from "./DistanceGraphs";
import StatisticsTables from "./Tables";

export default function MatchDetails() {
  const t = useTranslations();
  const params = useParams();
  const { matchId } = params;

  // Mock data for a match
  const match = {
    id: matchId,
    name: "Match 1",
    date: "2024-12-01",
    teamA: "Kavaklıderespor",
    teamB: "Metespor",
    score: "0 - 0",
  };

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">
        {t("matchDetails.title") + ": " + match.name}
      </h1>

      <div className="flex flex-col items-center gap-4">
        <PlayerVisualization />
      </div>

      <Card className="">
        <CardHeader>
          <CardTitle>{t("matchDetails.summary")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {t("matchDetails.date")}: {match.date}
          </p>
          <p>
            {t("matchDetails.teams")}: {match.teamA} vs {match.teamB}
          </p>
          <p>
            {t("matchDetails.score")}: {match.score}
          </p>
        </CardContent>
        <CardFooter>
          <div className="space-x-2">
            <Button asChild variant="outline">
              <Link href={`/matches/${matchId}/edit`}>
                {t("matchDetails.editMatch")}
              </Link>
            </Button>
            <Button variant="destructive">
              {t("matchDetails.deleteMatch")}
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">
            {t("matchDetails.overview")}
          </TabsTrigger>
          <TabsTrigger value="distance">Distance Charts</TabsTrigger>
          <TabsTrigger value="heatMaps">Heatmaps</TabsTrigger>
          <TabsTrigger value="tables">Tables</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>{t("matchDetails.overviewTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t("matchDetails.overviewContent")}</p>
              <MatchPage />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="distance">
          <Card>
            <CardHeader>
              <CardTitle>{t("matchDetails.reportsTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t("matchDetails.reportsContent")}</p>
              <DistanceCharts />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="heatMaps">
          <Card>
            <CardHeader>
              <CardTitle>{t("matchDetails.reportsTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t("matchDetails.reportsContent")}</p>
              <DataFigures />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tables">
          <Card>
            <CardHeader>
              <CardTitle>{t("matchDetails.reportsTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t("matchDetails.reportsContent")}</p>
              <StatisticsTables />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
