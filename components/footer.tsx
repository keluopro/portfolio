"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Copy, Check } from "lucide-react"

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = "contact@enzodupuis.dev"

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      const milliseconds = now.getMilliseconds().toString().padStart(3, "0")
      setTime(`${hours}:${minutes}:${seconds}.${milliseconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 10)
    return () => clearInterval(interval)
  }, [])

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <footer id="contact" className="relative">
      {/* Main CTA */}
      <div className="relative block overflow-hidden">
        {/* Background Curtain */}
        <motion.div
          className="absolute inset-0 bg-[#2563eb]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Content */}
        <div 
          className="relative py-16 md:py-24 px-8 md:px-12 border-t border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.h2
              className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-center md:text-left"
              animate={{
                color: isHovered ? "#050505" : "#fafafa",
              }}
              transition={{ duration: 0.3 }}
            >
              Travaillons <span className="italic">Ensemble</span>
            </motion.h2>

            <div className="flex items-center gap-4">
              <button
                onClick={copyEmail}
                data-cursor-hover
                aria-live="polite"
                className="px-6 py-3.5 rounded-full border border-white/20 font-mono text-xs tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300 hover:bg-white hover:text-black hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                style={{
                  color: isHovered ? "#050505" : "#fafafa",
                  borderColor: isHovered ? "rgba(5,5,5,0.3)" : "rgba(255,255,255,0.2)"
                }}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                    <span>Email Copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Copier l'Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                data-cursor-hover
                aria-label="Envoyer un email directement à Enzo Dupuis"
                className="p-3.5 rounded-full border border-white/20 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                style={{
                  color: isHovered ? "#050505" : "#fafafa",
                  borderColor: isHovered ? "rgba(5,5,5,0.3)" : "rgba(255,255,255,0.2)"
                }}
              >
                <ArrowUpRight className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-8 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Local Time */}
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">LOCAL TIME</span>
            <span className="text-white tabular-nums">{time}</span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {[
              { label: "GitHub", href: "https://github.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Twitter", href: "https://x.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label={`Visiter le profil ${link.label} (s'ouvre dans un nouvel onglet)`}
                className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} ENZO DUPUIS
          </p>
        </div>
      </div>
    </footer>
  )
}
