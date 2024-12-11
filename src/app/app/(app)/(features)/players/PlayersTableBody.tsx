"use client";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { fetchPlayers } from "./_actions/fetchPlayersAction";
import { useState, useEffect } from "react";
import { type PlayerType } from "@/data-access/players/playerTypes";

export default function PlayersTableBody() {
  // const players = await api.player.getPlayers();

  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    fetchPlayers().then(setPlayers).catch(console.error);
  }, []);

  return (
    <TableBody>
      {players.map((player) => (
        <TableRow key={player.id}>
          <TableCell>
            <Avatar>
              <AvatarImage src={player.image ?? undefined} alt={player.name} />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </TableCell>
          <TableCell className="font-semibold">{player.name}</TableCell>
          <TableCell>{player.team?.name ?? "N/A"}</TableCell>
          <TableCell>{player.position}</TableCell>
          <TableCell>{player.jerseyNumber}</TableCell>
        </TableRow>
      ))}
      {players.length === 0 && (
        <TableRow>
          <TableCell colSpan={5} className="text-center">
            No players found
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
