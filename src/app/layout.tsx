import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fieldstats - AI Football Analysis",
  description: "AI-powered football video analysis app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetching locale and messages for NextIntl
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${inter.className}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <TRPCReactProvider>
              <div className="bg-background text-foreground flex h-screen overflow-hidden">
                <div className="hidden md:flex md:w-64 md:flex-col">
                  <Sidebar />
                </div>
                <div className="flex flex-1 flex-col overflow-hidden">
                  <header className="bg-card flex h-16 items-center border-b px-4">
                    <Breadcrumbs />
                  </header>
                  <main className="flex-1 overflow-y-auto p-4">{children}</main>
                </div>
              </div>
            </TRPCReactProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
