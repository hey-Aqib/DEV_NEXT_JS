"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  const menuBtnRef = useRef(null);
  const ulRef = useRef(null);

  const responsiveWidth = useRef("15%");
  const responsiveHeight = useRef("46%");
  const responsiveScale = useRef(2);

  const openMenu = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const winwidth = window.innerWidth;

    if (winwidth < 640) {
      responsiveWidth.current = "95%";
      responsiveHeight.current = "92%";
      responsiveScale.current = 1;
    } else if (winwidth < 768) {
      responsiveWidth.current = "70%";
      responsiveHeight.current = "70%";
      responsiveScale.current = 1;
    } else if (winwidth < 1024) {
      responsiveWidth.current = "50%";
      responsiveHeight.current = "50%";
      responsiveScale.current = 1;
    } else {
      responsiveWidth.current = "15%";
      responsiveHeight.current = "46%";
      responsiveScale.current = 2;
    }

    const tl = gsap.timeline();

    tl.from("h3", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
    });
  }, []);

  const closeMenu = () => {
    if (ulRef.current) {
      gsap.to(ulRef.current.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power3.in",
      });
    }

    gsap.to(".close", {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.in",
    });

    gsap.to(circleRef.current, {
      scale: 0,
      borderRadius: "50%",
      width: responsiveWidth.current,
      height: responsiveHeight.current,
      opacity: 0,
      duration: 0.6,
      zIndex: 100,
      ease: "power2.inOut",
      onComplete: () => setIsVisible(false),
    });
  };

  useLayoutEffect(() => {
    if (isVisible) {
      gsap.set([circleRef.current, ulRef.current?.children, ".close"], {
        opacity: 0,
        scale: 0.8,
        zIndex: 50,
      });

      gsap.to(circleRef.current, {
        scale: responsiveScale.current,
        borderRadius: "10px",
        width: responsiveWidth.current,
        height: responsiveHeight.current,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      if (ulRef.current) {
        gsap.to(ulRef.current.children, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          zIndex: 100,
          ease: "power2.out",
        });
      }

      gsap.to(".close", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out",
        delay: 0.3,
      });
    }
  }, [isVisible]);

  return (
    <div>
      <div className="relative -mb-15 bg-black w-full flex justify-between items-center px-5 py-4 sm:px-12 sm:py-8 md:px-12 md:py-8 lg:px-12 lg:py-8 xl:px-12 xl:py-8 2xl:px-12 2xl:py-8 text-white z-100">
      <div className="flex items-center">
  <Link href={`/`} className=" w-70 max-sm:w-50 h-5">
    <img
      src="/dev/images/logo.svg"
      alt="Logo"
      className="w-full"
    />
  </Link>
</div>

        <div className="flex items-center gap-10">
          <Link href="/contact">
          <div className="relative inline-block group max-sm:hidden">
            <button className="relative z-20 text-white px-8 py-4 max-sm:px-6 max-sm:py-3 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
              <span className="relative z-20 -10">Book a Demo</span>

              <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
            </button>
            <img
              src="/dev/images/left top.svg"
              alt=""
              className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-21 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
            <img
              src="/dev/images/right top.svg"
              alt=""
              className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-21 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
            />
            <img
              src="/dev/images/left bottom.svg"
              alt=""
              className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-21 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
            <img
              src="/dev/images/right bottom.svg"
              alt=""
              className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-21 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </div>
          </Link>

          <button
            ref={menuBtnRef}
            className="px-4 py-4 bg-[#E8E0CD] text-md font-bold text-black border-none ouline-none rounded-full cursor-pointer relative z-30"
            onClick={openMenu}
          >
            <Menu className="text-black" size={25} />
          </button>

          <div
            ref={circleRef}
            className="fixed top-[2%] right-[2%] max-sm:top-[0.5%] bg-[#E8E0CD] z-1000 transform scale-0 origin-top-right opacity-0"
          ></div>

          {isVisible && (
            <div className="fixed top-0 right-0 w-full h-full flex justify-end items-start z-200 p-10 text-white pointer-events-auto">
              <div className="relative w-[100%] sm:w-[28%] md:w-[30%] 2xl:w-[28%] z-100">
                <button
                  className="ml-[86.7%] -mt-[8.5%] max-sm:-mt-[8%] max-sm:-mr-[6%] md:-mt-4 md:mr-2 lg:-mt-2 lg:mr-2 xl:-mt-2 xl:mr-2 2xl:-mt-2 2xl:mr-2 float-end px-4 py-4 text-md font-bold text-white bg-[#111111] border-none cursor-pointer outline-none rounded-full close"
                  onClick={closeMenu}
                >
                  <X size={25} />
                </button>
                <NavbarContent ulRef={ulRef} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
