"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";

export default function BusinessOperations() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

 useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top%",
      end: "bottom bottom",
      toggleActions: "play none none none"
    }
  });
  tl.from(headingRef.current,{
    y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
  })
  tl.from(textRef.current,{
    y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
  })
  tl.from(ctaRef.current,{
    y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
  })
 },[])

  return (
    <div ref={sectionRef} className="w-full h-full flex justify-center px-4 ">
      <div className="w-[95%] h-[70vh] max-sm:h-full relative flex flex-col  items-center bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden py-20 rounded-2xl">
        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
        <div className="w-full h-full flex flex-col justify-center gap-8 max-sm:gap-4 px-4 max-sm:py-5 z-10">
          <h1
            ref={headingRef}
            className="text-white text-center text-6xl max-sm:text-4xl font-medium z-10"
          >
            Why Choose Corecentrix?
          </h1>
          <div className="w-full flex justify-center items-center ">
            <p ref={textRef} className=" text-white/80 text-center w-[80%]">
              Choosing Corecentrix Business Solutions for your SEO needs means
              investing in a comprehensive, results-driven strategy tailored to
              your business. Whether you’re a small business looking to
              establish your online presence or a large enterprise aiming to
              dominate your industry, our wide array of services and packages
              ensure that you receive exactly what you need to succeed. Our
              commitment to transparency, innovation, and measurable results
              makes us the right choice for businesses serious about growth and
              visibility in the digital landscape.
            </p>
          </div>
          <div ref={ctaRef} className="w-full text-center">
            <button className="inline z-10   bg-white text-black font-bold  px-4 py-3 rounded-xl transition-all duration-300  hover:text-white hover:bg-black cursor-pointer ">
              Contact us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
