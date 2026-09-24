"use client"

import { useState } from "react"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-line px-4 py-2 font-mono text-xs tracking-wider uppercase transition-colors hover:border-fg"
    >
      <span aria-live="polite">{copied ? "Copié" : "Copier l'adresse"}</span>
    </button>
  )
}
