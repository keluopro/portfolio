import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Server, User, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Mentions Légales & Confidentialité — Enzo Dupuis",
  description: "Mentions légales, hébergement et politique de confidentialité du portfolio d'Enzo Dupuis.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-16 md:px-12 md:py-24 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-white transition-colors mb-12 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-3 py-1.5 border border-white/10"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Retour au Portfolio
      </Link>

      <header className="mb-16 border-b border-white/10 pb-8">
        <p className="font-mono text-xs tracking-[0.3em] text-blue-400 mb-2 uppercase">TRANSPARENCE & CONFORMITÉ</p>
        <h1 className="font-sans text-3xl md:text-5xl font-light italic">Mentions Légales & Confidentialité</h1>
      </header>

      <div className="space-y-12 font-sans text-sm text-white/80 leading-relaxed">
        {/* Section 1: Éditeur */}
        <section className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
            <User className="w-5 h-5 text-blue-400" />
            1. Éditeur du Site
          </h2>
          <p>
            Le présent site internet est édité à titre personnel par :
          </p>
          <ul className="mt-3 space-y-1 font-mono text-xs text-muted-foreground">
            <li><strong className="text-white">Éditeur :</strong> Enzo Dupuis</li>
            <li><strong className="text-white">Statut :</strong> Développeur Fullstack / Étudiant BUT Informatique</li>
            <li><strong className="text-white">Contact :</strong> <a href="mailto:contact@enzodupuis.dev" className="text-blue-400 hover:underline">contact@enzodupuis.dev</a></li>
          </ul>
        </section>

        {/* Section 2: Hébergeur */}
        <section className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
            <Server className="w-5 h-5 text-purple-400" />
            2. Hébergement
          </h2>
          <p>
            Le site est hébergé sur la plateforme cloud de Vercel :
          </p>
          <ul className="mt-3 space-y-1 font-mono text-xs text-muted-foreground">
            <li><strong className="text-white">Hébergeur :</strong> Vercel Inc.</li>
            <li><strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
            <li><strong className="text-white">Site Web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://vercel.com</a></li>
          </ul>
        </section>

        {/* Section 3: Données & Analytics */}
        <section className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
            <Eye className="w-5 h-5 text-emerald-400" />
            3. Protection des Données & Analytics (RGPD)
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD - UE 2016/679) et aux recommandations de la CNIL :
          </p>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
            <li>
              <strong className="text-white">Mesure d'Audience :</strong> Le site utilise <span className="text-white">Vercel Analytics</span> pour mesurer l'audience de manière strictement anonymisée (statistiques d'utilisation globales sans traçage individuel ni revente de données).
            </li>
            <li>
              <strong className="text-white">Cookies publicitaires :</strong> Aucun cookie de ciblage publicitaire ou traqueur tiers n'est utilisé sur ce site.
            </li>
            <li>
              <strong className="text-white">Vos Droits :</strong> Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant directement l'éditeur à <a href="mailto:contact@enzodupuis.dev" className="text-blue-400 hover:underline">contact@enzodupuis.dev</a>.
            </li>
          </ul>
        </section>

        {/* Section 4: Propriété Intellectuelle */}
        <section className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
            <Shield className="w-5 h-5 text-amber-400" />
            4. Propriété Intellectuelle
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            L'ensemble des contenus, visuels, maquettes et codes présentés sur ce site sont la propriété exclusive d'Enzo Dupuis, sauf mention contraire. Toute reproduction ou représentation totale ou partielle sans autorisation préalable est interdite.
          </p>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/10 text-center font-mono text-xs text-muted-foreground">
        Dernière mise à jour : Juillet 2026 • © Enzo Dupuis
      </footer>
    </div>
  )
}
