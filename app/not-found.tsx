import Link from "next/link"

export default function NotFound() {
  return (
    <main id="contenu" className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-5 md:px-8">
      <p className="font-mono text-xs tracking-wider text-muted uppercase">Erreur 404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight md:text-7xl">Cette page n&apos;existe pas.</h1>
      <Link href="/" className="mt-10 w-fit font-mono text-xs tracking-wider uppercase underline underline-offset-4">
        ← Retour à l&apos;accueil
      </Link>
    </main>
  )
}
