"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DarkModeToggle } from "@/components/DarkModeToggle";

export default function Settings() {
  const t = useTranslations();
  const [notifications, setNotifications] = useState(true);

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
    console.log("Account deletion requested");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">{t("settings.title")}</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("settings.accountSettings")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="current-password">
                {t("settings.currentPassword")}
              </Label>
              <Input id="current-password" type="password" />
            </div>
            <div>
              <Label htmlFor="new-password">{t("settings.newPassword")}</Label>
              <Input id="new-password" type="password" />
            </div>
            <div>
              <Label htmlFor="confirm-password">
                {t("settings.confirmPassword")}
              </Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>{t("settings.changePassword")}</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("settings.notificationSettings")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">
                {t("settings.enableNotifications")}
              </Label>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("settings.appearanceSettings")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">{t("settings.darkMode")}</Label>
              <DarkModeToggle />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("settings.dangerZone")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" onClick={handleDeleteAccount}>
              {t("settings.deleteAccount")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
