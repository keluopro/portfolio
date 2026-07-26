import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://enzodupuis.dev"),
  title: "Enzo Dupuis — Développeur Fullstack & IA | Portfolio",
  description: "Portfolio d'Enzo Dupuis, Développeur Fullstack admis en BUT Informatique. Créateur de Sirene Leads, Second Cerveau IPCRA et d'architectures SaaS modernes.",
  keywords: ["Enzo Dupuis", "Développeur Fullstack", "Intelligence Artificielle", "SaaS", "Next.js", "TypeScript", "BUT Informatique", "Sirene Leads", "IPCRA"],
  authors: [{ name: "Enzo Dupuis", url: "https://enzodupuis.dev" }],
  creator: "Enzo Dupuis",
  openGraph: {
    title: "Enzo Dupuis — Développeur Fullstack & IA",
    description: "Portfolio d'Enzo Dupuis, Développeur Fullstack admis en BUT Informatique. Créateur de Sirene Leads et d'architectures SaaS modernes.",
    url: "https://enzodupuis.dev",
    siteName: "Enzo Dupuis Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enzo Dupuis — Développeur Fullstack & IA",
    description: "Développeur Fullstack & Concepteur de produits SaaS modernes.",
    creator: "@enzodupuis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Aller au contenu principal
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
