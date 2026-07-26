"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleHoverStart)
    document.addEventListener("mouseout", handleHoverEnd)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleHoverStart)
      document.removeEventListener("mouseout", handleHoverEnd)
    }
  }, [cursorX, cursorY, isVisible])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 5,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Hover ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-12 h-12 border border-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
