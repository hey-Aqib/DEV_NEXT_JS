'use client'

import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Galaxy } from './GalaxyBackground'
import gsap from 'gsap'

const Hero = () => {

  useEffect(() => {
    const elements = gsap.utils.toArray("h1, h2, p, .images #footer");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

  useEffect(() => {
      gsap.set(".circle", {
        transformOrigin: "50% 50%",
        scale: 0.5,
        filter: "drop-shadow(0 0 0px white)",
      });
    
      gsap.to(".circle", {
        rotation: 2060,
        scale: 1.2,
        filter: "drop-shadow(0 0 20px white)",
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
  
      
    }, []);
  
  
  return (
    <div className="relative w-full bg-black max-sm:h-[100vh] max-sm:pb-[50%]">
      {/* <div className="fixed inset-0 z-15">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <Galaxy count={1000} radius={10} />
          </Suspense>
        </Canvas>
      </div> */}

<h1 className="text-center max-sm:text-2xl max-sm:mt-5 text-3xl font-extrabold">
Your Vision - Our Mission
</h1>
      

      <div className="flex flex-col md:gap-[30%] md:flex-row items-center justify-center gap-10  px-4 py-12 md:py-24">
        <div className="text-5xl md:text-7xl lg:text-8xl font-medium text-white text-center md:text-left">
        Mutual
        </div>
        <div className="text-5xl md:text-7xl lg:text-8xl font-medium text-white text-center md:text-right">
        Growth
        </div>
      </div>

      <h1 className="text-center text-2xl underline transition-all duration-500 ease-in-out hover:no-underline">
  Search, Design, Development, Business, IT Solutions
</h1>




      <div className="relative max-sm:mt-10">
        <div className="w-full max-sm:h-10 h-16 bg-gradient-to-b from-black to-transparent z-10 absolute top-0 left-0" />

        <img
          src="/dev/images/hack.avif"
          alt="Your Image"
          className="w-full h-auto object-cover max-sm:h-40"
        />

        <div className="w-full max-sm:h-10 h-16 bg-gradient-to-t from-black to-transparent z-10 absolute bottom-0 left-0" />
      </div>
    </div>
  )
}

export default Hero
