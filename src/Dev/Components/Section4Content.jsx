import React from "react";

const Section4Content = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-center text-4xl md:text-4xl capitalize font-bold">
      <span className="w-1/2">
        THE RIGHT TEAM KNOWS HOW TO BLEND EXPERTISE WITH INNOVATION
      </span>
      <div className="relative mt-[8%]  inline-block cursor-pointer">
        <button className="bg-gradient-to-r from-[#505051]/60 to-[#181717]/60 text-white px-8 py-4 uppercase tracking-wider rounded-md max-sm:hidden relative z-10 text-sm">
          INDUSTRIES WE SURVIVE
        </button>

        <img
          src="/dev/images/left top.svg"
          alt=""
          className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-0"
        />
        <img
          src="/dev/images/right top.svg"
          alt=""
          className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-0"
        />
        <img
          src="/dev/images/left bottom.svg"
          alt=""
          className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-0"
        />
        <img
          src="/dev/images/right bottom.svg"
          alt=""
          className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-0"
        />
      </div>
      
    </div>
  );
};

export default Section4Content;
