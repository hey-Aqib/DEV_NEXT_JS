"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function IntegritySection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const valueRefs = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
      },
    )

    // Values animation - staggered reveal
    valueRefs.current.forEach((value, index) => {
      gsap.fromTo(
        value,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3 + index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: value,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const values = [
    {
      title: "Action",
      description: "Taking proactive steps to address challenges and exceed expectations",
    },
    {
      title: "Transparency",
      description: "Operating with openness and honesty in all communications",
    },
    {
      title: "Creativity",
      description: "Infusing innovation and originality into every interaction",
    },
    {
      title: "Wow experience",
      description: "Delivering moments that surprise and delight at every opportunity",
    },
    {
      title: "Hunger for greatness",
      description: "Pursuing excellence with passion and determination in every endeavor",
    },
  ]

  return (
    <section ref={sectionRef} className=" text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-wider text-white"
        >
          INTEGRITY FIRST
        </h2>

        <div className="space-y-0">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => (valueRefs.current[index] = el)}
              className="flex flex-col md:flex-row items-start md:items-center border-b border-gray-700 pb-8 p-4 transition-all duration-300 hover:bg-opacity-10 hover:bg-pink-700 hover:shadow-lg hover:rounded"
            >
              <div className="flex items-center md:w-1/3 mb-4 md:mb-0">
                <div className="h-3 w-3 rounded-full bg-white mr-3"></div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">{value.title}</h3>
              </div>
              <p className="md:w-2/3 text-lg text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
