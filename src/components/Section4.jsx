"use client";
import clsx from 'clsx';

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Section4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      id: 1,
      icon: "/images/arrow.svg",
      question: "What are Clients Are Saying",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore quidem excepturi iste pariatur autem ea expedita nisi explicabo voluptate sunt a tempora eum, similique illo, incidunt tenetur, praesentium adipisci",
      name: "Tori Tauscher",
      details: "Senior Manager of Outsource Operations",
      image: "/images/RV.svg",
      profile: "/images/profile1.webp",
      title: "Slide 1",
    },
    {
      id: 2,
      icon: "",
      question: "",
      para: "I could not be more pleased with the level of customer service provided by our team at Chat Pandas. Although, I could go on and on about their level of professionalism, courtesy, dedication, and incredible partnership.",
      name: "Doug Tulumaris",
      details: "Chief Marketing Officer",
      image: "/images/cabin.svg",
      profile: "/images/men.svg",
      title: "Slide 2",
    },
    {
      id: 3,
      icon: "",
      question: "",
      para: "We have had an extremely positive experience with Chat Pandas. Chat Pandas not only provides full service including leadership, hiring, training and process improvement; they have also achieved our quality standards, CSAT and SLA requirements. We are very glad to have partnered up with Chat Pandas",
      name: "",
      details: "Director Technical Support",
      image: "/images/100.svg",
      profile: "",
      title: "Slide 3",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    gsap.set(slideRefs.current, { opacity: 0, x: "100%" });
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
    <div className="text-white relative w-full min-h-[600px] h-auto sm:h-[80vh] md:h-[100vh] overflow-hidden bg-[rgb(81,30,223)]">
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <h1 className="text-center p-8 pb-0 mt-16 text-4xl sm:text-5xl 2xl:text-9xl md:text-6xl lg:text-7xl font-bold">
          Success Stories
        </h1>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`absolute w-full mt-8 flex flex-col items-center justify-center transition-opacity ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-[70%] text-2xl sm:text-3xl md:text-4xl text-center">
              <div className="flex justify-center items-center mb-6 sm:mb-8 md:mb-10 cursor-pointer px-4">
                <div>
                  {slide.icon && (
                    <Image
                      src={slide.icon}
                      alt={slide.title || ""}
                      width={40}
                      height={40}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  )}
                </div>
                <div>
                  {slide.question && (
                    <p className="text-lg sm:text-xl mt-2 sm:mt-4 md:mt-[3%] mx-3 text-center sm:text-left">
                      {slide.question}
                    </p>
                  )}
                </div>
              </div>
              <p className="m-0 p-0 text-justify text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl leading-relaxed sm:leading-normal md:leading-loose">
                {slide.para}
              </p>
            </div>
            <div className="flex justify-between w-full sm:w-[80%] md:w-[69%] mt-8 sm:mt-12 md:mt-15 px-4">
              <div className="flex  justify-between w-[100%]">
                <div>
                  {slide.profile && (
                    <Image
                      src={slide.profile}
                      alt={slide.title || ""}
                      width={85}
                      height={85}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  )}
                </div>
                <div className="text-base sm:text-lg mx-4 sm:mx-5 w-full mt-2 font-medium text-center sm:text-left">
                  <span className="block font-semibold text-base sm:text-lg md:text-xl text-center sm:text-left">
                    {slide.name}
                  </span>

                  <span className="text-xs sm:text-sm md:text-base text-center sm:text-left">
                    {slide.details}
                  </span>
                </div>
              </div>
              <div className="h-80 2xl:h-90 w-[50%] ">
                <Image
                className={clsx("w-30", "2xl:w-50 rounded-lg mt-2 shadow-lg object-cover")}
                  src={slide.image}
                  alt={slide.title}
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-[10%] sm:right-[12%] 2xl:bottom-60 md:right-[16%] bottom-10 sm:bottom-12 md:bottom-16 p-2 text-base sm:text-lg scale-125 sm:scale-150 font-bold text-white bg-opacity-50 cursor-pointer"
        onClick={handlePrevClick}
      >
        <img src="/images/arrow1.svg" alt="" />
      </button>
      <button
        className="absolute bottom-10 sm:bottom-12 md:bottom-16 2xl:bottom-60 right-[20%] sm:right-[20%] md:right-[20%] scale-125 sm:scale-150 p-2 text-base sm:text-lg font-bold text-white bg-opacity-50 cursor-pointer"
        onClick={handleNextClick}
      >
        <img src="/images/arrow2.svg" alt="" />
      </button>
    </div>
  );
};

export default Section4;
