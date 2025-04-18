import React from "react";
import { Card, CardContent } from "@/Dev/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Dev/Components/ui/carousel";
import IntegritySection from "@/Dev/Components/integrity-section";
import BusinessOperations from "@/Dev/Components/Business-operations";
import MeetPandasCSR from "@/Dev/Components/MeetPandasCSR";

const page = () => {
  const Staff = [
    {
      name: "Aleem Ashraf",
      position: "CEO",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/662b92fa67b34a4afb5310bf_Group%20434.avif"
    },
    {
      name: "Ali Ashraf",
      position: "COO",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/662b93b7df3d9ecf75ac360d_Group%20435.avif"
    },
    {
      name: "Kashif Khan",
      position: "CTO",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/664dbb6404ee49eeadbc40fb_Group%2039938.avif"
    },
    {
      name: "Hassan Iqbal",
      position: "President Finace",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/66b61d3c906a507514e61f7b_Rectangle%203101.avif"
    },
    {
      name: "Wasil Faiz",
      position: "CFO",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/66b61d31588faa87bf9b6994_Rectangle%203099.avif"
    },
    {
      name: "Daroshaam Shehzad",
      position: "Head of Audit and Project Management",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/664dbb3455b759a6b1b6a7ac_Group%2039939.avif"
    },
    {
      name: "Waleed Shah",
      position: "Head of Growth & Engagment",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/662b94c7d580be985accb2dc_Group%20438%20(2).avif"
    },
    {
      name: "Ayesha Fayyaz",
      position: "Onboarding & Implementation",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/662b94e17e5e98b8da5168b2_Group%20439.avif"
    },
  ]
  return (
    <div className="w-full h-full bg-[#191919]">
      <div className="w-full h-full">
        <div
          id="seo-hero"
          className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
        >
          <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
          <h1
            // ref={mainHeading}
            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
          >
            Who We Are
          </h1>
        </div>
      </div>

      <IntegritySection />
      <MeetPandasCSR />

      <div className="w-full h-screen flex flex-col justify-between gap-4 items-center bg-[#E8E0CD] py-12">
        <h1 className="text-5xl font-bold  text-black  mb-12 text-center">
        Meet our team
        </h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[90%]"
        >
          <CarouselContent>
            {Staff?.map((card, index) => (
              <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/4 ">
                <div className="p-0 "> 
                  <div className={`bg-transparent`}>
                    <div className="w-full ">
                      <div className="w-full h-full object-cover border-2 border-black/50 rounded-xl overflow-hidden">
                        <img
                          src={card.img}
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-2xl font-bold"> {card.name}</h2>
                        <p className="text-base font-medium">{card.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={`max-sm:hidden`} />
          <CarouselNext className={`max-sm:hidden`}/>
        </Carousel>
      </div>

      <section className="w-full text-white body-font">
        <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
            <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              We are a full service marketing & development company, working all
              over USA with top businesses.
            </h1>
            <p className="mb-8 leading-relaxed">
              We have worked with businesses like Spectrum, COX, Frontier,
              Century Link, providing them business solutions that increased
              their sales 10x.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                Connect Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              src="/videos/WhoWeAre.mp4"
              className="object-cover object-center rounded"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
        </div>
      </section>

      <BusinessOperations />
    </div>
  );
};

export default page;
