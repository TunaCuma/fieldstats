"use client";

import * as React from "react";
import { type Table as TableType } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

interface TableSearchProps<TData> {
  table: TableType<TData>;
  columnId: string;
  placeholder?: string;
}

export function TableSearch<TData>({
  table,
  columnId,
  placeholder = "Search...",
}: TableSearchProps<TData>) {
  return (
    <Input
      placeholder={placeholder}
      value={(table.getColumn(columnId)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(columnId)?.setFilterValue(event.target.value)
      }
      className="max-w-sm shadow-sm"
    />
  );
}
