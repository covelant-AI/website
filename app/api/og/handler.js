import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function OG() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 72,
      }}
    >
      Covelant — AI Sports Analytics
    </div>,
    { width: 1200, height: 630 }, // pass size here (do NOT export it)
  );
}
