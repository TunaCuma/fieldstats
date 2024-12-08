import { api } from "@/trpc/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default async function PlayersList() {
  const players = await api.player.getPlayers();
  // TODO add pagination
  // TODO add sorting
  // TODO add filtering
  // TODO add search
  // TODO add localization

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Avatar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Jersey Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src={player.image ?? undefined}
                    alt={player.name}
                  />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              <TableCell>{player.team?.name ?? "N/A"}</TableCell>
              <TableCell>{player.position}</TableCell>
              <TableCell className="text-right">
                {player.jerseyNumber}
              </TableCell>
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
      </Table>
    </div>
  );
}
