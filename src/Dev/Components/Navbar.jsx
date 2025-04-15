"use client";
import React from "react";
const Navbar = () => {
  return (
    <div className="">
      <div className="bg-black w-full flex justify-between items-center px-5 py-4 sm:px-12 sm:py-8 md:px-12 md:py-8 lg:px-12 lg:py-8 xl:px-12 xl:py-8 2xl:px-12 2xl:py-8 text-white z-50">
        <img
          src="/images/660e8ed8eb1804501de1d733_Group 1.svg"
          alt="Logo"
          className="w-[40%] sm:w-[15%] md:w-[12%]"
        />
        <div className="flex items-center gap-30">
          <div className="relative inline-block">
            <button className="bg-[#5b0bfa] text-white px-8 py-4 uppercase tracking-wider rounded-md max-sm:hidden relative z-10">
              Book a Demo
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
          <div className="flex">
            <img src="/dev/images/left.svg" alt="" />
            <img src="/dev/images/right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
