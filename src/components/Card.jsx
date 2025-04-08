"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function Card() {
  const cardref = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    cardref.current.forEach((card, index) => {
      gsap.set(card, {x: index * -1000, opacity: 1 });

      gsap.to(card, {
        motionPath: {
          path: [
            { x: index+1 * -100, y: 0 },
            { x: 0, y: 20 },
            { x: 100, y: 35 },
            { x: 200, y: 50 },
            { x: 300, y: 65 },
            { x: 400, y: 80 },
            { x: 500, y: 95 },
            { x: 600, y: 120 },
            { x: 700, y: 95 },
            { x: 800, y: 80 },
            { x: 900, y: 65 },
            { x: 1000, y: 50 },
            { x: 1100, y: 30 },
            { x: 1200, y: 25 },
            { x: 1300, y:20 },
            { x: 1400, y: 15 },
            { x: 1500, y: 10},
            { x: 1600, y: 0},
            { x: 3900, y: -5 } 
          ],

          curviness: 1.5,
          autoRotate: false,
        },
        opacity: 1,
        duration: 5,
        delay: index * 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom center",
          scrub: 3,
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden h-[800px] w-full">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) cardref.current[i] = el;
          }}
          className="border w-80 h-100 hover:bg-amber-400 cursor-pointer bg-white absolute top-40"
        ></div>
      ))}
    </div>
  );
}
