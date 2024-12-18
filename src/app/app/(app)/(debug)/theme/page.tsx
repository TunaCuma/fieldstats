import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BellRing, Check, Info } from "lucide-react";
import { DarkModeToggle } from "@/components/settings/DarkModeToggle";

const ThemeShowcase = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Theme Showcase</h1>
          <p className="text-muted-foreground">
            Demonstrating light and dark mode components
          </p>
        </div>

        {/* Primary Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Theme Components
              <DarkModeToggle />
            </CardTitle>

            <CardDescription>
              Explore different component variations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Buttons Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            {/* Badges Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Badges</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            {/* Input Section */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Input</h3>
              <Input placeholder="Enter some text..." />
            </div>

            {/* Alert Section */}
            <div className="space-y-2">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                  This is a default alert message using the theme colors.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <BellRing className="h-4 w-4" />
                <AlertTitle>Destructive Alert</AlertTitle>
                <AlertDescription>
                  This is a destructive alert message.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Check className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </CardFooter>
        </Card>

        {/* Color Palette Card */}
        <Card>
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>Theme color variables showcase</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-primary"></div>
                <p className="text-sm font-medium">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-secondary"></div>
                <p className="text-sm font-medium">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-accent"></div>
                <p className="text-sm font-medium">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-muted"></div>
                <p className="text-sm font-medium">Muted</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-destructive"></div>
                <p className="text-sm font-medium">Destructive</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 w-full rounded-md border"></div>
                <p className="text-sm font-medium">Border</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThemeShowcase;
