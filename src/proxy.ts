import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  //  - /api/*             (API routes stay locale-free)
  //  - /_next/*, /_vercel/* (framework internals)
  //  - files with extensions (favicon, og-image, sitemap, etc.)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
