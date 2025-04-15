'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StarAnimation = ({ beforeContent, afterContent }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  const starGatherProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const lightProgress = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const fadeProgress = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])

  const [animationComplete, setAnimationComplete] = useState(false)
  const [stars, setStars] = useState([])

useEffect(() => {
  const generatedStars = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 0.5,
    twinkleSpeed: Math.random() * 5 + 1,
  }))
  setStars(generatedStars)
}, [])


  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimationComplete(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] w-full overflow-hidden bg-black"
    >
      <div
        ref={ref}
        className="sticky top-0 h-screen w-full flex items-center justify-center"
      >
        {!animationComplete && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {beforeContent}
          </motion.div>
        )}

        <div className="absolute inset-0">
          {stars.map((star) => {
            const baseOpacity = 0.5 + 0.5 * Math.sin(Date.now() * 0.001 * star.twinkleSpeed)
            let dynamicOpacity = baseOpacity
            let transformStyle = 'none'

            const progress = starGatherProgress.get()
            if (progress > 0.3) {
              dynamicOpacity = (1 - (progress - 0.3) * 1.5) * baseOpacity
              transformStyle = `translate(${(50 - star.x) * (progress - 0.3) * 1.5}%, ${(50 - star.y) * (progress - 0.3) * 1.5}%) scale(${1 + progress * 2})`
            }

            return (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: dynamicOpacity,
                  transform: transformStyle,
                  boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.3)`,
                  transition: `all ${0.5 + star.delay}s cubic-bezier(0.17, 0.67, 0.83, 0.67)`
                }}
              />
            )
          })}
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: lightProgress,
            scale: lightProgress
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-400 blur-3xl opacity-70"
              style={{
                width: `${lightProgress.get() * 300}px`,
                height: `${lightProgress.get() * 300}px`,
              }}
            />
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-80"
              style={{
                width: `${lightProgress.get() * 200}px`,
                height: `${lightProgress.get() * 200}px`,
              }}
            />
            <div className="absolute inset-0 rounded-full bg-white blur-sm"
              style={{
                width: `${lightProgress.get() * 100}px`,
                height: `${lightProgress.get() * 100}px`,
              }}
            />
          </div>
        </motion.div>

        <AnimatePresence>
          {animationComplete && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              {afterContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default StarAnimation
