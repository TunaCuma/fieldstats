import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "motion/react";
import { Shield } from "lucide-react";

const MatchPage = () => {
  // Mock data for a match
  const match = {
    id: "match1",
    name: "Match 1",
    date: "2024-12-01",
    teamA: "Kavaklıderespor",
    teamB: "Metespor",
    score: "0 - 0",
    teamAPlayers: Array.from({ length: 11 }, (_, i) => `Player #${i + 1}`),
    teamBPlayers: Array.from({ length: 11 }, (_, i) => `Player #${i + 12}`),
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg p-6 shadow-md">
      <div className="mb-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold">{match.name}</h1>
        <p className="">{match.date}</p>
        <div className="mt-4 flex w-full gap-4">
          <div className="ml-auto flex flex-1 flex-col items-center">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <Shield name="shield" size={24} />
            </motion.div>
            <p className="mt-2 text-sm">{match.teamA}</p>
          </div>
          <p className="self-center text-lg font-semibold">{match.score}</p>
          <div className="flex flex-1 flex-col items-center">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <Shield name="shield" size={24} />
            </motion.div>
            <p className="mt-2 text-sm">{match.teamB}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mt-8">
          <h2 className="mb-4 w-full text-center text-lg font-semibold">
            {match.teamA} Players
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Player Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {match.teamAPlayers.map((player, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{player}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 w-full text-center text-lg font-semibold">
            {match.teamB} Players
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Player Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {match.teamBPlayers.map((player, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 12}</TableCell>
                  <TableCell>{player}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
