import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  //  - /api/*           (API routes stay locale-free)
  //  - /design/*        (style explorations stay locale-free per decision #3)
  //  - /_next/*, /_vercel/* (framework internals)
  //  - files with extensions (favicon, og-image, sitemap, etc.)
  matcher: ["/((?!api|design|_next|_vercel|.*\\..*).*)"],
};
