import { ImageResponse } from "next/og";

import { defaultLocale, getDictionary, isLocale, personName } from "@/lib/site";

export const alt = "Daniël van Ginneken portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(180deg, rgba(244,239,231,1) 0%, rgba(232,226,215,1) 100%)",
          color: "#151a20",
          padding: "64px",
          border: "1px solid #d8d0c4",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#4f5964",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
          }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span>Software</span>
            <span style={{ color: "#0d6b66" }}>•</span>
            <span>Infrastructure</span>
          </div>
          <span>{locale.toUpperCase()}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              maxWidth: "920px",
              fontSize: 84,
              lineHeight: 1.02,
              letterSpacing: "-0.05em",
              fontWeight: 700,
            }}>
            {dictionary.home.hero.title}
          </div>
          <div
            style={{
              maxWidth: "920px",
              fontSize: 28,
              lineHeight: 1.45,
              color: "#4f5964",
            }}>
            {dictionary.meta.home.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: 46,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}>
              {personName}
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#4f5964",
              }}>
              {dictionary.home.hero.eyebrow}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "160px",
              height: "160px",
              borderRadius: "9999px",
              border: "2px solid #0d6b66",
              color: "#0d6b66",
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
            }}>
            Portfolio
          </div>
        </div>
      </div>
    ),
    size,
  );
}
