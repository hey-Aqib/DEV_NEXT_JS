"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
const Footer = () => {
  const cursorRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Kill previous animations and ScrollTriggers
    gsap.killTweensOf("#LeftHand");
    gsap.killTweensOf("#RightHand");
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const footertl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "top+=200 center",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    footertl
      .fromTo(
        ["#LeftHand", "#RightHand"],
        {
          x: (i) => (i === 0 ? "-100%" : "100%"),
          opacity: 1,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }
      )
      .to(["#LeftHand", "#RightHand"], {
        x: "0%",
        opacity: 1,
        duration: 1,
      })
      .to(["#LeftHand", "#RightHand"], {
        x: (i) => (i === 0 ? "-100%" : "100%"),
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
  }, { dependencies: [pathname] });

  //     Footer Hand Animation   ----------------
  //     [Left Hand] starts off-screen left → slides in → pauses → slides back out left
  //     [Right Hand] starts off-screen right → slides in → pauses → slides back out right
  return (
    <div
      id="footer"
      className="footer relative w-full h-full bg-black pt-20 max-sm:pt-10 overflow-hidden"
    >
      <div className="w-full flex items-center pl-30">
        <div className="w-full py-5">
          <h2 className="text-white text-5xl font-semibold">Let's</h2>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/dev/images/logofooter.svg"
          alt="Chat Panda Logo"
          className="w-[80%] max-sm:mx-10 mx-30 m-auto object-cover"
        />
      </div>
      <div className="w-full flex max-sm:flex-col justify-center items-center md:text-2xl gap-15 text-white py-12">
        <div>
          <p>Industries</p>
        </div>
        <div>
          <p>Locations</p>
        </div>
        <div>
          <p>Facebook</p>
        </div>
        <div>
          <p>Instagram</p>
        </div>
        <div>
          <p>Linkedin</p>
        </div>
      </div>
      <footer className=" w-full flex max-sm:flex-col  justify-between items-center px-10  pt-4 pb-15 max-sm:visible">
        <div className="text-white">
          <p>© 2025 Chat Pandas</p>
        </div>
        <div className="flex gap-1">
          <p className="text-white/50">Powered by:</p>
          <p className="text-white">bizzinteractive designade</p>
        </div>
        <div className="flex max-sm:flex-col gap-1  max-sm:text-center text-white">
          <p className="w-full">We also develop software:</p>
          <p className="font-semibold">www.devpandas.co</p>
        </div>
      </footer>
      <div className="w-full max-sm:h-[100px] ">
        <video
          src="/dev/videos/footer.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* <video
        src="/videos/footer.mp4"
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      /> */}
      </div>

      <img
        id="LeftHand"
        src="/dev/images/Handleft.avif"
        alt=""
        className="absolute max-sm:top-[50%] top-[30%] -left-[05%] w-[60%] z-50"
      />
      <img
        id="RightHand"
        src="/dev/images/Handright.avif"
        alt=""
        className="absolute max-sm:top-[51%] top-[35%] left-[55%] w-[55%] max-sm:w-[50%] z-50"
      />
      <div
        ref={cursorRef}
        className="absolute top-8 -left-15 w-6 h-6 pointer-events-none z-50 cursor-pointer"
      >
        <div className="relative w-32 h-28">
          <img className="absolute inset-1 z-10" src="/dev/images/circle_star.svg" alt="" />
          
          <div className="relative text-center z-20 flex items-center justify-center w-[50%] h-full text-white font-bold p-18 leading-3.5" >
            CONNECT NOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
