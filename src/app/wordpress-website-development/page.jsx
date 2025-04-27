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
      title: "Custom Design & Development",
      dis: "Our team doesn’t believe in one-size-fits-all templates. We work closely with you to understand your brand, audience, and goals, creating a fully customized WordPress website that reflects your unique identity. From sleek, modern designs to intuitive layouts, we ensure every element is crafted with purpose—enhancing both aesthetics and functionality. We also offer tailored plugins and features to meet your business’s specific needs, ensuring a personalized experience for your users.",
    },
    {
      title: "SEO-Optimized Structure",
      dis: "We build every website with an SEO-first mindset, ensuring your site is not only visually appealing but also primed to rank high in search engines. From clean code and optimized images to meta tags, alt texts, and proper use of headers, we implement the latest SEO best practices. We also ensure a logical URL structure and create content that aligns with your keyword strategy, driving organic traffic and improving your visibility in search results, giving you a competitive edge online.",
    },
    {
      title: "Mobile-First, Fully Responsive Design",
      dis: "With over 50% of web traffic now coming from mobile devices, we prioritize responsive design from the outset. Every site we create is built on a mobile-first framework, ensuring seamless functionality across all screen sizes, from smartphones and tablets to desktops. We rigorously test each design to ensure optimal performance and user experience, regardless of the device. This guarantees your visitors enjoy fast, intuitive navigation and a consistent brand experience, helping to increase engagement and reduce bounce rates.",
    },
    {
      title: "Speed & Performance Optimization",
      dis: "Speed is crucial to both user experience and SEO rankings. A slow-loading website can frustrate users and lead to high bounce rates. To prevent this, we optimize every aspect of your WordPress site for peak performance, from reducing image sizes and utilizing browser caching to minifying CSS and JavaScript files. We implement advanced techniques like Content Delivery Networks (CDN) and server-side caching to ensure that your website loads quickly and efficiently, even under heavy traffic.",
    },
    {
      title: "Enhanced Security Features",
      dis: "Cybersecurity threats are constantly evolving, and protecting your website is paramount. Our WordPress development services include robust security measures such as secure hosting, SSL certificates, malware scanning, and firewalls to protect your site from hackers, spam, and data breaches. We also employ regular updates and security patches to minimize vulnerabilities, perform site backups, and implement two-factor authentication (2FA) to keep your data secure, ensuring your business and customers are safeguarded from online threats.",
    },
    {
      title: "Scalable & Future-Proof Solutions",
      dis: "As your business grows, so should your website. Our WordPress solutions are designed to be fully scalable, allowing for seamless expansion without compromising site performance. Whether you need to add e-commerce functionality, integrate third-party APIs, or expand your site’s content and features, we build websites with a flexible architecture that accommodates future growth. This future-proof approach means your site is always ready to evolve with your business, eliminating the need for costly overhauls down the line.",
    },
  ];

  const FAQS = [
    {
      title: "What is WordPress and why should I use it for my website?",
      dis: "WordPress is a versatile content management system (CMS) that allows you to create and manage websites easily. It offers a wide range of themes and plugins, making it highly customizable. It's user-friendly, SEO-friendly, and supports a variety of functionalities, making it a popular choice for businesses of all sizes.",
    },
    {
      title: "How long does it take to build a WordPress website?",
      dis: "The timeline for building a WordPress website depends on the complexity of the project. A basic website can take a few weeks, while more complex sites with custom features or e-commerce functionality might take several months. We’ll provide a detailed timeline based on your specific requirements.",
    },

    {
      title: "Can I make changes to my website after it's launched?",
      dis: "Yes, you can make changes to your website after launch. WordPress allows you to easily update content, add new pages, and modify designs through the admin dashboard. For more advanced changes, you might need the help of a developer.",
    },


    {
      title: "How do you approach SEO for WordPress websites?",
      dis: "We incorporate SEO best practices into the development process to help your WordPress website rank higher in search engine results. This includes optimizing site structure, meta tags, keywords, and content, as well as ensuring fast load times and mobile responsiveness. We also offer ongoing SEO services to further enhance your site’s visibility.",
    },
  ];

  const packages = [
    {
      name: "Basic Package",
      features: [
        { title: "Custom Design", detail: "Pre-designed templates" },
        {
          title: "Responsive Design",
          detail: "Mobile-friendly design",
        },
        { title: "Content Management System", detail: "Basic CMS setup" },
        { title: "SEO Optimization", detail: "Basic SEO setup" },
        { title: "Security Features", detail: "Basic security measures" },
        { title: "Performance Optimization", detail: "Basic performance tuning" },
        { title: "E-Commerce Functionality", detail: "Not included" },
        { title: "Support & Maintenance", detail: "Limited post-launch support" },
        { title: "Plugin Integration", detail: "Essential plugins" },
        { title: "Training & Documentation", detail: "Basic documentation" },
      ],
      featured: false,
    },
    {
      name: "Standard Package",
      features: [
        { title: "Custom Design", detail: "Basic custom design" },
        {
          title: "Responsive Design",
          detail: "Responsive across devices",
        },
        { title: "Content Management System", detail: "CMS with additional plugins" },
        { title: "SEO Optimization", detail: "On-page SEO optimization" },
        { title: "Security Features", detail: "Enhanced security protocols" },
        { title: "Performance Optimization", detail: "Improved speed and performance" },
        { title: "E-Commerce Functionality", detail: "Basic e-commerce setup" },
        { title: "Support & Maintenance", detail: "3 months of support and updates" },
        { title: "Plugin Integration", detail: "Standard plugins integration" },
        { title: "Training & Documentation", detail: "User training" },
      ],
      featured: false,
    },
    {
      name: "Premium Package",
      features: [
        { title: "Custom Design", detail: "Advanced custom design" },
        {
          title: "Responsive Design",
          detail: "Enhanced responsiveness",
        },
        { title: "Content Management System", detail: "Advanced CMS features" },
        { title: "SEO Optimization", detail: "Advanced SEO strategies" },
        { title: "Security Features", detail: "Advanced security features" },
        { title: "Performance Optimization", detail: "Comprehensive performance optimization" },
        { title: "E-Commerce Functionality", detail: "Advanced e-commerce features" },
        { title: "Support & Maintenance", detail: "6 months of support and updates" },
        { title: "Plugin Integration", detail: "Premium plugins and integrations" },
        { title: "Training & Documentation", detail: "Comprehensive training and documentation" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Package",
      features: [
        { title: "Custom Design", detail: "Fully bespoke design" },
        {
          title: "Responsive Design",
          detail: "Fully optimized for all devices",
        },
        { title: "Content Management System", detail: "Comprehensive CMS with custom integrations" },
        { title: "SEO Optimization", detail: "Complete SEO audit and optimization" },
        { title: "Security Features", detail: "Top-tier security with regular updates" },
        { title: "Performance Optimization", detail: "Premium performance and caching solutions" },
        { title: "E-Commerce Functionality", detail: "Fully integrated e-commerce solution" },
        { title: "Support & Maintenance", detail: "12 months of premium support and maintenance" },
        { title: "Plugin Integration", detail: "Custom plugins and advanced integrations" },
        { title: "Training & Documentation", detail: "In-depth training and personalized documentation" },
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
              WordPress Website <br /> Development
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
              Expert WordPress Website Development: Crafting High-Performance, User-Centric Sites for Unmatched Business Success
              </h1>
              <p className="mb-8 leading-relaxed">
              Our WordPress Website Development service is designed to build visually stunning, highly responsive, and user-centric websites that drive business growth. Leveraging our deep expertise, we craft custom WordPress solutions tailored to your business needs, ensuring optimal performance, fast load times, and seamless user experiences. Whether it’s a simple corporate website or a complex e-commerce platform, we focus on creating sites that not only look great but also deliver measurable results—boosting conversions, enhancing SEO rankings, and strengthening your online presence. With a commitment to quality, security, and scalability, we help your business thrive in the digital landscape.
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
              One-time Website Solution
              </h1>
              <p className="mb-8 leading-relaxed">
              Our One-Time Website Solution offers businesses a comprehensive, fully-customized WordPress website designed to meet your goals without the ongoing hassle. We handle everything from initial design to final deployment, ensuring that your site is fast, secure, and user-friendly. Perfect for businesses seeking a high-quality, professional online presence without long-term development commitments, this solution provides all the essentials needed to launch a stunning and effective website in one go.
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
              Why Choose Us: The Unmatched Benefits of Our Expert WordPress Development Services

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                Partnering with us for your WordPress website development means more than just a beautiful design—it means getting a high-performance, secure, and scalable platform that is customized to fit your business needs. With years of experience, a client-centric approach, and a commitment to delivering measurable results, we ensure your website stands out and drives success. From SEO optimization to responsive design, we cover every aspect needed for a website that not only meets but exceeds your expectations.
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
