import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const acceptLanguage = headersList.get("Accept-Language");

  // Function to parse the Accept-Language header
  const parseAcceptLanguage = (header: string): string => {
    const languages = header
      .split(",")
      .map((lang) => lang.split(";")[0].trim());
    return languages[0].substring(0, 2); // Get the first two characters of the first language
  };

  // Get the locale from the Accept-Language header, defaulting to 'en' if not available
  const locale = acceptLanguage ? parseAcceptLanguage(acceptLanguage) : "en";

  console.log(`Detected locale: ${locale}`);

  // Ensure the locale is supported, fallback to 'en' if not
  const supportedLocales = ["en", "tr"]; // Add your supported locales here
  const finalLocale = supportedLocales.includes(locale) ? locale : "en";

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default,
  };
});
