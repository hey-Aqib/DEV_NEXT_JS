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

    const SEOTpyes = [
        {
            title: "Social Networking Analysis",
            dis: "We have the knowledge, resources, and practical expertise required to equip your social media strategy with statistics techniques, from statistical investigating your market to keywords search to target it better.",
        },
        {
            title: "Designing of Social Media Ads",
            dis: "Your social media advertisement development will be handled by a pro in every way, from developing visuals and layout components to composing advertising copy. This enables us to manage every aspect of the production",
        },
        {
            title: "Quarterly Comprehensive Reporting",
            dis: "We’ll provide you with a thorough social media report every month so you can assess our performance. We also provide updates on our achievements and the results of those achievements in terms of our progress.",
        },

    ];



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
                            Social Media  <br /> Marketing
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
                                Lure wider audience
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Develop your brand with a social media promotion
                                specifically designed to increase referrals, revenue, and
                                connection.
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
                                Attract Your Targeted Audience
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Every social media marketing strategy is unique and has a particular set of objectives. We’ll develop a strategy for your performance. What distinguishes us from other social media marketing businesses is our capacity to create a strategy that works across all of your company’s broadcast platforms. You will benefit from a skilled social media workforce with years of experience in the field of digital marketing that will ultimately attract a large number of potential audience to meet your expected revenue.
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

                <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
                    <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
                        Our Core SEO Services
                    </h1>
                    <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                                {SEOTpyes?.map((card, index) => (
                                    <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                                        <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                                        <p className="text-base font-medium">{card.dis}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

           



                

               

                <BusinessOperations />
            </div>
        </>
    );
};

export default page;
