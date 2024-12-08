import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">{t("dashboard.title")}</h1>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{t("dashboard.recentActivity")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{t("dashboard.noRecentActivity")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("dashboard.quickActions")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <Button asChild>
              <Link href="/upload">{t("dashboard.uploadNewFootage")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/matches">{t("dashboard.viewMatches")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/matches">{t("dashboard.viewReports")}</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("dashboard.stats")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{t("dashboard.totalMatches")}: 0</p>
            <p>{t("dashboard.totalReports")}: 0</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-4 text-2xl font-semibold">
        {t("dashboard.recentMatches")}
      </h2>
      <Card>
        <CardContent>
          <p className="py-4">{t("dashboard.noRecentMatches")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
