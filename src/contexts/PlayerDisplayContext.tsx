"use client";

import React, { createContext, useState, useContext } from "react";

type SortOption = "name" | "position" | "age";
type FilterOption =
  | "all"
  | "forwards"
  | "midfielders"
  | "defenders"
  | "goalkeepers";

interface PlayerDisplayContextType {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  filterBy: FilterOption;
  setFilterBy: (option: FilterOption) => void;
}

const PlayerDisplayContext = createContext<
  PlayerDisplayContextType | undefined
>(undefined);

export const usePlayerDisplay = () => {
  const context = useContext(PlayerDisplayContext);
  if (context === undefined) {
    throw new Error(
      "usePlayerDisplay must be used within a PlayerDisplayProvider",
    );
  }
  return context;
};

export const PlayerDisplayProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  return (
    <PlayerDisplayContext.Provider
      value={{ sortBy, setSortBy, filterBy, setFilterBy }}
    >
      {children}
    </PlayerDisplayContext.Provider>
  );
};
