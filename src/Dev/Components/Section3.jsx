"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section3 = () => {
  const imgRef = useRef(null);

 

  const serviceSections = [
    {
      id: "01",
      title: "Solutions we provide",
      description:
        "At Corecentrix Business Solutions, we provide comprehensive services designed to drive growth, enhance visibility, and increase ROI for businesses across various industries. Our holistic approach integrates cutting-edge marketing strategies with advanced development and IT solutions to ensure your business thrives in today’s competitive landscape.",
      leftCards: [
        {
          img: "/dev/images/solution logo 1.svg",
          title: "Organic Marketing",
          desc: "Harness the Power of Organic Growth Our proven strategies have led to a 150% average increase in search engine rankings and a 120% boost in website traffic for our clients.",
        },
        {
          img: "/dev/images/Team Work Logo.svg",
          title: "Paid Marketing",
          desc: "With our data-driven approach, clients have experienced up to a 300% return on ad spend and a 70% increase in lead generation within the first three months.",
        },
      ],
      middleLine: "/dev/images/large_line.svg",
      rightCard: {
        img: "/dev/images/Team Work Logo 2.svg",
        title: "Development Solutions",
        desc: "Build Robust Digital Experiences We design and develop websites tailored to your brand, ensuring a seamless user experience that enhances engagement and drives conversions.",
      },
      bottomText:
        "At Corecentrix Business Solutions, our commitment to excellence is reflected in the certifications and accreditations we proudly hold. These certifications are not just symbols of our expertise—they are assurances of our dedication to delivering the highest standards of service and professionalism to our clients.",
      topLine: "/dev/images/top_line.svg",
    },
    {
      id: "02",
      title: "Key Services and Value Proposition",
      description:
        "At CBS, we are dedicated to delivering a full spectrum of services that push your business forward. Our core services",
      leftCards: [
        {
          img: "/dev/images/Team Work Logo 3.svg",
          title: "IT & Software Solutions",
          desc: "We provide secure, scalable, and reliable solutions that improve efficiency and productivity. Clients have reported a 30% reduction in operational costs and a 50% increase in system uptime after implementing our solutions",
        },
        {
          img: "/dev/images/solutions logo 6.svg",
          title: "Ineffective Marketing Strategies",
          desc: "Businesses often see poor returns from marketing that doesn’t reach the right audience. Our Paid Marketing Solutions focus on data-driven strategies, optimizing ad spend to deliver up to a 300% ROI, ensuring your investment generates significant returns.",
        },
      ],
      middleLine: "/dev/images/large_line.svg",
      rightCard: {
        img: "/dev/images/for_small.svg",
        title: "Weak Digital Presence",
        desc: "A lack of visibility online can lead to missed opportunities and lower profits. Our Organic Marketing Solutions enhance your digital footprint, improving search rankings by up to 150% and driving high-quality traffic to your site, resulting in higher engagement and sales.",
      },
      bottomText:
        "At Corecentrix Business Solutions, we specialize in driving digital growth that delivers measurable results. Our data-driven approach has helped clients achieve up to a 200% increase in return on investment (ROI) and a 150% boost in online visibility. By combining innovative strategies with a deep understanding of market dynamics, we ensure your brand reaches its full potential. Partner with us to transform your digital presence, enhance customer engagement, and unlock new revenue streams. Experience the Corecentrix difference and take your business to new heights with our expertise in digital growth.",
      topLine: null,
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="p-[10%] pt-0 text-6xl w-[20%]">
        <h1>Our Services</h1>
      </div>
      <div className="p-[7%] pt-0 pe-0 max-sm:p-5 flex flex-col gap-5 justify-center items-center">
        {serviceSections.map((section) => (
          <div key={section.id} className="w-full flex flex-col items-center">
            {section.topLine && (
              <img
                src={section.topLine}
                alt="line"
                className="w-fit m-auto max-sm:hidden block"
              />
            )}
            <span className="text-6xl text-red-500 max-sm:text-4xl m-5">
              [ {section.id} ]
            </span>
            <h1 className="text-4xl w-full md:w-[50%] max-sm:text-3xl text-center">
              {section.title}
            </h1>
            <p className="w-full mt-3 md:w-[70%] text-xl max-sm:text-base text-center">
              {section.description}
            </p>

            {/* grid */}
            <div className="grid grid-cols-[1fr_0.2fr_1fr] gap-4 w-full max-sm:block">
              <div className="p-4 mt-20 w-full md:w-[60%] max-sm:mt-10 max-sm:w-[90%] max-sm:p-0">
                {section.leftCards.map((card, index) => (
                  <div key={index} className="max-sm:text-center mb-15 max-sm:mb-10">
                    <img
                      className="solutions w-[50%] max-sm:w-[40%]
                       max-sm:ml-[30%] relative z-20"
                      src={card.img}
                      alt=""
                    />
                    <h1 className="mt-5 text-4xl w-full md:w-[100%] max-sm:text-2xl">
                      {card.title}
                    </h1>
                    <p className="mt-10 max-sm:mt-5">{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 max-sm:hidden">
                <img
                  src={section.middleLine}
                  alt="line"
                  className="w-fit m-auto block"
                />
              </div>
              <div className="p-4 mt-20 w-full md:w-[60%] max-sm:mt-10 max-sm:w-[90%] max-sm:p-0 max-sm:text-center">
                <div>
                  <img
                    className="solutions w-[50%] max-sm:w-[40%] max-sm:ml-[30%] relative z-20"
                    src={section.rightCard.img}
                    alt=""
                  />
                  <h1 className="mt-10 text-4xl w-full md:w-[100%] max-sm:text-2xl">
                    {section.rightCard.title}
                  </h1>
                  <p className="mt-10 max-sm:mt-5">{section.rightCard.desc}</p>
                </div>
              </div>
            </div>

            {section.bottomText && (
              <p className="text-center w-full md:w-[47%] max-sm:w-[90%] mt-10 max-sm:mt-5">
                {section.bottomText}
              </p>
            )}

            {section.id === "01" && (
              <img
                src="/dev/images/top_line.svg"
                alt="line"
                className="w-fit m-auto block max-sm:hidden mt-10"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
