import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing.public";

export const dynamic = "force-static";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: "Manifest"
  });

  return {
    name: t("name"),
    short_name: t("short_name"),
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    start_url: "/",
    theme_color: siteConfig.primaryColor,
    background_color: "#ffffff",
    display: "standalone"
  };
}
