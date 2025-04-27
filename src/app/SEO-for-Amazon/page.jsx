"use client";
import WhyChooseus from "@/Dev/Components/WhyChooseus";
import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Dev/Components/ui/accordion";
import BusinessOperations from "@/Dev/Components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { useGSAP } from "@gsap/react";
import Link from "next/link";

const page = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(mainHeading.current, {
        y: 50,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainHeading.current,
          start: "top 60%", // More precise start point
          toggleActions: "play none none none", // More interactive toggle actions
        },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create animation timeline

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Add animations to timeline
    tl.from(headingRef.current, {
      y: 50,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        {
          y: 20,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

 

  return (
    <>
      <div ref={sectionRef} className="w-full h-full bg-[#191919]">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              AMAZON <br /> ADVERTISEMENT
            </h1>
          </div>
        </div>

        {/* --------------------------------  { Section 2 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3956e49d8a96e28ec7e12_111-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Our Amazon Advertisement Management methodology
              </h1>
              <p className="mb-8 leading-relaxed">
                Our strategy for managing Amazon Advertising is built on an understanding of your company as a whole and the realization that Advertising is just one aspect of it. We will speak with you extensively before making any changes to the account. We firmly believe in effective communication. When working with clients, our first step is to have a lengthy, sincere conversation about your aspirations and your present circumstances. We are curious about everything.

                How do you monitor things? Which statistics matter to you? Would you choose personalized accounting? What aspects of your company do you think need improvement? These are just a few of the queries we might pose. We will provide our specific recommendations for how to proceed once we have completed the initial launching conversation and are certain that we fully comprehend both your current situation and your ambitions.
              </p>
              <div className="flex justify-center ">
                <Link href={`/Contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Connect Now
                </button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Advertisement on Amazon is Vital
              </h1>
              <p className="mb-8 leading-relaxed">
                Even when they discover the item they are searching for on another website, the majority of customers still check Amazon. Any company that wants to sell things on Amazon needs to have a strong and captivating digital storefront. Get your items out there and be ready to meet clients where they are at correct time if you want to attract customers. 74% of shoppers turn to Amazon when they are prepared to make a purchase.

                Corecentrix Business Solutions can help with account management and advertising for your Amazon store. Our comprehensive and successful administration and advertising services include setting up, managing, and optimizing your Amazon advertising campaigns
              </p>
              <div className="flex justify-center">
                <Link href={`/Contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Learn More
                </button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a39584ddade41b9a8d626c_222-transcode.mp4"
                className="object-cover object-center rounded"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>
        </section>

       

        <section
          id="section2-img-left"
          className="w-full  text-white body-font"
        >
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F677e58377b367216f5957cc5_Chat%20Pandas%209-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 max-sm:mb-2 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8 ">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              We Help Your Amazon Retail Flourish

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                In order to properly represent your business and goods in a manner that appeals to your target audience, we use Amazon advertising best practices.Product listings are the cornerstone of every Amazon business. We have a wealth of knowledge regarding the areas of the listings that require testing and optimization in order to increase outcomes. We have a few Amazon marketing gurus that would love to speak with you if your specific product listings approach is just “set it and forget it”!                
                </p>

              </div>
              <Link href={`/Contact`}><button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                Book a Demo
              </button>
              </Link>
            </div>
          </div>
        </section>




        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
