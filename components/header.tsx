"use client"

import { useEffect, useState } from "react"

const links = [
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "approche", label: "Approche" },
  { id: "contact", label: "Contact" },
]

export function Header({ name }: { name: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    for (const { id } of links) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <a href="#top" className="font-mono text-xs tracking-widest uppercase">
          {name}
        </a>
        <ul className="flex items-center gap-5 md:gap-8">
          {links.map((link) => (
            <li key={link.id} className={link.id === "contact" ? "" : "hidden sm:block"}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className="font-mono text-xs tracking-wider text-muted uppercase transition-colors hover:text-fg aria-[current=true]:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
