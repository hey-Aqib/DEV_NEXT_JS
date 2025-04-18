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
        opacity: 0,
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
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        {
          y: 20,
          opacity: 0,
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
      title: "SEO Audits",
      dis: "At Corecentrix Business Solutions, our comprehensive SEO audits are the cornerstone of digital success. We meticulously analyze every facet of your website, from technical infrastructure to content quality and backlink profiles, to identify performance bottlenecks and opportunities for optimization. Our audits provide an in-depth assessment of your site’s SEO health, uncovering critical issues that could be hindering your search engine rankings. Leveraging advanced tools and analytics, we deliver actionable insights that form the foundation of a tailored SEO strategy, driving your business toward sustained visibility and growth.",
    },
    {
      title: "On-Page Technical SEO",
      dis: "Precision and expertise define our approach to On-Page Technical SEO. We fine-tune your website’s structure, ensuring that every element—meta tags, HTML markup, URL architecture, and site speed—is optimized for maximum search engine visibility and user experience. Our team dives deep into the intricacies of technical SEO, addressing issues like crawl errors, duplicate content, and schema markup to enhance search engine indexing and ranking potential. At Corecentrix, we bridge the gap between technical excellence and search engine performance, setting the stage for your website to achieve top rankings.",
    },
    {
      title: "Off-Page SEO",
      dis: "Off-Page SEO is the art of building your website’s authority and relevance beyond its borders. Corecentrix employs a strategic approach to Off-Page SEO, encompassing high-quality link-building, social signals, and online reputation management. Our focus is on establishing your brand as an industry leader through earned media, influencer outreach, and authoritative backlinks. By amplifying your website’s credibility and enhancing its online footprint, we drive sustained traffic growth and strengthen your position in competitive search engine rankings.",
    },
    {
      title: "Keyword Research",
      dis: "Keyword Research is the bedrock of any successful SEO campaign, and at Corecentrix, we execute it with unparalleled precision. Our advanced keyword analysis goes beyond basic search terms, delving into user intent, search volume, competition, and market trends to identify the most impactful keywords for your business. We craft a keyword strategy that aligns with your target audience’s search behavior, ensuring that your content resonates and ranks effectively. By understanding the language of your potential customers, we help you capture more qualified leads and achieve higher conversion rates.",
    },
    {
      title: "Content Creation & Optimization",
      dis: "Content is king, but only when it’s crafted and optimized to perfection. Corecentrix specializes in creating high-quality, engaging content that not only attracts visitors but also compels them to act. Our content creation and optimization services integrate SEO best practices with compelling storytelling, ensuring that your content is both search engine-friendly and aligned with your brand voice. From blog posts to landing pages, we optimize every piece of content to rank higher in search results while delivering value to your audience, driving engagement, and boosting conversions",
    },
    {
      title: "Link Building",
      dis: "Link Building is a critical component of SEO that requires expertise, strategy, and a network of high-authority sources. At Corecentrix, we employ ethical and effective link-building techniques that enhance your website’s authority and improve its rankings. Our approach includes acquiring quality backlinks from reputable websites, creating valuable content that attracts links naturally, and fostering relationships with industry influencers. By securing powerful backlinks, we help your site earn the trust of search engines and achieve long-term SEO success.",
    },
  ];

  const FAQS = [
    {
      title: "What is SEO and why is it important for my business?",
      dis: "SEO, or Search Engine Optimization, is the process of optimizing your website to rank higher on search engine results pages (SERPs). It is crucial for increasing your online visibility, driving organic traffic to your site, and ultimately boosting sales and revenue.",
    },
    {
      title: "How long does it take to see results from SEO?",
      dis: "SEO is a long-term strategy. Typically, you can start seeing noticeable improvements in your search rankings within 3 to 6 months, but it can take 6 to 12 months to achieve significant results, depending on your industry and competition.",
    },
   
    {
      title: "What are the key components of your SEO strategy?",
      dis: "Our SEO strategy includes a comprehensive site audit, keyword research, on-page optimization, off-page SEO, content creation and optimization, link building, and continuous performance tracking and optimization.",
    },
    
    
    {
      title: "How do you measure the success of an SEO campaign?",
      dis: "We use advanced analytics and tracking tools to monitor key metrics such as organic traffic, keyword rankings, conversion rates, and ROI. Regular reports and insights are provided to keep you informed of the progress and impact of your SEO campaign.",
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
              Local Search Optimization
            </h1>
          </div>
        </div>

        {/* --------------------------------  { Section 2 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Get to the Top Page of Search Engines
                {/* <br className="hidden lg:inline-block" /> */}
                With Targeted Revenue Growth
              </h1>
              <p className="mb-8 leading-relaxed">
                In the fast-paced digital marketplace, visibility is everything.
                Corecentrix Business Solutions stands at the forefront of SEO
                excellence, empowering businesses across the USA to dominate
                search engine rankings and achieve unparalleled revenue growth.
                Our expert SEO strategies are not just about climbing to the top
                page—they're about driving measurable results that translate
                into tangible profits for your business.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Connect Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Your Business Statistics Turn
                {/* <br className="hidden lg:inline-block" /> */}
                Your Decisions to Profit
              </h1>
              <p className="mb-8 leading-relaxed">
                Harness the power of data to drive your business forward. At Corecentrix Business Solutions, we transform your business statistics into actionable insights that fuel profitable decisions. By leveraging advanced analytics, we uncover trends, identify opportunities, and provide a clear roadmap to success.

                Whether it’s optimizing your marketing strategies, enhancing customer engagement, or streamlining operations, our data-driven approach ensures that every decision you make is backed by solid evidence and poised to maximize profitability. Let your business statistics be the catalyst for growth, turning informed decisions into substantial profits.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Learn More
                </button>
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
                Our SEO Services Features & Packages

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  At Corecentrix Business Solutions, we provide a full suite of SEO services designed to improve your online visibility, drive targeted traffic, and boost your business’s bottom line. Our offerings are tailored to meet the unique needs of each business, whether you’re a small local business or a large enterprise. Here’s a detailed list of the SEO services we provide:
                </p>

              </div>
              <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                Book a Demo
              </button>
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
          <h1 className="text-white font-bold text-center text-4xl mt-8 ">FAQs: Your Questions Answered</h1>
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
