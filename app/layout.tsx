import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { defaultLocale, isLocale, siteUrl } from "@/lib/site";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniël van Ginneken",
    template: "%s | Daniël van Ginneken",
  },
  description:
    "Premium bilingual portfolio of Daniël van Ginneken, a software developer with infrastructure roots.",
  applicationName: "Daniël van Ginneken",
  alternates: {
    languages: {
      nl: `${siteUrl}/nl`,
      en: `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Daniël van Ginneken",
    title: "Daniël van Ginneken",
    description:
      "Software developer with infrastructure roots, building modern software on top of strong technical foundations.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniël van Ginneken",
    description:
      "Software developer with infrastructure roots, building modern software on top of strong technical foundations.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe7" },
    { media: "(prefers-color-scheme: dark)", color: "#10161c" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const headerStore = await headers();
  const localeHeader = headerStore.get("x-locale");
  const locale = isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
