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
      title: "Comprehensive Local SEO Audits",
      dis: "Our process begins with an in -depth local SEO audit, analyzing your current online presence, competitor landscape, and potential growth areas.This audit identifies gaps and opportunities, providing a roadmap to enhance your search visibility.We use advanced tools to assess factors like keyword rankings, citation accuracy, and Google Business Profile optimization.On average, businesses that undergo our comprehensive audit see a 35% increase in local search traffic within the first 60 days.",
    },
    {
      title: "Optimizing Google Business Profile",
      dis: "A well-optimized Google Business Profile is crucial for local SEO success. We enhance your profile with accurate information, engaging descriptions, high-quality images, and targeted keywords. Our experts ensure your profile is regularly updated with fresh content and customer reviews, significantly boosting your local search rankings. Statistics show that businesses with optimized Google Business Profiles enjoy a 70% increase in click-through rates from local searches.",
    },
    {
      title: "Building and Managing Local Citations",
      dis: "Accurate and consistent local citations across directories and review sites are essential for building trust with search engines and customers. We ensure your business information is uniform across all major platforms, reducing the risk of errors and improving your local SEO. This consistency can lead to a 20% improvement in local search rankings, helping your business appear more frequently in search results.",
    },
    {
      title: "Targeted Local Content Strategy",
      dis: "Creating content that resonates with your local audience is key to establishing authority in your area. We develop a targeted content strategy that includes blog posts, local guides, and community-focused articles, all optimized for local keywords. This approach not only increases your website’s relevance but also drives engagement from local users. Clients utilizing our local content strategy see a 40% boost in local search traffic and a 25% increase in user engagement.",
    },
    {
      title: "Leveraging Customer Reviews and Reputation Management",
      dis: "Positive customer reviews are a powerful factor in local search rankings and customer decision-making. We help you implement effective strategies to encourage satisfied customers to leave positive reviews, while also managing and responding to feedback. Businesses that actively manage their online reputation with our services typically experience a 50% improvement in local search visibility and a higher conversion rate due to increased customer trus",
    },
    {
      title: "Advanced Data Analytics and Continuous Optimization",
      dis: "Our work doesn’t stop once the initial optimizations are in place. We continuously monitor your local search performance using advanced data analytics tools to track key metrics such as search rankings, click-through rates, and customer engagement. This ongoing analysis allows us to make data-driven adjustments to your strategy, ensuring sustained growth. Our clients benefit from a continuous improvement approach, achieving a 30% year-over-year increase in local search traffic and conversions.",
    },
  ];

  const FAQS = [
    {
      title: "What is Local Search Optimization?",
      dis: "Local Search Optimization is the process of enhancing your online presence to improve visibility in local search results. It involves optimizing your website, Google Business Profile, and other online listings to attract customers in your geographic area.",
    },
    {
      title: "Why is Local Search Optimization important for my business?",
      dis: "Local Search Optimization helps your business appear in search results when potential customers look for products or services in your area. It drives targeted traffic, increases foot traffic, and enhances brand visibility within your local market.",
    },

    {
      title: "How does Local Search Optimization differ from regular SEO?",
      dis: "While regular SEO focuses on improving your website’s visibility across a broad range of searches, Local Search Optimization specifically targets local searches and aims to increase your business’s presence in a particular geographic area.",
    },


    {
      title: "How do I optimize my Google Business Profile?",
      dis: "To optimize your Google Business Profile, ensure that your business information is accurate and up-to-date, include relevant keywords in your business description, add high-quality photos, encourage and respond to customer reviews, and regularly update your profile with posts and offers.",
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
              Local Search <br /> Optimization
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
                Local Search Optimization: Enhancing Visibility with Proven Results
              </h1>
              <p className="mb-8 leading-relaxed">
                Businesses that utilize our Local Search Optimization services experience an average 45% increase in local search visibility within the first three months. Our clients see a 30% boost in click-through rates from local search results, driving more qualified traffic to their websites. Our comprehensive approach includes optimizing Google Business Profiles, managing local citations, and employing targeted keywords to ensure your business captures attention from potential customers in your area.
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
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 sm:py-5   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Be the top choice in your area
              </h1>
              <p className="mb-8 leading-relaxed">
                At Corecentrix Business Solutions, we specialize in making your business the go-to option in your local area. With our Local Search Optimization services, we utilize proven strategies and data-driven methods to boost your visibility and credibility. Our goal is to ensure that when customers search for services like yours, your business is their top choice. Our expert team leverages years of experience and cutting-edge tools to craft a personalized strategy that aligns with your business goals, ensuring you dominate local search results and drive more targeted traffic to your website.
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
                Comprehensive Local Search Strategies for Enterprise-Level Success

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  Achieving top visibility in local markets is crucial for enterprises looking to dominate their industry. At Corecentrix Business Solutions, we offer tailored local search strategies designed specifically for enterprise-level businesses. Our approach combines advanced SEO techniques with localized content, citation management, and reputation enhancement to ensure your brand stands out in every market you serve.
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
