import ScrollSpySection from "@/Dev/Components/ScrollSpySection";
import React from "react";

const page = () => {
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
            How It Works
          </h1>
        </div>
      </div>

      <section id="section2-img-left" className="w-full text-white body-font">
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
              page—they're about driving measurable results that translate into
              tangible profits for your business.
            </p>

            <div className="flex justify-center">
              <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[20vh] flex justify-center items-center">
        <h1 className="text-white text-5xl">
          {" "}
          Unmatch Technical <span className="font-bold">Experties</span>
        </h1>
      </section>

      <section className="w-full text-white body-font">
        <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
            <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              Get to the Top Page of Search Engines:
              {/* <br className="hidden lg:inline-block" /> */}
              With targeted Revenue growth
            </h1>
            <p className=" leading-relaxed mb-4">
              In the fast-paced digital marketplace, visibility is everything.
              Corecentrix Business Solutions stands at the forefront of SEO
              excellence.
            </p>
            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
              <li className="text-white/80 text-base">
                Screen Mirroring and Remote Assistance: Real-time guidance and
                problem-solving via screen sharing tools.
              </li>
              <li className="text-white/80 text-base">
                Screen Mirroring and Remote Assistance: Real-time guidance and
                problem-solving via screen sharing tools.
              </li>
              <li className="text-white/80 text-base">
                Screen Mirroring and Remote Assistance: Real-time guidance and
                problem-solving via screen sharing tools.
              </li>
              <li className="text-white/80 text-base">
                Screen Mirroring and Remote Assistance: Real-time guidance and
                problem-solving via screen sharing tools.
              </li>
            </ul>
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

      {/* <section className="w-full h-full">
        <div className="w-full h-full flex max-sm:flex-col gap-2 px-10 py-8">
          <div className="w-[20%]  max-sm:w-full  ">
            <div className="sticky top-2 space-y-2 ">
            <div className="w-full rounded-2xl p-7 flex flex-col gap-4 bg-[#510ADD] border border-white/30">
              <h1 className="text-white font-lg">01</h1>
              <h3 className="text-white font-medium text-xl">Challenge</h3>
            </div>
            <div className="w-full rounded-2xl p-7 flex flex-col gap-4  border border-white/30">
              <h1 className="text-white font-lg">01</h1>
              <h3 className="text-white font-medium text-xl">Challenge</h3>
            </div>
            <div className="w-full rounded-2xl p-7 flex flex-col gap-4  border border-white/30">
              <h1 className="text-white font-lg">01</h1>
              <h3 className="text-white font-medium text-xl">Challenge</h3>
            </div>
            <div className="w-full rounded-2xl p-7 flex flex-col gap-4  border border-white/30">
              <h1 className="text-white font-lg">01</h1>
              <h3 className="text-white font-medium text-xl">Challenge</h3>
            </div>
            </div>
          </div>
          <div className="w-[80%] max-sm:w-full space-y-2">
            <div className="w-full  p-12 bg-[#510ADD] space-y-2 rounded-2xl">
              <div className="w-full flex justify-between items-center py-4 border-b border-white">
                    <h1 className="text-white text-3xl">Challenge</h1>
                    <h3 className="text-white text-3xl">01</h3>
              </div>
              <div className="w-full flex justify-between items-center py-4">
                    <p className="text-white font-medium text-lg">The client, a leading provider of cloud-based solutions for government agencies, experienced a rise in complex technical support tickets that their internal team struggled to resolve within agreed-upon Service Level Agreements (SLAs). This led to frustrated customers and declining Customer Satisfaction Scores (CSAT). The client has a history of maintaining exceptional SLA and impeccable CSAT. They needed to partner with a BPO that could match their standards.</p>
              </div>
              <div className=" w-full">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3b5eee61f4c0be515133e_1-9-1_1-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            </div>
            <div className="w-full  p-12 bg-[#510ADD] space-y-2 rounded-2xl">
              <div className="w-full flex justify-between items-center py-4 border-b border-white">
                    <h1 className="text-white text-3xl">Challenge</h1>
                    <h3 className="text-white text-3xl">01</h3>
              </div>
              <div className="w-full flex justify-between items-center py-4">
                    <p className="text-white font-medium text-lg">The client, a leading provider of cloud-based solutions for government agencies, experienced a rise in complex technical support tickets that their internal team struggled to resolve within agreed-upon Service Level Agreements (SLAs). This led to frustrated customers and declining Customer Satisfaction Scores (CSAT). The client has a history of maintaining exceptional SLA and impeccable CSAT. They needed to partner with a BPO that could match their standards.</p>
              </div>
              <div className=" w-full">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3b5eee61f4c0be515133e_1-9-1_1-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            </div>
            <div className="w-full  p-12 bg-[#510ADD] space-y-2 rounded-2xl">
              <div className="w-full flex justify-between items-center py-4 border-b border-white">
                    <h1 className="text-white text-3xl">Challenge</h1>
                    <h3 className="text-white text-3xl">01</h3>
              </div>
              <div className="w-full flex justify-between items-center py-4">
                    <p className="text-white font-medium text-lg">The client, a leading provider of cloud-based solutions for government agencies, experienced a rise in complex technical support tickets that their internal team struggled to resolve within agreed-upon Service Level Agreements (SLAs). This led to frustrated customers and declining Customer Satisfaction Scores (CSAT). The client has a history of maintaining exceptional SLA and impeccable CSAT. They needed to partner with a BPO that could match their standards.</p>
              </div>
              <div className=" w-full">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3b5eee61f4c0be515133e_1-9-1_1-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            </div>
            <div className="w-full  p-12 bg-[#510ADD] space-y-2 rounded-2xl">
              <div className="w-full flex justify-between items-center py-4 border-b border-white">
                    <h1 className="text-white text-3xl">Challenge</h1>
                    <h3 className="text-white text-3xl">01</h3>
              </div>
              <div className="w-full flex justify-between items-center py-4">
                    <p className="text-white font-medium text-lg">The client, a leading provider of cloud-based solutions for government agencies, experienced a rise in complex technical support tickets that their internal team struggled to resolve within agreed-upon Service Level Agreements (SLAs). This led to frustrated customers and declining Customer Satisfaction Scores (CSAT). The client has a history of maintaining exceptional SLA and impeccable CSAT. They needed to partner with a BPO that could match their standards.</p>
              </div>
              <div className=" w-full">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3b5eee61f4c0be515133e_1-9-1_1-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            </div>
          </div>
        </div>
      </section> */}
      <ScrollSpySection/>
    </div>
  );
};

export default page;
// https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3b5eee61f4c0be515133e_1-9-1_1-transcode.mp4
