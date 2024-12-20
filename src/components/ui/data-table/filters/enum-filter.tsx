import { Filter } from "lucide-react";
import { Column } from "@tanstack/react-table";
import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

interface EnumFilterProps<TData> {
  column: Column<TData, unknown>;
  options: string[];
}

export function EnumFilter<TData>({ column, options }: EnumFilterProps<TData>) {
  const facetedUniqueValues = column.getFacetedUniqueValues();
  const columnFilterValue = (column.getFilterValue() as string[]) ?? [];

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Filter className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
        Filter ({
          columnFilterValue.length
        })
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {options.map((option) => (
            <DropdownMenuCheckboxItem
              key={option}
              checked={columnFilterValue.includes(option)}
              onCheckedChange={(checked) => {
                if (checked) {
                  column.setFilterValue([...(columnFilterValue ?? []), option]);
                } else {
                  column.setFilterValue(
                    columnFilterValue?.filter((value) => value !== option) ??
                    [],
                  );
                }
              }}
            >
              {option}
              {facetedUniqueValues?.size
                ? ` (${facetedUniqueValues.get(option) ?? 0})`
                : null}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
