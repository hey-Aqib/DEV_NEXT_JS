"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const textRef = useRef(null);
  const wrapperRef = useRef(null);
  const about_bottom_height = useRef(80)
  const about_top_height = useRef(-50)
  const Start = useRef("top bottom-=190")
  
  
  useEffect(() => {

     const winwidth = window.innerWidth;
    
    if(winwidth < 786)
    {
      about_bottom_height.current = 600
      about_top_height.current = -240
      Start.current = "top bottom-=250"
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: Start.current,
        end: "bottom center",
        scrub: true,
        pinSpacing: false,
      },
    });

    tl.to(
      topRef.current,
      {
        yPercent: about_top_height.current, 
        ease: "power2.out",
      },
      0
    );

    tl.to(
      bottomRef.current,
      {
        yPercent: about_bottom_height.current, 
        ease: "power2.out",
      },
      0
    );

    tl.fromTo(
      textRef.current,
      { clipPath: "inset(52% 0 55% 0)" }, 
      { clipPath: "inset(0% 0 0% 0)", ease: "power2.out" }, 
      0.001
    );
  }, []);

  return (
    <section ref={wrapperRef} className="z-12 relative max-sm:pb-[60%] md:h-screen 2xl:h-screen/2 top-0 bg-black">
      <div
        ref={topRef}
        className="z-12 about-img-1 w-full will-change-transform"
      >
        <img
          src="/dev/images/top_about.svg"
          alt="Top Reveal"
          className="w-fit m-auto block max-sm:w-[80%]"
        />
      </div>

      <div
  ref={textRef}
  className="absolute  w-[80%] top-[30%] 2xl:w-[50%] max-sm:w-[80%] 2xl:top-[19%] md:top-[28%] max-sm:top-[23%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4"
>
  <p className="text-white text-1xl max-sm:text-sm max-sm:mb-5 max-sm:mt-5 leading-relaxed font-light">
  3X More Revenue Growth with the Right Tools & the Right Team!
  Unlock the full potential of your business with Corecentrix by your side, where expertise meets innovation to drive unparalleled growth. Our cutting-edge tools, combined with a team of seasoned professionals, are designed to propel your business towards optimal revenue growth.
  </p>
</div>


      <div
        ref={bottomRef}
        className="about-img-2 w-full  will-change-transform"
      >
        <img
          src="/dev/images/bottom_about.svg"
          alt="Bottom Reveal"
          className="w-fit m-auto block max-sm:w-[80%]"
        />
      </div>
    </section>
  );
};

export default Section2;