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
            dis: "Comprehensive E-Commerce Setup: Your All-In-One, Hassle-Free Online Store Solution Our One-Time E-Commerce Solution provides businesses with a fully customized e-commerce platform designed for immediate impact and long-term success. We manage every phase of your project, from initial concept through to final deployment, ensuring your site is fast, secure, and user-friendly. Ideal for businesses seeking a premium online presence without ongoing development concerns, this service delivers a fully-functional, high-quality e-commerce site in a single, streamlined package.",
        },
        {
            title: "SEO-Optimized Architecture",
            dis: "Our e-commerce solutions are designed with an SEO-first approach to maximize your site’s search engine visibility. We incorporate best practices such as clean coding, optimized images, and strategic meta tags to enhance search rankings. A logical URL structure and keyword-aligned content ensure that your e-commerce site attracts organic traffic and stands out in competitive search results, giving you a significant edge online.",
        },
        {
            title: "Mobile-First, Fully Responsive Design",
            dis: "With mobile commerce on the rise, our e-commerce solutions prioritize mobile-first design principles. We ensure your site is fully responsive, providing a flawless shopping experience across smartphones, tablets, and desktops. Rigorous testing and optimization guarantee that users experience smooth navigation and fast load times, regardless of their device, which helps to boost engagement and reduce bounce rates.",
        },
        {
            title: "Speed & Performance Optimization",
            dis: "Speed is a critical factor in both user satisfaction and search engine ranking. Our team optimizes your e-commerce site for superior performance, implementing techniques like image compression, browser caching, and minification of CSS and JavaScript. Advanced strategies such as Content Delivery Networks (CDNs) and server-side caching ensure your site performs efficiently even during peak traffic periods.",
        },
        {
            title: "EnEnhanced Security Measures",
            dis: "Protecting your e-commerce site from cyber threats is a top priority. We integrate comprehensive security measures, including secure hosting, SSL certificates, malware scanning, and firewalls. Regular updates, security patches, and two-factor authentication (2FA) further protect your data and your customers, ensuring a safe and reliable online shopping environment.",
        },
        {
            title: "Scalable & Future-Proof Solutions",
            dis: "Our e-commerce platforms are built to scale with your business. Whether you need additional features, integrations, or content expansion, our solutions offer flexible architecture that accommodates future growth. This future-proof approach ensures your site remains adaptable and effective as your business evolves, avoiding costly redesigns and maintaining peak performance.",
        },
    ];

    const FAQS = [
        {
            title: "What types of businesses can benefit from your E-commerce solutions?",
            dis: "Our E-commerce solutions are designed for businesses of all sizes, from small startups to large enterprises. Whether you're selling physical products, digital goods, or services, our tailored solutions can help improve your online store's functionality, user experience, and profitability.",
        },
        {
            title: "Do you offer custom E-commerce solutions for specific industries?",
            dis: "Yes, we specialize in creating custom E-commerce solutions that cater to the unique needs of various industries, including retail, fashion, technology, and more. Our team works closely with you to develop a solution that aligns with your business goals and industry requirements.",
        },

        {
            title: "How do your E-commerce solutions improve customer experience?",
            dis: "Our solutions focus on enhancing user experience by implementing responsive design, simplified navigation, personalized shopping experiences, and fast, secure checkout processes. This results in improved customer satisfaction, loyalty, and higher conversion rates.",
        },


        {
            title: "Can your E-commerce platform integrate with existing systems like ERP and CRM?",
            dis: "Absolutely. We ensure seamless integration with your existing ERP, CRM, and other third-party systems to centralize data and streamline business processes, making it easier for you to manage inventory, customer relations, and order fulfillment.",
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
                            E-Commerce Website <br /> Development
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
                                Elite E-Commerce Solutions: Empowering Your Business with Cutting-Edge Digital Strategies
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                At Corecentrix Business Solutions, our E-Commerce Solutions are crafted to transform your digital storefront into a powerhouse of business growth and customer engagement. Leveraging our extensive expertise in e-commerce development, we design and implement tailored solutions that are both aesthetically pleasing and functionally robust. Our approach ensures a seamless, user-centric experience that enhances conversion rates, optimizes SEO performance, and solidifies your online presence. From intuitive online shops to complex sales platforms, we build e-commerce sites that not only captivate your audience but also drive measurable success through high-performance technology, security, and scalability
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
                                One-Time E-Commerce Solution
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Comprehensive E-Commerce Setup: Your All-In-One, Hassle-Free Online Store Solution
                                Our One-Time E-Commerce Solution provides businesses with a fully customized e-commerce platform designed for immediate impact and long-term success. We manage every phase of your project, from initial concept through to final deployment, ensuring your site is fast, secure, and user-friendly. Ideal for businesses seeking a premium online presence without ongoing development concerns, this service delivers a fully-functional, high-quality e-commerce site in a single, streamlined package.
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
                            Why Choose Us: The Unmatched Benefits of Our E-Commerce Solutions
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                Partnering with Corecentrix Business Solutions means investing in an e-commerce platform that delivers excellence in design, functionality, and performance. Our expert team is dedicated to crafting custom solutions that not only meet but exceed your business needs. From SEO optimization and responsive design to advanced security and ongoing support, we ensure your e-commerce site stands out and drives meaningful results.
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
