import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always", // URLs: /en/... and /fr/...
});

export const config = {
  matcher: [
    // Match all paths except _next, api, static files
    "/((?!_next|api|.*\\..*).*)",
  ],
};