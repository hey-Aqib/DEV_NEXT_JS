import { CircleAlert } from "lucide-react";
import React from "react";

const Section11 = () => {
  return (
    <div className="relative w-full h-full bg-black text-white px-[5%]">
    <h1 className="w-[70%] max-sm:w-[100%] p-8 px-0 pb-0 pt-16 text-4xl max-sm:text-4xl leading-tight  md:text-6xl lg:text-7xl font-bold">
      Ready to Innovate with ForwardSols?
    </h1>
  
    <p className="w-[52%] max-sm:w-[100%] px-0 mx-0 mt-7 text-xl ">
      Complete the form, and our team will reach out to discuss how we can
      create custom software solutions to meet your business needs.
    </p>
  
    <form className="w-full mt-12 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="text"
          placeholder="Full name"
          className="flex-1 bg-black border border-gray-600 text-white placeholder-gray-400 p-4 outline-none"
        />
        <input
          type="text"
          placeholder="Company name"
          className="flex-1 bg-black border border-gray-600 text-white placeholder-gray-400 p-4 outline-none"
        />
      </div>
  
      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="email"
          placeholder="Business email"
          className="flex-1 bg-black border border-gray-600 text-white placeholder-gray-400 p-4 outline-none"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="flex-1 bg-black border border-gray-600 text-white placeholder-gray-400 p-4 outline-none"
        />
      </div>
  
      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="text"
          placeholder="Job title"
          className="flex-1 bg-black border border-gray-600 text-white placeholder-gray-400 p-4 outline-none"
        />
        <input
          type="text"
          placeholder="Industry"
          className="flex-1 bg-black border border-gray-600 text-white placeholder-gray-400 p-4 outline-none"
        />
      </div>
  
      <div className="flex items-start gap-2 text-gray-400 text-sm">
       <CircleAlert size={25} className="max-sm:size-15 max-sm:-mt-5" />
        <span >
          Your privacy is important to us. All information submitted through
          this form will be kept confidential and secure. We will not share your
          details with third parties without your consent.
        </span>
      </div>
        <div className="relative 2xl:w-[10%] md:w-[14%] max-sm:w-[40%]  max-sm:mt-[8%] md:mt-[2%] 2xl:mt-[3%] inline-block  mx-[1%] group">
                    <button className="relative z-20 text-white px-8 py-4 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
                      <span className="relative z-20">Get in Touch</span>

                      <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
                    </button>

                    <img
                      src="/dev/images/left top.svg"
                      alt=""
                      className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                    <img
                      src="/dev/images/right top.svg"
                      alt=""
                      className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-1 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                    />
                    <img
                      src="/dev/images/left bottom.svg"
                      alt=""
                      className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    <img
                      src="/dev/images/right bottom.svg"
                      alt=""
                      className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-1 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
     
    </form>
  </div>
  
  );
};

export default Section11;
