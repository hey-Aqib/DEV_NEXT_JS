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
      title: "Keyword Research & Strategy",
      dis: "Corecentrix Business Solutions is an SEO firm that understands your industry and can help you rank higher for certain search phrases. Your SEO professional will examine the keywords for which your website is already ranking.",
    },
    {
      title: "Link Building",
      dis: "Backlinks are an important part in achieving higher rankings in search results, but not just any link! That is why you should work with an SEO firm like Thrive, which has a specialised link building team and contacts with a large number of high-quality and relevant websites",
    },
    {
      title: "Technical SEO",
      dis: "Rankings can be improved by making back-end changes to your website, such as increasing page speed. By correcting these issues, you make it easier for search engines to index your page. And when you please search engines, your rankings may please you much more",
    },
    {
      title: "Local SEO",
      dis: "Improve your company’s local SEO ranks by optimising your Google Business Profile or Google My Business (GMB) and attracting high-intent consumers. To increase your local following, we improve your GMB profile and maintain your online reputation.",
    },
    {
      title: "On-Page SEO",
      dis: "Boost your internet presence and generate high-quality visitors. Thrive ensures that our SEO services are in line with search engines’ best practises in order to increase the reliability of your website.",
    },
    {
      title: "Off-Page SEO",
      dis: "Off-page SEO is critical for building brand reputation and enhancing internet visibility. Partner with our SEO firm and let us assist you in demonstrating your industry experience.",
    },
    {
      title: "Amazon SEO",
      dis: "Differentiate your brand on Amazon and you’ll be discovered by millions of buyers who are eager to buy.",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      dis: "Corecentrix’s CRO services can help you increase the lifetime value of your clients and enhance your online income.",
    },
    {
      title: "E-commerce SEO",
      dis: "Increase your client retention rate by providing a convenient shopping experience to your consumers 24 hours a day, seven days a week",
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
               Shop Order<br/> Outreach
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
              Is your business ranking on the first page of Google?
              </h1>
              <p className="mb-8 leading-relaxed">
              Even if it is, are you confident that it will stay there for long? Imagine having a business with an amazing business model ready to bring the competition a challenge but your business has no we of getting there without good rankings. Our SEO Specialists are aware of the fluctuating policies caused in the digital market, that is Search Engine Optimization. With growing competition all around you it is not a luxury but a necessity to have your business rank on top of google.
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
              Get Free SEO Audit Report now!
              </h1>
              <p className="mb-8 leading-relaxed">
              Is your site well-optimized? Get an Audit.
              Allow us to tell you what your competitors are doing to stay on top of search and how you can outrank them with a concise yet effective plan.
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
              When to get SEO?

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                If any of these are the reason that sound familiar then you have come to the right company because when it comes to Search Engine Optimization (SEO), we are the masters of Google’s ever-changing algorithm. Our SEO Specialists are aware of the fluctuating policies caused in the digital market, that is Search Engine Optimization. With growing competition all around you it is not a luxury but a necessity to have your business rank on top of google.
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
