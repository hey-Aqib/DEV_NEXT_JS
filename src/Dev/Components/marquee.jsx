"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const Marquee = () => {
  const containerRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const marquee = marqueeRef.current

    if (!container || !marquee) return

    const clone = marquee.cloneNode(true)
    container.appendChild(clone)

    const width = marquee.offsetWidth

    const animation = gsap.to(container, {
      x: -width,
      ease: "none",
      duration: 50, 
      repeat: -1,
      onRepeat: () => {
        gsap.set(container, { x: 0 })
      },
    })

    const handleVisibility = () => {
      if (document.hidden) {
        animation.pause()
      } else {
        animation.play()
      }
    }

    document.addEventListener("visibilitychange", handleVisibility)

    const handleMouseEnter = () => {
      gsap.to(animation, { timeScale: 0.5, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(animation, { timeScale: 1, duration: 0.3 })
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      animation.kill()
      document.removeEventListener("visibilitychange", handleVisibility)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const marqueeItems = []
  for (let i = 0; i < 10; i++) {
    marqueeItems.push(
      <div key={i} className="inline-flex items-center gap-2">
        <span className="text-[#f5eee1] text-5xl md:text-7xl font-bold tracking-wide mr-2">BOOK A DEMO</span>
        {/* <span className="mx-4 md:mx-6 text-red-500 text-5xl md:text-7xl">●</span> */}
        <img src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40/6620c43b91ef23c55132ed35_Star%201.svg" alt=""  className="mr-2"/>
      </div>,
    )
  }

  return (
    <div className="w-full overflow-hidden bg-black py-6">
      <div className="relative">
        <div ref={containerRef} className="inline-block whitespace-nowrap">
          <div ref={marqueeRef} className="inline-block">
            {marqueeItems}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marquee
