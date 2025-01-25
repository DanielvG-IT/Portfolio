import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Daniël van Ginneken",
  description: "Personal website of Daniël van Ginneken, made with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
