import { type Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { EnumFilter } from "../filters/enum-filter";
import { DateFilter } from "../filters/date-filter";
import { NumberFilter } from "../filters/number-filter";

export interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  columnType?: "enum" | "date" | "number";
  enumValues?: string[];
  minValue?: number;
  maxValue?: number;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
  columnType,
  enumValues = [],
  minValue = 0,
  maxValue = 100,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const [selectedEnumValues, setSelectedEnumValues] = useState<Set<string>>(
    new Set(enumValues),
  );
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [numberRange, setNumberRange] = useState<[number, number]>([
    minValue,
    maxValue,
  ]);

  const renderFilter = () => {
    switch (columnType) {
      case "enum":
        return (
          <EnumFilter
            values={enumValues}
            selectedValues={selectedEnumValues}
            onChange={(newValues) => {
              setSelectedEnumValues(newValues);
              column.setFilterValue(Array.from(newValues));
            }}
          />
        );
      case "date":
        return (
          <DateFilter
            dateRange={dateRange}
            onChange={(newRange) => {
              setDateRange(newRange);
              column.setFilterValue(newRange);
            }}
          />
        );
      case "number":
        return (
          <NumberFilter
            value={numberRange}
            onChange={(newRange) => {
              setNumberRange(newRange);
              column.setFilterValue(newRange);
            }}
            min={minValue}
            max={maxValue}
          />
        );
      default:
        return null;
    }
  };

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          {columnType && (
            <>
              <DropdownMenuSeparator />
              {renderFilter()}
            </>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}