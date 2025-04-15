"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const Section9 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      id: 1,
      title: "Slack Assist Bot",
      details: `Revamped customer service with an AI-powered Slack bot,
                  cutting resolution time by 85% and boosting customer
                  satisfaction by 70%`,
      image: "/dev/images/text.avif",
    },
    {
      id: 2,
      title: "Wholesale E-commerce Platform",
      details:
        "Developed a comprehensive B2B and B2C e-commerce platform, enhancing sales by 40% and reducing order processing time by 50% through advanced inventory management.",
      image: "/dev/images/text2.avif",
    },
  ];

  useLayoutEffect(() => {
      if (isPaused || !slideRefs.current[currentSlide]) return;
    
      slideRefs.current.forEach((el, idx) => {
        if (el) {
          gsap.set(el, { opacity: 0, x: "100%" });
        }
      });
    
      gsap.to(slideRefs.current[currentSlide], {
        opacity: 1,
        x: "0%",
        duration: 0.8,
        ease: "power2.out",
      });
    
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3300);
    
      return () => clearTimeout(timer);
    }, [currentSlide, isPaused]);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="text-white relative w-full min-h-[600px] h-auto sm:h-[80vh] md:h-[120vh] overflow-hidden bg-black">
      <div className="w-full max-sm:h-10 h-16 bg-gradient-to-b  from-black to-transparent z-20 absolute top-0 left-0" />
      <img
          src="/dev/images/border_line.svg"
          className="absolute opacity-100 w-[75%] h-full -top-75 left-40  z-20"
          alt=""
        />
      <div className="bg-[url('/dev/images/blue_bg.avif')] bg-cover bg-center w-full h-full relative top-0 left-0 opacity-90 max-sm:h-[100vh]">
        <img
          src="/dev/images/left_sidebar.svg"
          className="absolute opacity-100 w-10 top-20 max-sm:left-5 left-20 h-[80%] z-2"
          alt=""
        />
        
        <img
          src="/dev/images/right_sidebar.svg"
          className="absolute w-10 max-sm:right-5 top-20 right-20 h-[80%] z-2"
          alt=""
        />
        
        <div className="w-full h-full">
          <div className="">
            <div className="text-center items-center justify-center flex flex-col">
            <h1 className="w-[30%] max-sm:w-[80%] max-sm:mt-25 text-center p-8 pb-0 mt-16 text-2xl max-sm:text-2xl 2xl:text-6xl md:text-2xl font-bold">
                  Hear What They Have to Say
                </h1>
                <p className="w-[65%] 2xl:text-2xl text-center  px-0 mx-0 text-xl max-sm:text-sm mt-5 max-sm:mt-4 md:mt-[2%]">
                Client success is at the heart of what we do. We take pride in cultivating long-term relationships and delivering solutions that drive
                </p>
            </div>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                ref={(el) => (slideRefs.current[index] = el)}
                className={`absolute z-20 w-full mt-8 flex flex-col items-center justify-center text-center transition-opacity ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                
                <img src={slide.image} alt="" className="w-[40%] max-sm:w-[80%] mt-10"/>
              </div>
            ))}
             <button
              className="absolute left-[45%] max-sm:left-[54%] 2xl:bottom-50  md:left-[48%] bottom-10 max-sm:bottom-30 md:bottom-22 p-2 text-base max-sm:text-lg scale-125 max-sm:scale-130 font-bold text-white bg-opacity-50 cursor-pointer z-20"
              onClick={handlePrevClick}
            >
              <img src="/dev/images/right_arrow.svg" alt="" className="w-10 relative z-20" />
            </button>
            <button
              className="absolute bottom-10 max-sm:bottom-30 md:bottom-22 2xl:bottom-50   left-[45%] max-sm:left-[35%] md:left-[42%] scale-125 max-sm:scale-130 p-2 text-base max-sm:text-lg font-bold text-white bg-opacity-50 cursor-pointer z-20"
              onClick={handleNextClick}
            >
              <img src="/dev/images/left_arrow.svg" alt="" className="w-10 relative" />
            </button>
          </div>
          
        </div>
      </div>
      <img
          src="/dev/images/border_line.svg"
          className="absolute opacity-100 w-[75%] top-77 left-40"
          alt=""
        />
      <div className="w-full max-sm:h-10 h-16 bg-gradient-to-t from-black to-transparent z-20 absolute bottom-0 left-0" />
      
    </div>
  );
};

export default Section9;
