import type { MetadataRoute } from "next";

import { personName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: personName,
    short_name: "Daniël",
    description:
      "Bilingual portfolio of Daniël van Ginneken, a software developer with infrastructure roots.",
    start_url: "/nl",
    display: "standalone",
    background_color: "#f4efe7",
    theme_color: "#f4efe7",
    lang: "nl",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
