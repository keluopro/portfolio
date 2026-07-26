import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Works } from "@/components/works"
import { Skills } from "@/components/skills"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"
import { JsonLd } from "@/components/json-ld"

export default function Home() {
  return (
    <SmoothScroll>
      <JsonLd />
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <SectionBlend />
        <About />
        <Works />
        <Skills />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
