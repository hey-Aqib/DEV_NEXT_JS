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
      title: "Custom Contact Forms",
      dis: "We design and integrate highly responsive contact forms tailored to your business needs. These forms are user-friendly, allowing potential clients to easily submit their inquiries or requests, increasing the likelihood of conversions. Whether it’s for lead generation, inquiries, or feedback, our forms are designed to capture valuable customer information effortlessly, ensuring you never miss a business opportunity.",
    },
    {
      title: "Strategic Call-to-Actions (CTAs)",
      dis: "Our expertly crafted CTAs are placed strategically throughout your website to guide users toward taking decisive action, such as scheduling an appointment, making a purchase, or requesting a quote. These CTAs are designed to be attention-grabbing and aligned with your overall business goals, driving immediate responses and enhancing user engagement, leading to higher conversion rates.",
    },
    {
      title: "Area-Wise Targeting",
      dis: "We specialize in localized SEO strategies that allow your business to focus on specific geographical areas. This includes optimizing content, keywords, and your Google Business Profile for the areas you want to target, helping you rank higher in local search results. By zeroing in on specific locations, your business will attract local customers who are more likely to convert, giving you a competitive edge in your market.",
    },
    {
      title: "Keyword Targeting",
      dis: "We perform in-depth keyword research to identify the most relevant and high-converting search terms for your business. Our SEO experts then incorporate these keywords into your website content, meta tags, and headings, ensuring that search engines recognize your site for these terms. This targeted approach not only increases your visibility but also ensures that the traffic you receive is more likely to convert into leads and sales.",
    },
    {
      title: "Mobile-Optimized Design",
      dis: "In today’s mobile-first world, having a website that performs seamlessly on smartphones and tablets is crucial. We ensure your website and landing pages are fully optimized for mobile devices, providing a fast, responsive, and visually appealing user experience across all platforms. This not only improves user engagement but also boosts your site’s rankings, as search engines prioritize mobile-friendly websites.",
    },
    {
      title: "Performance Analytics & Reporting",
      dis: "To help you track the effectiveness of your online presence, we provide comprehensive analytics and reporting tools. These reports give you detailed insights into traffic sources, user behavior, conversion rates, and keyword performance. With these valuable insights, you can continuously refine your strategies, make data-driven decisions, and measure the return on investment (ROI) of your digital marketing efforts.",
    },
  ];

  const FAQS = [
    {
      title: "What is landing page optimization?",
      dis: "Landing page optimization involves designing and improving a landing page to increase its effectiveness in converting visitors into leads or customers. This includes enhancing elements such as content, layout, call-to-action buttons, and SEO strategies to improve user experience and drive better results.",
    },
    {
      title: "Why is landing page optimization important for my business?",
      dis: "Optimizing your landing pages helps ensure that they are aligned with your business goals and target audience. It can significantly increase conversion rates, improve search engine rankings, and drive more qualified traffic to your site, leading to better overall business performance.",
    },

    {
      title: "How does landing page optimization affect SEO?",
      dis: "Proper optimization of landing pages includes implementing SEO best practices such as keyword-rich content, meta tags, and proper HTML structure. This helps improve your landing page’s visibility in search engine results, leading to higher rankings and increased organic traffic.",
    },


    {
      title: "How long does it take to see results from landing page optimization?",
      dis: "The timeframe for seeing results can vary depending on several factors, including the competitiveness of your industry, the effectiveness of the optimization strategies, and the existing performance of your landing page. Generally, you can start seeing improvements in traffic and conversion rates within a few weeks to a few months.",
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
              Landing Page  <br /> Optimization
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
                Landing Page Optimization: Efficient results for quick and easy Search Engine Placement
              </h1>
              <p className="mb-8 leading-relaxed">
                Our landing page optimization service ensures that your business starts on the right foot, even before we fully implement the solution. With our expertly crafted landing pages, your business gains a strong digital presence, paving the way for faster search engine rankings.

                Our approach combines proven SEO techniques with tailored design, allowing you to achieve results through conventional methods—just at a much quicker pace. Whether it’s boosting visibility or driving conversions, we make sure your business stands out with optimized landing pages that deliver efficient and measurable results.
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
                3x faster Results than a website
              </h1>
              <p className="mb-8 leading-relaxed">
                We take your business identity to the next level by placing it on our strategically pre-ranked domains. These domains already hold authority and credibility with search engines, giving your business a head start. Once we integrate your details with our custom-tailored SEO content, specifically designed to match your industry and audience, you’ll experience up to 3x faster results compared to traditional methods. This approach fast-tracks your online visibility, driving traffic and improving search engine rankings while ensuring your business stands out with optimized content and a solid digital foundation.
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
                Landing Page Optimization as an Increase in Placement Strategy

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  Our Landing Page Optimization service is designed to significantly boost your search engine placement and overall visibility. By creating highly targeted, SEO-friendly landing pages, we help your business rank higher in search results, driving more relevant traffic to your website.

                  This strategic approach not only increases your placement on search engines but also improves user engagement, leading to higher conversion rates. With tailored content, focused keyword strategies, and ongoing optimization, our landing page solutions ensure your business is always in front of the right audience at the right time.
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
