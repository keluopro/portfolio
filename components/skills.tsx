"use client"

import { motion } from "framer-motion"
import { Compass, Cpu, BookOpen, Rocket, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Conception & Vision SaaS",
    icon: Compass,
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    skills: ["Idéation & Modèles B2B", "Spécification Produit", "Design d'Expérience UX", "Architecture Fonctionnelle"],
  },
  {
    title: "Pair-Programming IA",
    icon: Cpu,
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    skills: ["Orchestration d'Agents IA", "Prompt Engineering Avancé", "Ecosystème Next.js / Vercel", "Supervision du Code Généré"],
  },
  {
    title: "Gestion des Connaissances",
    icon: BookOpen,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    skills: ["Méthodologie IPCRA", "Vault Obsidian & Zettelkasten", "Mémoire Longue & Indexation", "Automatisation de Veille"],
  },
  {
    title: "Pilotage & Lancement",
    icon: Rocket,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    skills: ["Validation de Marché", "Lancement & Stratégie MVP", "Optimisation de Workflows", "Apprentissage Continu"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3 uppercase flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          05 — COMPÉTENCES & METHODES
        </p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic tracking-tight">
          Savoir-Faire & <span className="not-italic text-white/50">Méthodologie</span>
        </h2>
      </motion.div>

      {/* Grid Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, index) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl border ${cat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-base font-medium text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="font-mono text-xs text-white/70 hover:text-white transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
