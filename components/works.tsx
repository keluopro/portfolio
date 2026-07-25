"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles } from "lucide-react"

const projects = [
  {
    title: "Sirene Leads",
    subtitle: "Plateforme SaaS de prospection d'entreprises & génération de leads B2B automatisée.",
    description: "Extraction en temps réel des données officielles SIRENE, enrichment de domaines web, filtres par départements et alertes e-mail.",
    tags: ["SaaS Live", "Next.js", "PostgreSQL", "Vercel", "Tailwind CSS"],
    year: "2026",
    link: "https://sirene-leads.vercel.app",
    github: "https://github.com",
    badge: "SaaS Phare",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "Second Cerveau IPCRA",
    subtitle: "Système d'organisation de connaissances & intégration IA.",
    description: "Structure Obsidian complète basée sur la méthodologie IPCRA (Inbox, Themes, Casquettes, Projets, Ressources, Archive) avec scripts d'audit et mémoire de travail.",
    tags: ["Obsidian", "Méthode IPCRA", "Zettelkasten", "Agents IA"],
    year: "2026",
    link: "#about",
    github: "https://github.com",
    badge: "Productivité & IA",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    title: "SaaS Factory",
    subtitle: "Architecture & Framework modulable pour le lancement rapide de SaaS B2B.",
    description: "Structure de projet pré-configurée avec authentification, abonnements Stripe, base de données et composants de design réutilisables.",
    tags: ["Architecture SaaS", "Stripe", "Clerk", "Drizzle ORM"],
    year: "2026",
    link: "#contact",
    github: "https://github.com",
    badge: "Framework B2B",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
]

export function Works() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetElement = document.querySelector(href)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section id="works" className="relative py-32 px-6 md:px-12 md:py-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3 uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            04 — REALISATIONS & PROJETS
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic tracking-tight">
            Galerie des Projets <span className="not-italic text-white/50">SaaS & IA</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-muted-foreground max-w-md">
          Chaque projet reflète une approche orientée produit, de l'idée au déploiement fonctionnel en production.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className={`font-mono text-[11px] px-3 py-1 rounded-full border ${project.badgeColor} font-medium tracking-wide`}>
                  {project.badge}
                </span>
                <span className="font-mono text-xs text-muted-foreground tracking-widest">
                  {project.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-sans text-2xl md:text-3xl font-normal tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-white/70 font-light mb-4">
                {project.subtitle}
              </p>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Tags & Action Links */}
            <div className="space-y-6 pt-4 border-t border-white/5">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-2.5 py-1 border border-white/10 rounded-md bg-white/[0.03] text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                {project.link.startsWith("http") ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    aria-label={`Voir la démo en direct du projet ${project.title} (s'ouvre dans un nouvel onglet)`}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm transition-colors group/link"
                  >
                    VOIR LA DÉMO EN DIRECT <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href={project.link}
                    onClick={(e) => handleLinkClick(e, project.link)}
                    data-cursor-hover
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm transition-colors"
                  >
                    EN SAVOIR PLUS
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label={`Code source GitHub du projet ${project.title}`}
                  className="p-2 rounded-full border border-white/10 text-muted-foreground hover:text-white hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
