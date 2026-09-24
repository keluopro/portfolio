import type { ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales, hébergement et confidentialité du site de ${site.name}.`,
  alternates: { canonical: "/mentions-legales" },
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-8">
      <h2 className="font-mono text-xs tracking-wider text-muted uppercase md:col-span-4">{title}</h2>
      <div className="space-y-3 leading-relaxed md:col-span-8">{children}</div>
    </section>
  )
}

const mail = (
  <a href={`mailto:${site.email}`} className="underline decoration-line underline-offset-4 hover:decoration-fg">
    {site.email}
  </a>
)

export default function MentionsLegales() {
  return (
    <main id="contenu" className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <Link href="/" className="font-mono text-xs tracking-wider text-muted uppercase hover:text-fg">
        ← Retour
      </Link>
      <h1 className="mt-10 mb-12 font-serif text-5xl tracking-tight md:text-6xl">Mentions légales</h1>

      <Block title="Éditeur">
        <p>
          Site personnel édité par {site.name}, à titre non professionnel.
        </p>
        <p>Contact : {mail}</p>
      </Block>

      <Block title="Hébergement">
        <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com</p>
      </Block>

      <Block title="Données personnelles">
        <p>
          Le site utilise Vercel Web Analytics pour mesurer l&apos;audience de façon agrégée, sans cookie et sans
          suivi individuel. Aucun cookie publicitaire ni traceur tiers n&apos;est déposé.
        </p>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;effacement de vos
          données en écrivant à {mail}.
        </p>
      </Block>

      <Block title="Propriété intellectuelle">
        <p>
          Les textes et visuels de ce site appartiennent à {site.name}, sauf mention contraire. Toute reproduction sans
          autorisation préalable est interdite.
        </p>
      </Block>

      <p className="border-t border-line pt-8 font-mono text-xs text-muted">Dernière mise à jour : septembre 2026</p>
    </main>
  )
}
