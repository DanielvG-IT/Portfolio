import type { MetadataRoute } from "next";

import { absoluteUrl, getSiteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const host = getSiteUrl().toString();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host,
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
