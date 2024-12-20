// TODO remove slider as it cant show range
import { Filter } from "lucide-react";
import { Column } from "@tanstack/react-table";
import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface NumberFilterProps<TData> {
  column: Column<TData, unknown>;
  min?: number;
  max?: number;
}

export function NumberFilter<TData>({
  column,
  min = 0,
  max = 100,
}: NumberFilterProps<TData>) {
  const columnFilterValue = (column.getFilterValue() as [number, number]) ?? [
    min,
    max,
  ];

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Filter className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
        Filter by range
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="w-72 p-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Input
                  type="number"
                  value={columnFilterValue[0]}
                  onChange={(e) => {
                    const value = e.target.value;
                    column.setFilterValue([
                      Number(value),
                      columnFilterValue[1],
                    ]);
                  }}
                  className="h-8 w-20"
                  min={min}
                  max={columnFilterValue[1]}
                />
                <span className="text-muted-foreground">to</span>
                <Input
                  type="number"
                  value={columnFilterValue[1]}
                  onChange={(e) => {
                    const value = e.target.value;
                    column.setFilterValue([
                      columnFilterValue[0],
                      Number(value),
                    ]);
                  }}
                  className="h-8 w-20"
                  min={columnFilterValue[0]}
                  max={max}
                />
              </div>
              <Slider
                min={min}
                max={max}
                value={columnFilterValue}
                onValueChange={(value: [number, number]) =>
                  column.setFilterValue(value)
                }
                className="pt-2"
              />
            </div>
          </div>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
