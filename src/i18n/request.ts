import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { en } from "@/data/messages/en";
import { cs } from "@/data/messages/cs";

const messagesByLocale = { en, cs } as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: messagesByLocale[locale] as unknown as Record<string, unknown>,
  };
});
