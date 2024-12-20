// components/ui/data-table/data-table-active-filters.tsx
import { X } from "lucide-react";
import { type Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DataTableActiveFiltersProps<TData> {
  table: Table<TData>;
}

export function DataTableActiveFilters<TData>({
  table,
}: DataTableActiveFiltersProps<TData>) {
  const filters = table.getState().columnFilters;

  if (!filters.length) return null;

  const getColumnHeader = (column: any) => {
    const header = column.columnDef.accessorKey;
    return header as string;
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((filter) => {
        const column = table.getColumn(filter.id);
        if (!column) return null;

        // Handle both array and string filter values
        const filterValue = filter.value;
        if (!filterValue) return null;

        // If it's a search input (string value)
        if (typeof filterValue === "string" && filterValue.trim()) {
          return (
            <Badge
              key={filter.id}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {getColumnHeader(column)}: {filterValue}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => column.setFilterValue(undefined)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove filter</span>
              </Button>
            </Badge>
          );
        }

        // If it's an array of values (like enum filter)
        if (Array.isArray(filterValue)) {
          return filterValue.map((value) => (
            <Badge
              key={`${filter.id}-${value}`}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {getColumnHeader(column)}: {value}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => {
                  const currentFilters = column.getFilterValue() as string[];
                  column.setFilterValue(
                    currentFilters.filter((v) => v !== value),
                  );
                }}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove filter</span>
              </Button>
            </Badge>
          ));
        }

        return null;
      })}
      <Button
        variant="ghost"
        size="sm"
        className="h-6 px-2 text-sm"
        onClick={() => table.resetColumnFilters()}
      >
        Clear all
      </Button>
    </div>
  );
}
