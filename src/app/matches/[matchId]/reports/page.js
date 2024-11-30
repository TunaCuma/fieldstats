'use client'

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function MatchReport() {
  const { t } = useTranslation();
  const params = useParams();
  const { matchId } = params;

  // Mock data for a match
  const match = {
    id: matchId,
    name: 'Team A vs Team B',
    date: '2023-05-01',
    teamA: 'Team A',
    teamB: 'Team B',
    score: '2 - 1',
  };

  // Mock data for possession
  const possessionData = [
    { name: 'Team A', value: 60 },
    { name: 'Team B', value: 40 },
  ];

  // Mock data for shots
  const shotsData = [
    { name: 'Team A', total: 15, onTarget: 7 },
    { name: 'Team B', total: 10, onTarget: 4 },
  ];

  // Mock data for player performance
  const playerPerformanceData = [
    { name: 'Player 1', rating: 8.5 },
    { name: 'Player 2', rating: 7.8 },
    { name: 'Player 3', rating: 7.2 },
    { name: 'Player 4', rating: 8.1 },
    { name: 'Player 5', rating: 7.5 },
  ];

  // Mock data for match timeline
  const timelineData = [
    { minute: 0, eventA: 0, eventB: 0 },
    { minute: 15, eventA: 1, eventB: 0 },
    { minute: 30, eventA: 1, eventB: 1 },
    { minute: 45, eventA: 2, eventB: 1 },
    { minute: 60, eventA: 2, eventB: 1 },
    { minute: 75, eventA: 2, eventB: 1 },
    { minute: 90, eventA: 2, eventB: 1 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('matchReport.title', { matchName: match.name })}</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t('matchReport.matchSummary')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('matchReport.date')}: {match.date}</p>
          <p>{t('matchReport.teams')}: {match.teamA} vs {match.teamB}</p>
          <p>{t('matchReport.score')}: {match.score}</p>
        </CardContent>
      </Card>

      <div className="mb-6">
        <Button asChild>
          <Link href={`/matches/${matchId}`}>{t('matchReport.backToMatch')}</Link>
        </Button>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">{t('matchReport.overview')}</TabsTrigger>
          <TabsTrigger value="stats">{t('matchReport.stats')}</TabsTrigger>
          <TabsTrigger value="players">{t('matchReport.players')}</TabsTrigger>
          <TabsTrigger value="timeline">{t('matchReport.timeline')}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>{t('matchReport.possessionTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    possession: {
                      label: "Possession",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={possessionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {possessionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>{t('matchReport.shotsTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    total: {
                      label: "Total Shots",
                      color: "hsl(var(--chart-1))",
                    },
                    onTarget: {
                      label: "Shots on Target",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={shotsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="total" fill="var(--color-total)" />
                      <Bar dataKey="onTarget" fill="var(--color-onTarget)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="players">
          <Card>
            <CardHeader>
              <CardTitle>{t('matchReport.playerPerformanceTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    rating: {
                      label: "Player Rating",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={playerPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="rating" fill="var(--color-rating)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>{t('matchReport.matchTimelineTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    eventA: {
                      label: "Team A Events",
                      color: "hsl(var(--chart-1))",
                    },
                    eventB: {
                      label: "Team B Events",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="minute" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line type="monotone" dataKey="eventA" stroke="var(--color-eventA)" />
                      <Line type="monotone" dataKey="eventB" stroke="var(--color-eventB)" />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

