import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ]
}
