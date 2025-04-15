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
          img: "/dev/images/blocks.svg",
          title: "Organic Marketing",
          desc: "Harness the Power of Organic Growth Our proven strategies have led to a 150% average increase in search engine rankings and a 120% boost in website traffic for our clients.",
        },
        {
          img: "/dev/images/triple_blocks.svg",
          title: "Paid Marketing",
          desc: "With our data-driven approach, clients have experienced up to a 300% return on ad spend and a 70% increase in lead generation within the first three months.",
        },
      ],
      middleLine: "/dev/images/large_line.svg",
      rightCard: {
        img: "/dev/images/double_blocks.svg",
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
        "At Dev Pandas, we are dedicated to delivering a full spectrum of services that push your business forward. Our core services",
      leftCards: [
        {
          img: "/dev/images/large_small_blocks.svg",
          title: "Software Development",
          desc: "Developing custom software, mobile apps, and web platforms tailored to your business needs",
        },
        {
          img: "/dev/images/blue_blocks.svg",
          title: "Software Development",
          desc: "Developing custom software, mobile apps, and web platforms tailored to your business needs",
        },
      ],
      middleLine: "/dev/images/large_line.svg",
      rightCard: {
        img: "/dev/images/for_small.svg",
        title: "Software Development",
        desc: "Developing custom software, mobile apps, and web platforms tailored to your business needs",
      },
      bottomText:
        "Our value proposition is rooted in our commitment to excellence and our skill in employing the latest technologies to achieve outstanding results. We blend deep technical knowledge with an understanding of industry-specific challenges to deliver solutions that geniunly make a difference",
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
                      className="w-[50%] max-sm:w-[40%]
                       max-sm:ml-[30%] relative z-20"
                      src={card.img}
                      alt=""
                    />
                    <h1 className="mt-5 text-4xl w-full md:w-[50%] max-sm:text-2xl">
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
                    className="w-[50%] max-sm:w-[40%] max-sm:ml-[30%] relative z-20"
                    src={section.rightCard.img}
                    alt=""
                  />
                  <h1 className="mt-10 text-4xl w-full md:w-[50%] max-sm:text-2xl">
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
