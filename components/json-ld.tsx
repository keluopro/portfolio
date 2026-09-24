import { site } from "@/lib/site"

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    knowsAbout: ["TypeScript", "React", "Next.js", "PostgreSQL", "SaaS", "Agents IA"],
    sameAs: Object.values(site.socials).filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
