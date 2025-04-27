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
      title: "Search Engine Advertising (Google Ads)",
      dis: "What It Is: Paid ads that appear on search engine results pages (SERPs) when users search for relevant keywords.How Corecentrix Ensures Results: We use advanced keyword research and competitor analysis to bid on high-intent keywords that align with your business goals. Our team optimizes ad copy and landing pages to boost click-through and conversion rates, ensuring that you appear in front of the right customers at the right time. Results include a 20-30% average increase in quality traffic and significantly higher lead conversion rates.",
    },
    {
      title: "Social Media Advertising (Facebook, Instagram, LinkedIn Ads)",
      dis: "What It Is: Paid ads on social media platforms targeting specific demographics, interests, and behaviors.How Corecentrix Ensures Results: We create visually appealing ads with compelling messaging tailored to your target audience. Using A/B testing and detailed audience segmentation, we optimize ads for engagement, resulting in a 25% improvement in conversion rates and 40% more efficient ad spend. Whether it’s brand awareness, lead generation, or sales, our campaigns are tailored to your objectives.",
    },
    {
      title: "Display Advertising (Banner Ads)",
      dis: "What It Is: Visual ads that appear on third-party websites, apps, or YouTube, using image, video, or rich media formats. How Corecentrix Ensures Results: We design eye-catching banners and strategically place them on websites that your target audience frequents. Our targeting techniques reduce wasted impressions and increase brand visibility, achieving up to 3x higher click-through rates than industry benchmarks. Constant monitoring allows us to refine campaigns for better performance over time.",
    },
    {
      title: "Video Advertising (YouTube, Social Platforms)",
      dis: "What It Is: Video ads appearing before or during online video content on platforms like YouTube and social media.How Corecentrix Ensures Results: We craft engaging video ads that resonate with your audience, combining storytelling with a strong call to action. By targeting the right demographics and interests, we drive up to 50% higher engagement rates and improve brand recall. We also analyze video completion rates to optimize future campaigns for better results.",
    },
    {
      title: "Retargeting Ads",
      dis: "What It Is: Ads that target users who have previously visited your website or interacted with your content but didn’t convert. How Corecentrix Ensures Results: Our retargeting campaigns use precise audience segmentation to re-engage interested prospects and guide them through the funnel. By showing tailored ads based on previous behavior, we increase conversion rates by up to 70%, ensuring those who’ve already shown interest in your brand take action.",
    },
    {
      title: "Native Advertising",
      dis: "What It Is: Ads that blend seamlessly with the content on the platforms where they appear, often seen on news outlets or blogs. How Corecentrix Ensures Results: We develop native ads that feel like natural content, enhancing user experience while subtly promoting your brand. This results in higher engagement, with ads generating 53% more views than traditional banner ads, all while maintaining authenticity and trust.",
    }
  ];

  const FAQS = [
    {
      title: "What is paid advertising?",
      dis: "Paid advertising involves purchasing ad space on various digital platforms to promote your products or services. This can include search engines, social media, display networks, and more. The goal is to increase visibility, drive traffic, and generate leads or sales",
    },
    {
      title: "How does paid advertising work?",
      dis: "Paid advertising works by targeting specific audiences with ads based on their interests, behavior, and demographics. Advertisers bid for ad placements, and the ads are shown to users who fit the target criteria. Performance is tracked, and adjustments are made to optimize results.",
    },

    {
      title: "How do I measure the success of my paid ads?",
      dis: "Success is measured using key performance indicators (KPIs) such as click-through rates (CTR), conversion rates, cost per click (CPC), and return on investment (ROI). Analytics tools and reports provide insights into how well your ads are performing and where adjustments may be needed.",
    },


    {
      title: "How can Corecentrix help with my paid advertising efforts?",
      dis: "Corecentrix provides comprehensive paid advertising services, including audience targeting, ad creation, budget optimization, and performance tracking. Our data-driven approach and expertise ensure that your ads reach the right audience and deliver the best possible results for your business.",
    },
  ];

  const packages = [
    {
      name: "Basic Package",
      features: [
        { title: "SEO Audits", detail: "Basic site audit" },
        {
          title: "Keyword Research & Strategy",
          detail: "10 targeted keywords",
        },
        { title: "On-Page SEO", detail: "Meta tags optimization" },
        { title: "Off-Page SEO", detail: "Basic link building" },
        { title: "Technical SEO", detail: "Basic technical fixes" },
        { title: "Content Creation & Optimization", detail: "" },
      ],
      featured: false,
    },
    {
      name: "Standard Package",
      features: [
        { title: "SEO Audits", detail: "Comprehensive site audit" },
        {
          title: "Keyword Research & Strategy",
          detail: "25 targeted keywords",
        },
        { title: "On-Page SEO", detail: "Full on-page optimization" },
        { title: "Off-Page SEO", detail: "Moderate link building" },
        { title: "Technical SEO", detail: "Full technical audit & fixes" },
        {
          title: "Content Creation & Optimization",
          detail: "4 pieces per month",
        },
      ],
      featured: false,
    },
    {
      name: "Premium Package",
      features: [
        { title: "SEO Audits", detail: "Full technical and UK audit" },
        {
          title: "Keyword Research & Strategy",
          detail: "50 targeted keywords",
        },
        { title: "On-Page SEO", detail: "Advanced on-page techniques" },
        { title: "Off-Page SEO", detail: "Aggressive link building" },
        { title: "Technical SEO", detail: "Advanced technical optimization" },
        {
          title: "Content Creation & Optimization",
          detail: "8 pieces per month",
        },
      ],
      featured: true,
    },
    {
      name: "Enterprise Package",
      features: [
        { title: "SEO Audits", detail: "In-depth audit + competitor analysis" },
        {
          title: "Keyword Research & Strategy",
          detail: "Custom strategy with 100+ keywords",
        },
        { title: "On-Page SEO", detail: "Complete on-page overhaul" },
        { title: "Off-Page SEO", detail: "Advanced outreach + PR strategies" },
        { title: "Technical SEO", detail: "Custom technical solutions" },
        {
          title: "Content Creation & Optimization",
          detail: "Unlimited content creation",
        },
      ],
      featured: false,
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
             Paid Media <br/> Advertisement
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
              Dominate Your Market with Corecentrix: 200%+ ROI Growth Through Precision-Powered Paid Digital Marketing
              </h1>
              <p className="mb-8 leading-relaxed">
              Unlock unparalleled business growth with Corecentrix’s precision-powered Paid Digital Marketing solutions, designed to deliver measurable success. Our data-driven strategies have consistently generated over 200% ROI for clients across various industries. With 85% improved ad click-through rates and a 60% reduction in customer acquisition costs, we optimize every dollar spent, ensuring your brand reaches the right audience at the right time.
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
              Don’t waste a single click
              </h1>
              <p className="mb-8 leading-relaxed">
              Every click counts, and at Corecentrix, we ensure none go to waste. With our expertly crafted Paid Digital Marketing strategies, we optimize your ad spend to deliver maximum results. Our precision targeting and continuous performance analysis help convert clicks into high-quality leads, driving an average 30% increase in conversion rates and reducing wasted spend by up to 40%. Whether through Google Ads, social media, or display networks, we ensure each click leads to meaningful engagement and measurable ROI. Don’t let potential customers slip through the cracks—partner with Corecentrix and make every click count.
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
              Increased business proposition with strategic Ad placements

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                Strategic ad placements are the cornerstone of boosting your business proposition. At Corecentrix, we craft targeted advertising campaigns that place your brand in front of the right audience, at the right time, and in the most impactful spaces.

By leveraging data-driven insights and advanced ad placement techniques, we enhance visibility and engagement across platforms like Google, social media, and display networks. This precise targeting results in a 35% higher click-through rate and up to 50% more conversions, ensuring your ads not only reach more people but also drive measurable business growth.
                </p>

              </div>
              <Link href={`/Contact`}><button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                Book a Demo
              </button>
              </Link>
            </div>
          </div>
        </section>



        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#191919]">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${pkg.featured
                    ? "border  border-[#4F1DD7] transform md:-translate-y-4"
                    : "border border-[#D9345E]"
                    } bg-[#191919]`}
                >
                  <div
                    className={`p-6 ${pkg.featured
                      ? "bg-[#4F1DD7] text-white"
                      : " bg-[#D9345E] text-white"
                      }`}
                  >
                    <h2 className="text-xl font-bold text-center">
                      {pkg.name}
                    </h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="border-b border-gray-100 pb-2 last:border-0"
                        >
                          <h3 className="font-medium text-white ">
                            {feature.title}
                          </h3>
                          {feature.detail && (
                            <p className="text-white/50 text-sm mt-1">
                              {feature.detail}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full h-screen  px-4 py-4 text-white">
          <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">FAQs: Your Questions Answered</h1>
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 md:flex-row flex-col items-center">
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

              {FAQS?.map((card, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full space-y-5"
                >
                  <AccordionItem value={`item-${index}`} className={``}>
                    <AccordionTrigger className=" text-white md:text-2xl lg:text-2xl hover:no-underline hover:text-pink-800 cursor-pointer">
                      {card.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-white md:text-lg">
                      {card.dis}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
