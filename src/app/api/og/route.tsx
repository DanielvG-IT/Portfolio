import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = {
  width: 1200,
  height: 630,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title =
    searchParams.get("title")?.slice(0, 120) ??
    "Daniël van Ginneken — Portfolio";

  const subtitle =
    searchParams.get("subtitle")?.slice(0, 160) ??
    "Software gebouwd op sterke fundamenten.";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "radial-gradient(circle at 12% 8%, rgba(43,72,101,0.28), rgba(242,237,228,0.95) 45%), #F2EDE4",
        color: "#1C1A17",
        padding: "72px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          fontSize: 28,
          color: "#6A6158",
        }}>
        <div
          style={{
            width: 42,
            height: 2,
            background: "rgba(43,72,101,0.6)",
          }}
        />
        Daniël van Ginneken
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: 74,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "1050px",
            fontWeight: 600,
          }}>
          {title}
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: 30,
            lineHeight: 1.35,
            maxWidth: "900px",
            color: "#6A6158",
          }}>
          {subtitle}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          color: "#9C9188",
        }}>
        <span>danielvanginneken.nl</span>
        <span>Next.js 16</span>
      </div>
    </div>,
    size,
  );
}
