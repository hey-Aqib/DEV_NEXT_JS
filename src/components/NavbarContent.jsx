"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarContent = ({ ulRef }) => {

  const DURATION = 0.25;
  const STAGGER = 0.025;

  const FlipLink = ({ children, to }) => {
    return (
      <Link href={to}> 
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="relative block overflow-hidden whitespace-nowrap text-3xl font-semibold sm:text-1xl md:text-3xl lg:text-3xl"
          style={{
            lineHeight: 0.75,
          }}
        >
          <div>
            {children.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-110%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-0">
            {children.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Link>
    );
  };

  return (
    <ul ref={ulRef} className="z-12 uppercase space-y-2 mt-12 grid gap-2 text-black">
      <li className="opacity-0 transform scale-0.8">
      <FlipLink to="/services">Services</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/bpo">bpo</FlipLink> 
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/call center">call center</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/factors">the x factors</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/support">Technical support</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/onboarding">onboarding</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/pandas">meet the pandas</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/ai">ai in cx</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/chat_support">chat support</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/voice_support">voice support</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/email_support">email & tickting</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/lead_generation">lead generation</FlipLink>
      </li>
      <li className="opacity-0 transform scale-0.8">
        <FlipLink to="/benchmarks">benchmarks</FlipLink>
      </li>
    </ul>
  );
};

export default NavbarContent;
