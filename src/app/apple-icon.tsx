import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "#0A84FF",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "40px",
        color: "white",
        fontSize: "96px",
        fontWeight: 700,
        fontFamily: "system-ui, sans-serif",
        letterSpacing: "-0.03em",
      }}
    >
      D
    </div>,
    { ...size },
  );
}
