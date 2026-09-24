import type { ReactNode } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { CopyEmail } from "@/components/copy-email"
import { JsonLd } from "@/components/json-ld"
import { principles, projects, site, skills, type Project } from "@/lib/site"

function SectionTitle({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="mb-12 flex items-baseline gap-4 md:mb-16">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{children}</h2>
    </div>
  )
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-wider underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
      <span className="sr-only">(nouvel onglet)</span>
    </a>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
      <div className="md:col-span-5">
        <p className="mb-3 font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="font-serif text-4xl leading-none tracking-tight md:text-5xl">{project.title}</h3>
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className={`size-1.5 rounded-full ${project.status === "En production" ? "bg-ok" : "bg-muted"}`}
            />
            {project.status}
          </span>
        </p>
      </div>

      <div className="md:col-span-7">
        <p className="text-xl leading-snug md:text-2xl">{project.pitch}</p>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-6 space-y-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>

        <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
              {tech}
            </li>
          ))}
        </ul>

        {(project.link || project.repo) && (
          <div className="mt-8 flex flex-wrap gap-6">
            {project.link && <ExternalLink href={project.link.href}>{project.link.label}</ExternalLink>}
            {project.repo && <ExternalLink href={project.repo}>Code source</ExternalLink>}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Home() {
  const socials = [
    { label: "GitHub", href: site.socials.github },
    { label: "LinkedIn", href: site.socials.linkedin },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href))

  return (
    <>
      <JsonLd />
      <Header name={site.name} />

      <main id="contenu" className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Hero */}
        <section id="top" className="flex min-h-[88svh] flex-col justify-end pt-32 pb-16 md:pb-24">
          <p className="rise mb-8 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted uppercase">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            {site.availability}
          </p>

          <h1
            className="rise font-serif text-[clamp(3.5rem,13vw,10rem)] leading-[0.9] tracking-tight"
            style={{ animationDelay: "80ms" }}
          >
            {site.name.split(" ")[0]}
            <br />
            <em className="text-accent">{site.name.split(" ").slice(1).join(" ")}</em>
          </h1>

          <p
            className="rise mt-10 max-w-2xl text-xl leading-snug md:text-2xl"
            style={{ animationDelay: "160ms" }}
          >
            {site.role}. <span className="text-muted">{site.intro}</span>
          </p>

          <dl
            className="rise mt-12 grid gap-6 border-t border-line pt-6 font-mono text-xs sm:grid-cols-3"
            style={{ animationDelay: "240ms" }}
          >
            <div>
              <dt className="mb-1 text-muted uppercase">Formation</dt>
              <dd>{site.education}</dd>
            </div>
            <div>
              <dt className="mb-1 text-muted uppercase">Projet phare</dt>
              <dd>
                <a href="#projets" className="underline decoration-line underline-offset-4 hover:decoration-fg">
                  {projects[0].title}
                </a>{" "}
                — {projects[0].status.toLowerCase()}
              </dd>
            </div>
            <div>
              <dt className="mb-1 text-muted uppercase">Contact</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="underline decoration-line underline-offset-4 hover:decoration-fg">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        {/* Projets */}
        <section id="projets" className="py-20 md:py-32">
          <SectionTitle index="01">Projets</SectionTitle>
          <div className="border-b border-line">
            {projects.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Compétences */}
        <section id="competences" className="py-20 md:py-32">
          <SectionTitle index="02">Compétences</SectionTitle>
          <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="bg-bg p-6">
                <dt className="mb-4 font-mono text-xs tracking-wider text-muted uppercase">{s.group}</dt>
                <dd>
                  <ul className="space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Approche */}
        <section id="approche" className="py-20 md:py-32">
          <SectionTitle index="03">Approche</SectionTitle>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {principles.map((p, i) => (
              <li key={p.title} className="border-t border-line pt-6">
                <span className="font-mono text-xs text-accent">{String.fromCharCode(97 + i)}.</span>
                <h3 className="mt-3 mb-3 text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 md:py-32">
          <SectionTitle index="04">Contact</SectionTitle>
          <p className="max-w-2xl text-xl leading-snug text-muted md:text-2xl">
            Un projet, une mission, une question sur mon travail ? Le plus simple est de m&apos;écrire.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 block w-fit font-serif text-[clamp(2rem,7vw,5.5rem)] leading-none tracking-tight break-all underline decoration-line decoration-1 underline-offset-[0.12em] transition-colors hover:text-accent hover:decoration-accent"
          >
            {site.email}
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <CopyEmail email={site.email} />
            {socials.map((s) => (
              <ExternalLink key={s.label} href={s.href}>
                {s.label}
              </ExternalLink>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-line px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <Link href="/mentions-legales" className="hover:text-fg">
          Mentions légales
        </Link>
      </footer>
    </>
  )
}
