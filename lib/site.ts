// Source unique du contenu du portfolio. Modifier ici, pas dans les composants.

export const site = {
  name: "Enzo Dupuis",
  role: "Développeur fullstack",
  url: "https://enzodupuis.dev",
  email: "contact@enzodupuis.dev",
  location: "France",
  education: "BUT Informatique — rentrée 2026",
  availability: "Disponible pour de nouveaux projets",
  intro:
    "Je conçois et livre des produits web complets, du modèle de données jusqu'à la mise en production. Mon terrain : les outils SaaS B2B et les systèmes qui intègrent l'IA.",
  description:
    "Portfolio d'Enzo Dupuis, développeur fullstack. Créateur de Sirene Leads, SaaS de prospection B2B basé sur les données SIRENE.",
  // Laisser `undefined` tant que le lien n'existe pas : il ne sera pas affiché.
  socials: {
    github: "https://github.com/keluopro",
    linkedin: undefined as string | undefined,
  },
}

export type Project = {
  slug: string
  title: string
  year: string
  status: "En production" | "En cours" | "Usage personnel"
  pitch: string
  description: string
  highlights: string[]
  stack: string[]
  link?: { label: string; href: string }
  repo?: string
}

export const projects: Project[] = [
  {
    slug: "sirene-leads",
    title: "Sirene Leads",
    year: "2026",
    status: "En production",
    pitch: "SaaS de prospection B2B construit sur la base officielle SIRENE.",
    description:
      "Les données publiques sur les entreprises françaises existent, mais elles sont brutes et inexploitables pour un commercial. Sirene Leads les transforme en listes de prospects filtrables et à jour.",
    highlights: [
      "Extraction des données SIRENE en temps réel",
      "Enrichissement automatique des sites web des entreprises",
      "Filtres par département",
      "Alertes e-mail sur les nouvelles entreprises correspondant aux critères",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vercel"],
    link: { label: "sirene-leads.vercel.app", href: "https://sirene-leads.vercel.app" },
  },
  {
    slug: "saas-factory",
    title: "SaaS Factory",
    year: "2026",
    status: "En cours",
    pitch: "Socle réutilisable pour lancer un SaaS B2B en quelques jours.",
    description:
      "Chaque nouveau SaaS recommence par les mêmes briques : authentification, paiement, base de données, interface. SaaS Factory les regroupe dans une architecture préconfigurée pour passer directement au produit.",
    highlights: [
      "Authentification et gestion des comptes avec Clerk",
      "Abonnements et facturation avec Stripe",
      "Schéma de données typé avec Drizzle ORM",
      "Bibliothèque de composants d'interface réutilisables",
    ],
    stack: ["Next.js", "TypeScript", "Stripe", "Clerk", "Drizzle ORM"],
  },
  {
    slug: "second-cerveau-ipcra",
    title: "Second Cerveau IPCRA",
    year: "2026",
    status: "Usage personnel",
    pitch: "Système de gestion des connaissances conçu pour travailler avec des agents IA.",
    description:
      "Un vault Obsidian structuré selon la méthode IPCRA (Inbox, Projets, Casquettes, Ressources, Archives), pensé pour qu'un agent IA puisse y lire, classer et retrouver l'information de façon fiable.",
    highlights: [
      "Arborescence IPCRA et notes atomiques façon Zettelkasten",
      "Scripts d'audit de la cohérence du vault",
      "Mémoire de travail persistante exploitable par des agents IA",
    ],
    stack: ["Obsidian", "Markdown", "Agents IA", "Scripts d'automatisation"],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: "Langages", items: ["TypeScript", "JavaScript", "SQL", "HTML / CSS"] },
  { group: "Front-end", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Back-end & données", items: ["Node.js", "PostgreSQL", "Drizzle ORM", "API REST"] },
  { group: "Services", items: ["Stripe", "Clerk", "Vercel", "Git / GitHub"] },
  { group: "IA", items: ["Agents IA", "Prompt engineering", "Développement assisté par IA"] },
  { group: "Produit", items: ["Spécification", "Conception UX", "Lancement de MVP"] },
]

export const principles: { title: string; text: string }[] = [
  {
    title: "Livrer, puis itérer",
    text: "Un produit en ligne apprend plus vite qu'une maquette parfaite. Je vise une première version utilisable, puis je l'améliore à partir de l'usage réel.",
  },
  {
    title: "Partir du problème",
    text: "Avant de choisir une stack, je cherche qui a le problème et ce qu'il lui coûte. La technique suit le besoin.",
  },
  {
    title: "L'IA comme levier, le jugement comme garde-fou",
    text: "J'utilise des agents IA au quotidien pour aller plus vite. Je relis, je teste et je reste responsable de chaque ligne mise en production.",
  },
]
