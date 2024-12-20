import { Filter } from "lucide-react";
import { Column } from "@tanstack/react-table";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DateFilterProps<TData> {
  column: Column<TData, unknown>;
}

export function DateFilter<TData>({ column }: DateFilterProps<TData>) {
  const columnFilterValue = column.getFilterValue() as DateRange;

  return (
    <div
      className="flex w-full min-w-[300px] flex-col px-2 py-1.5"
      onClick={(e) => e.stopPropagation()}
      onSelect={(e) => e.preventDefault()}
    >
      <div className="flex w-full flex-col">
        <div className="mb-2 text-sm font-medium">
          <Filter className="mr-2 inline-block h-3.5 w-3.5 text-muted-foreground/70" />
          Filter by birth date
        </div>
        <div className="p-2">
          <div className="space-y-4">
            {/* From Date */}
            <div>
              <Label className="mb-1.5 text-sm font-medium">From:</Label>
              <div className="flex items-center gap-2">
                <select
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={columnFilterValue?.from?.getFullYear() || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    const year = parseInt(e.target.value);
                    const newDate = columnFilterValue?.from || new Date();
                    newDate.setFullYear(year);
                    column.setFilterValue({
                      ...columnFilterValue,
                      from: new Date(newDate),
                    });
                  }}
                >
                  <option value="">Year</option>
                  {Array.from(
                    { length: 100 },
                    (_, i) => new Date().getFullYear() - i,
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <select
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={columnFilterValue?.from?.getMonth() || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    if (!columnFilterValue?.from) return;
                    const month = parseInt(e.target.value);
                    const newDate = new Date(columnFilterValue.from);
                    newDate.setMonth(month);
                    column.setFilterValue({
                      ...columnFilterValue,
                      from: newDate,
                    });
                  }}
                  disabled={!columnFilterValue?.from?.getFullYear()}
                >
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>
                      {new Date(2000, i).toLocaleString("default", {
                        month: "long",
                      })}
                    </option>
                  ))}
                </select>
                <select
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={columnFilterValue?.from?.getDate() || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    if (!columnFilterValue?.from) return;
                    const day = parseInt(e.target.value);
                    const newDate = new Date(columnFilterValue.from);
                    newDate.setDate(day);
                    column.setFilterValue({
                      ...columnFilterValue,
                      from: newDate,
                    });
                  }}
                  disabled={!columnFilterValue?.from?.getMonth()}
                >
                  <option value="">Day</option>
                  {Array.from(
                    {
                      length: new Date(
                        columnFilterValue?.from?.getFullYear() || 2000,
                        (columnFilterValue?.from?.getMonth() || 0) + 1,
                        0,
                      ).getDate(),
                    },
                    (_, i) => i + 1,
                  ).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* To Date */}
            <div>
              <Label className="mb-1.5 text-sm font-medium">To:</Label>
              <div className="flex items-center gap-2">
                <select
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={columnFilterValue?.to?.getFullYear() || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    const year = parseInt(e.target.value);
                    const newDate = columnFilterValue?.to || new Date();
                    newDate.setFullYear(year);
                    column.setFilterValue({
                      ...columnFilterValue,
                      to: new Date(newDate),
                    });
                  }}
                >
                  <option value="">Year</option>
                  {Array.from(
                    { length: 100 },
                    (_, i) => new Date().getFullYear() - i,
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <select
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={columnFilterValue?.to?.getMonth() || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    if (!columnFilterValue?.to) return;
                    const month = parseInt(e.target.value);
                    const newDate = new Date(columnFilterValue.to);
                    newDate.setMonth(month);
                    column.setFilterValue({
                      ...columnFilterValue,
                      to: newDate,
                    });
                  }}
                  disabled={!columnFilterValue?.to?.getFullYear()}
                >
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>
                      {new Date(2000, i).toLocaleString("default", {
                        month: "long",
                      })}
                    </option>
                  ))}
                </select>
                <select
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={columnFilterValue?.to?.getDate() || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    if (!columnFilterValue?.to) return;
                    const day = parseInt(e.target.value);
                    const newDate = new Date(columnFilterValue.to);
                    newDate.setDate(day);
                    column.setFilterValue({
                      ...columnFilterValue,
                      to: newDate,
                    });
                  }}
                  disabled={!columnFilterValue?.to?.getMonth()}
                >
                  <option value="">Day</option>
                  {Array.from(
                    {
                      length: new Date(
                        columnFilterValue?.to?.getFullYear() || 2000,
                        (columnFilterValue?.to?.getMonth() || 0) + 1,
                        0,
                      ).getDate(),
                    },
                    (_, i) => i + 1,
                  ).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        {(columnFilterValue?.from || columnFilterValue?.to) && (
          <div className="border-t px-2 py-1 text-xs">
            <Button
              variant="ghost"
              className="h-auto p-0 text-xs hover:bg-transparent"
              onClick={(e) => {
                e.stopPropagation();
                column.setFilterValue(undefined);
              }}
            >
              Clear filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
