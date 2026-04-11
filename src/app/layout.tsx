import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniël van Ginneken — Portfolio",
  description:
    "Portfolio van Daniël van Ginneken: software development, infrastructuurroots en moderne webbouw.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full">
      <body className="min-h-full bg-ground text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
