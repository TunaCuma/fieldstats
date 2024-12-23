import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatisticsTables = () => {
  const [teamStats, setTeamStats] = React.useState(null);
  const [playerStats, setPlayerStats] = React.useState(null);

  React.useEffect(() => {
    // Fetch team statistics
    fetch("/data/table_data/team_statistics.json")
      .then((response) => response.json())
      .then((data) => setTeamStats(data))
      .catch((error) => console.error("Error fetching team stats:", error));

    // Fetch player statistics
    fetch("/data/table_data/player_statistics.json")
      .then((response) => response.json())
      .then((data) => setPlayerStats(data))
      .catch((error) => console.error("Error fetching player stats:", error));
  }, []);

  const formatNumber = (num) => {
    return Number(num).toFixed(2);
  };

  return (
    <div className="space-y-8">
      {/* Team Statistics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Team Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          {teamStats && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Team</TableHead>
                  <TableHead>Total Distance</TableHead>
                  <TableHead>High Intensity Distance</TableHead>
                  <TableHead>Sprint Distance</TableHead>
                  <TableHead>High Speed Distance</TableHead>
                  <TableHead>Average Speed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(teamStats).map(([team, stats]) => (
                  <TableRow key={team}>
                    <TableCell className="font-medium capitalize">
                      {team}
                    </TableCell>
                    <TableCell>{formatNumber(stats.total_distance)}</TableCell>
                    <TableCell>
                      {formatNumber(stats.high_intensity_distance)}
                    </TableCell>
                    <TableCell>{formatNumber(stats.sprint_distance)}</TableCell>
                    <TableCell>
                      {formatNumber(stats.high_speed_distance)}
                    </TableCell>
                    <TableCell>{formatNumber(stats.average_speed)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Player Statistics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Player Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          {playerStats && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Total Distance</TableHead>
                  <TableHead>High Intensity Distance</TableHead>
                  <TableHead>Sprint Distance</TableHead>
                  <TableHead>High Speed Distance</TableHead>
                  <TableHead>Average Speed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playerStats.map((player) => (
                  <TableRow key={player.id}>
                    <TableCell className="font-medium">{player.id}</TableCell>
                    <TableCell className="capitalize">{player.team}</TableCell>
                    <TableCell>{formatNumber(player.total_distance)}</TableCell>
                    <TableCell>
                      {formatNumber(player.high_intensity_distance)}
                    </TableCell>
                    <TableCell>
                      {formatNumber(player.sprint_distance)}
                    </TableCell>
                    <TableCell>
                      {formatNumber(player.high_speed_distance)}
                    </TableCell>
                    <TableCell>{formatNumber(player.average_speed)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticsTables;
