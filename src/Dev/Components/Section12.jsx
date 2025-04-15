"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section12() {
  const pandaRef = useRef(null);
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const logoRef = useRef(null);
  const Container_Start = useRef("top top")
  const panda_start = useRef("35% center")
  const time = useRef(5)

  useLayoutEffect(() => {

    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    gsap.set(svgRef.current, { autoAlpha: 0 });
    gsap.set(pandaRef.current, { autoAlpha: 0 });
    gsap.set(logoRef.current, { x: "-100%", autoAlpha: 1 });

    if(window.innerWidth < 768) {
      Container_Start.current = "50% center"
      panda_start.current = "50% center"
      time.current = 3
    }

    const logoTween = gsap.to(logoRef.current, {
      x: "100%",
      duration: time.current,
      ease: "power2.out",
    });

    // forward and reverse animation of logo
    ScrollTrigger.create({
      trigger: document.body, 
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.direction === -1) {
          logoTween.reverse();
        } else {
          logoTween.play();
        }
      },
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: Container_Start.current,   
      end: "20% center",
      scrub: true,
      onUpdate: (self) => {
        if (self.progress >= 1) {
          gsap.to(logoRef.current, { autoAlpha: 0 });
          gsap.to(svgRef.current, { autoAlpha: 1 });
        } else {
          gsap.to(logoRef.current, { autoAlpha: 1 });
          gsap.to(svgRef.current, { autoAlpha: 0 });
        }
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: panda_start.current,
        end: "bottom center",
        scrub: 1,
        onEnter: () => gsap.to(pandaRef.current, { autoAlpha: 1 }),
        onLeaveBack: () => gsap.to(pandaRef.current, { autoAlpha: 0 }),
      },
    });

    tl.to(
      pandaRef.current,
      {
        duration: 3,
        motionPath: {
          path: "#motionPath",
          align: "#motionPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0.3,
          end: 0.1,
        },
        ease: "power2.inOut",
      },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="bg-black">
      <div
        ref={containerRef}
        className="relative w-full h-[60vh] sm:h-[120vh] md:h-[150vh] overflow-hidden"
      >
        <img
          ref={logoRef}
          src="/dev/images/logo.svg"
          alt="Logo"
          className="absolute w-full top-1/4 -translate-y-1/2 h-40 z-20"
          style={{ transform: "translateX(-100%)", opacity: 1 }}
        />

        <svg
          ref={svgRef}
          width="1920"
          height="558"
          viewBox="0 0 1920 558"
          className="absolute w-full h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ zIndex: 1, opacity: 0 }}
        >
          <path
            id="motionPath"
            d="M1606.66 282.675C1566.7 409.585 1545.68 421.11 1532 421.11C1499.42 421.11 1535.17 327.737 1569.83 205.031C1607.66 70.7555 1549.85 1.55983 1432.09 1.55983C1314.34 1.55983 1253.36 70.7988 1184.99 213.436C1106.29 378.605 1047.43 404.039 980.501 405.339C913.481 404.039 853.628 378.648 773.881 213.436C707.643 77.0815 645.618 1.55983 494.203 1.55983C342.789 1.55983 275.508 77.0815 210.312 213.436C129.349 383.371 69.4091 419.594 0 419.594V555.949C146.159 555.949 256.57 487.186 355.385 275.31C406.899 165.168 432.135 137.915 494.16 137.915C556.185 137.915 577.207 165.168 628.765 275.31C724.973 481.554 834.169 538.704 974.681 541.607V541.737C976.636 541.737 978.547 541.737 980.458 541.737C982.369 541.737 984.323 541.737 986.235 541.737V541.607C1126.88 538.704 1238.07 481.554 1334.28 275.31C1390.01 155.723 1403.69 139.995 1421.54 139.995C1441.52 139.995 1429.97 175.654 1406.82 248.013C1346.88 434.715 1346.88 557.422 1522.48 557.422C1632.89 557.422 1704.39 494.509 1755.9 344.505C1827.4 134.708 1850.59 136.355 1920 136.355V0C1773.84 0 1690.71 17.2447 1606.57 282.632L1606.66 282.675Z"
            fill="#E8E0CD"
            stroke="gray"
            strokeWidth="2"
          />
        </svg>

        <img
          ref={pandaRef}
          src="/images/panda.avif"
          alt="Panda"
          className="absolute w-[14%] h-[12%] max-sm:w-[14%] max-sm:h-[15%] max-sm:top-3 md:w-[12%] md:h-[18%] lg:w-[12%] lg:h-[18%] xl:w-[12%] xl:h-[18%]"
          style={{ zIndex: 10, opacity: 0 }}
        />

        <p className="absolute text-center text-white bottom-[5%] xl:bottom-[12%] md:bottom-[17%] lg:bottom-[13%] 2xl:bottom-[10%] right-[30%] text-xl max-sm:text-sm 2xl:text-4xl md:text-1xl lg:text-2xl font-medium w-[43%] xl:w-[43%] lg:w-[48%] 2xl:[50%]">
          We Had to put the panda somewhere, so what if it's not in our logo,
          we still love them.
        </p>
      </div>
    </div>
  );
}
