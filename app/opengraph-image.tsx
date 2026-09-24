import { ImageResponse } from "next/og"
import { projects, site } from "@/lib/site"

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0f0f0e",
          color: "#ecebe5",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#9b9990", letterSpacing: 2 }}>
          {site.url.replace("https://", "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 120, lineHeight: 1, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 40, color: "#fb8a5a" }}>{site.role}</div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 30, color: "#9b9990" }}>
            {projects.map((p) => p.title).join("  ·  ")}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
