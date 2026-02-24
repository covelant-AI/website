import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "en",

  // Use locale prefix only when needed
  localePrefix: "as-needed",
});

export const config = {
  // Match all paths
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
