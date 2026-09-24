import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#151513",
          color: "#f6f5f1",
          fontSize: 88,
          fontStyle: "italic",
          fontFamily: "serif",
        }}
      >
        ed
      </div>
    ),
    size,
  )
}
