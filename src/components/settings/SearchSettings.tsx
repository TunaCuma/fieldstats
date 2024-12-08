"use client";

import { useState, type ChangeEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Define the types for the settings section
interface SettingsSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

// Define the props for the component
interface SearchSettingsProps {
  settingsSections: SettingsSection[];
}

export default function SearchSettings({
  settingsSections,
}: SearchSettingsProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter settings based on search query
  const filteredSections = settingsSections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Handle input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search settings..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-6"
      />

      <div className="space-y-6">
        {filteredSections.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">{section.content}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
