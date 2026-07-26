export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://enzodupuis.dev/#person",
        "name": "Enzo Dupuis",
        "jobTitle": "Développeur Fullstack & Concepteur SaaS",
        "url": "https://enzodupuis.dev",
        "email": "contact@enzodupuis.dev",
        "knowsAbout": [
          "Next.js",
          "React",
          "TypeScript",
          "Intelligence Artificielle",
          "Agents IA",
          "SaaS",
          "PostgreSQL",
          "Méthodologie IPCRA"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "BUT Informatique"
        },
        "sameAs": [
          "https://github.com",
          "https://linkedin.com"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://enzodupuis.dev/#website",
        "url": "https://enzodupuis.dev",
        "name": "Enzo Dupuis Portfolio",
        "description": "Portfolio professionnel d'Enzo Dupuis, développeur Fullstack et concepteur de SaaS.",
        "inLanguage": "fr-FR"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  )
}
