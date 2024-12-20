"use client";
import * as React from "react";
import Link from "next/link";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  useReactTable,
} from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { DataTablePagination } from "@/components/ui/data-table/data-table-pagination";
import { DataTableViewOptions } from "@/components/ui/data-table/data-table-view-options";
import { TableContent } from "@/components/ui/data-table/data-table-content";
import { TableSearch } from "@/components/ui/data-table/data-table-search";
import { DataTableActiveFilters } from "@/components/ui/data-table/data-table-active-filters";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const t = useTranslations();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    // Core features
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // Faceting models for advanced filtering
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    // State handlers
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    // State
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    // Initial state
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    // Enable features
    enableRowSelection: true,
    enableColumnFilters: true,
  });

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <TableSearch
          table={table}
          columnId="name"
          placeholder="Search player"
        />
        <div className="flex items-center space-x-4">
          <DataTableActiveFilters table={table} />
          <DataTableViewOptions table={table} />
          <Button asChild>
            <Link href="/players/new">{t("players.addPlayer")}</Link>
          </Button>
        </div>
      </div>
      <TableContent<TData, TValue> table={table} columns={columns} />
      <DataTablePagination table={table} />
    </div>
  );
}
