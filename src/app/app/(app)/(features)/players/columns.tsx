"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table/data-column-header";
import type { PlayerType } from "@/data-access/players/playerTypes";
import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the possible positions for the enum filter
const POSITIONS = ["Forward", "Midfielder", "Defender", "Goalkeeper"];

export const columns: ColumnDef<PlayerType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "jerseyNumber",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Jersey Number"
        columnType="number"
        minValue={1}
        maxValue={99}
      />
    ),
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Position"
        columnType="enum"
        enumValues={POSITIONS}
      />
    ),
    filterFn: (row, id, filterValue: string[]) => {
      if (!filterValue.length) return true; // Show all rows when no filter is selected
      const value = row.getValue(id);
      return filterValue.includes(value as string);
    },
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Date of Birth"
        columnType="date"
      />
    ),
    cell: ({ row }) => {
      const dateOfBirth = row.original.dateOfBirth;
      if (!dateOfBirth) {
        return <span>N/A</span>;
      }
      const formattedDate = new Date(dateOfBirth).toLocaleDateString("tr");
      return <span>{formattedDate}</span>;
    },
    filterFn: (row, id, filterValue) => {
      const { from, to } = filterValue;
      if (!from && !to) return true;

      const cellDate = new Date(row.getValue(id));
      if (from && to) {
        return cellDate >= from && cellDate <= to;
      }
      if (from) {
        return cellDate >= from;
      }
      if (to) {
        return cellDate <= to;
      }
      return true;
    },
  },
  {
    accessorKey: "height",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Height"
        columnType="number"
        minValue={150} // Assuming height is in cm
        maxValue={220}
      />
    ),
  },
  {
    accessorKey: "weight",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Weight"
        columnType="number"
        minValue={50} // Assuming weight is in kg
        maxValue={120}
      />
    ),
  },
  {
    accessorKey: "team",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Team" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const player = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(player.id.toString())
              }
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View player</DropdownMenuItem>
            <DropdownMenuItem>View report details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
