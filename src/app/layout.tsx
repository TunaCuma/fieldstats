import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fieldstats - AI Football Analysis",
  description: "AI-powered football video analysis app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function PageLayout({
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
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}