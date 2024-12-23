import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  home: {
    label: "Home Team",
    color: "hsl(var(--chart-1))",
  },
  away: {
    label: "Away Team",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const playerConfig = {
  delta: {
    label: "Delta",
    color: "hsl(var(--chart-1))",
  },
  speed: {
    label: "Speed",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const DistanceCharts = () => {
  const [highSpeedData, setHighSpeedData] = React.useState([]);
  const [totalDistanceData, setTotalDistanceData] = React.useState([]);
  const [playersData, setPlayersData] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const highSpeedResponse = await fetch(
          "/data/distance_graph_data/team/high_speed_distance.json",
        );
        const totalDistanceResponse = await fetch(
          "/data/distance_graph_data/team/total_distance.json",
        );

        setHighSpeedData(await highSpeedResponse.json());
        setTotalDistanceData(await totalDistanceResponse.json());

        const playerPromises = Array.from({ length: 23 }, (_, i) => i + 1).map(
          async (playerId) => {
            const response = await fetch(
              `/data/distance_graph_data/player/player_${playerId}.json`,
            );
            const data = await response.json();
            return [playerId, data];
          },
        );

        const playerResults = await Promise.all(playerPromises);
        const playerDataMap = Object.fromEntries(playerResults);
        setPlayersData(playerDataMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      {/* Team Charts */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* High Speed Distance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>High Speed Distance</CardTitle>
            <CardDescription>
              Team high-speed distance comparison over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                data={highSpeedData}
                height={300}
                margin={{
                  left: 12,
                  right: 12,
                  top: 12,
                  bottom: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient id="fillHome" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-home)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-home)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillAway" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-away)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-away)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="away"
                  type="monotone"
                  fill="url(#fillAway)"
                  fillOpacity={0.4}
                  stroke="var(--color-away)"
                />
                <Area
                  dataKey="home"
                  type="monotone"
                  fill="url(#fillHome)"
                  fillOpacity={0.4}
                  stroke="var(--color-home)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Total Distance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Total Distance</CardTitle>
            <CardDescription>
              Team total distance covered over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                data={totalDistanceData}
                height={300}
                margin={{
                  left: 12,
                  right: 12,
                  top: 12,
                  bottom: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient
                    id="fillHomeTotal"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-home)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-home)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient
                    id="fillAwayTotal"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-away)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-away)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="away"
                  type="monotone"
                  fill="url(#fillAwayTotal)"
                  fillOpacity={0.4}
                  stroke="var(--color-away)"
                />
                <Area
                  dataKey="home"
                  type="monotone"
                  fill="url(#fillHomeTotal)"
                  fillOpacity={0.4}
                  stroke="var(--color-home)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Player Charts in Accordion */}
      <Card>
        <CardHeader>
          <CardTitle>Player Performance</CardTitle>
          <CardDescription>
            Individual player speed and delta metrics over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {Array.from({ length: 23 }, (_, i) => i + 1).map((playerId) => (
              <AccordionItem key={playerId} value={`player-${playerId}`}>
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">
                    Player {playerId}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mx-auto w-1/2 pt-4">
                    <ChartContainer config={playerConfig}>
                      <AreaChart
                        data={playersData[playerId]?.data || []}
                        height={300}
                        margin={{
                          left: 12,
                          right: 12,
                          top: 12,
                          bottom: 12,
                        }}
                      >
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="time"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tickMargin={8}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent />}
                        />
                        <defs>
                          <linearGradient
                            id={`fillDelta${playerId}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="var(--color-delta)"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="var(--color-delta)"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                          <linearGradient
                            id={`fillSpeed${playerId}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="var(--color-speed)"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="var(--color-speed)"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          dataKey="speed"
                          type="monotone"
                          fill={`url(#fillSpeed${playerId})`}
                          fillOpacity={0.4}
                          stroke="var(--color-speed)"
                        />
                        <Area
                          dataKey="delta"
                          type="monotone"
                          fill={`url(#fillDelta${playerId})`}
                          fillOpacity={0.4}
                          stroke="var(--color-delta)"
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default DistanceCharts;
