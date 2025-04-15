"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const Section6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      id: 1,
      title: "Track Your Business’ Market Value",
      details: `Understanding your business’s market value is crucial for strategic planning and long-term success. Our services enable you to track and analyze key indicators that reflect your market position, helping you stay ahead of industry trends and competitors.`,
      image: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/09/Track-Your-Business-Market-Value-400x235-1.webp",
      button_text: "LEARN MORE",
      button_text_2: "",
    },
    {
      id: 2,
      title: "Monitor Site Performance",
      details: `Your website’s performance reflects your brand’s digital strength. We monitor load times, engagement, and technical issues in real time. Continuous optimization ensures a seamless experience and higher conversions.`,
      image: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/09/Monitor-Site-Performance-400x235-1.webp",
      button_text: "LEARN MORE",
      button_text_2: "",
    },
    {
      id: 3,
      title: "Optimize Visibility",
      details: `Visibility is key to attracting and retaining customers. Our strategies elevate your online presence, ensuring your brand is easily found. From SEO to content enhancement, we boost your visibility and drive more traffic.`,
      image: "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/09/Optimize-Visibility-400x235-1.webp",
      button_text: "LEARN MORE",
      button_text_2: "",
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
  

  const handleNextClick = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      return next;
    });
  };
  
  const handlePrevClick = () => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      return next;
    });
  };
  

  return (
    <div className="text-white w-full min-h-[600px] h-auto max-sm:h-[115vh] md:h-[130vh] max-sm:pb-10 overflow-hidden bg-black">
      <div
        className="relative w-full h-full z-20"
      >
        <h1 className="text-center p-8 max-sm:p-0 pb-0 mt-16 text-4xl max-sm:text-4xl md:text-6xl 2xl:text-7xl font-bold">
        Your Business Statistics Turn Your <br />Decisions to Profit
        </h1>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`absolute w-full mt-8 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 pointer-events-auto z-30"
                : "opacity-0 pointer-events-none z-20"
            }`}
            
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
            
          >
            <div className="grid grid-cols-[1.5fr_1fr] max-sm:flex max-sm:flex-col  max-sm:justify-center max-sm:items-center max-sm:text-center w-[90%] mt-10 gap-10 max-sm:mt-0 max-sm:gap-0">
              <div className="w-[100%] text-3xl sm:text-2xl md:text-4xl ">
                <div className="mb-6 max-sm:mb-8 md:mb-10 px-4">
                  <h1 className="w-[70%] max-sm:pe-0 max-sm:text-2xl max-sm:w-full 2xl:text-5xl p-8 pl-0 pb-0 mb-4 mt-5 font-bold">
                    {slide.title}
                  </h1>
                  <p className="w-[92%]  px-0 mx-0 text-xl max-sm:text-sm mt-5 max-sm:mt-4 md:mt-[6%] sm:text-left">
                    {slide.details}
                  </p>
                  <div className="relative mt-[8%] inline-block  mx-[1%] group">
                    <button className="relative z-20 text-white px-8 py-4 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
                      <span className="relative z-20">{slide.button_text}</span>

                      <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
                    </button>

                    <img
                      src="/dev/images/left top.svg"
                      alt=""
                      className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-20 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                    <img
                      src="/dev/images/right top.svg"
                      alt=""
                      className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                    />
                    <img
                      src="/dev/images/left bottom.svg"
                      alt=""
                      className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    <img
                      src="/dev/images/right bottom.svg"
                      alt=""
                      className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
              <div>
                <img src={slide.image}
                style={{
                  clipPath: "polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0% calc(100% - 20px), 0% 20px)",
                }} alt="" className="w-[80%] max-sm:m-auto max-sm:mb-0 mt-[5%] border-25 border-[#1b1b1b]" />
              </div>
            </div>
          </div>
        ))}
      
      <div className="absolute bottom-25 flex gap-3 left-20 z-30 max-sm:bottom-6">
      <button
        className="p-2 text-base sm:text-lg scale-125 sm:scale-150 font-bold text-white bg-opacity-50 cursor-pointer"
        onClick={handleNextClick}
      >
        <img src="/dev/images/left_arrow.svg" alt="" className="w-10 relative z-20" />
      </button>
      <button
        className="p-2 text-base sm:text-lg scale-125 sm:scale-150 font-bold text-white bg-opacity-50 cursor-pointer" 
        onClick={handlePrevClick}
      >
        
        <img src="/dev/images/right_arrow.svg" alt="" className="w-10 relative z-20" />
      </button>
      </div>
      
      </div>
    </div>
  );
};

export default Section6;
