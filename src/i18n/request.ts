import { getRequestConfig } from "next-intl/server";
import { headers, cookies } from "next/headers";
import { IntlErrorCode } from "next-intl";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const savedLocale = cookieStore.get("NEXT_LOCALE")?.value; // Read from the cookie

  const headersList = headers();
  const acceptLanguage = headersList.get("Accept-Language");

  // Function to parse the Accept-Language header
  const parseAcceptLanguage = (header: string): string => {
    const languages = header
      .split(",")
      .map((lang) => lang.split(";")[0].trim());
    return languages[0].substring(0, 2); // Get the first two characters of the first language
  };

  // Get the locale from the cookie or Accept-Language header, defaulting to 'en'
  const locale =
    savedLocale ||
    (acceptLanguage ? parseAcceptLanguage(acceptLanguage) : "en");

  console.log(`Detected locale: ${locale}`);

  // Ensure the locale is supported, fallback to 'en' if not
  const supportedLocales = ["en", "tr"]; // Add your supported locales here
  const finalLocale = supportedLocales.includes(locale) ? locale : "en";

  return {
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error
        console.error(error);
      }
    },
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default,
  };
});
