import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "@/styles/globals.css";

export default function LandingPage() {
  const t = useTranslations("LandingPage");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 w-full bg-zinc-400/50 py-4 text-primary-foreground shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <nav>
            <Button variant="secondary" asChild>
              <Link href="https://app.fieldstats.pro">{t("navSignUp")}</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex flex-grow flex-col gap-20">
        <section className="flex h-screen flex-col justify-center bg-gradient-to-b from-zinc-400 to-background py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold">{t("heroTitle")}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              {t("heroSubtitle")}
            </p>
            <Button size="lg" asChild>
              <Link href="https://app.fieldstats.pro">{t("heroButton")}</Link>
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">
              {t("featuresTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {["feature1", "feature2", "feature3"].map((feature) => (
                <Card key={feature}>
                  <CardHeader>
                    <CardTitle>{t(`${feature}Title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {t(`${feature}Description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">{t("ctaTitle")}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">{t("ctaSubtitle")}</p>
            <Button size="lg" asChild>
              <Link href="https://app.fieldstats.pro">{t("ctaButton")}</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-background py-8">
        <div className="container mx-auto text-center">
          <p>{t("footer")}</p>
        </div>
      </footer>
    </div>
  );
}
