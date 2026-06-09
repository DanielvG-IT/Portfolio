import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daniël van Ginneken Portfolio",
    short_name: "DvG",
    description:
      "Early-career software developer with infrastructure roots, focused on .NET, TypeScript, React, and systems-aware software development.",
    start_url: "/nl",
    display: "standalone",
    background_color: "#0C0C0E",
    theme_color: "#0A84FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
