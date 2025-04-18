"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarContent = ({ ulRef }) => {
  const [openSections, setOpenSections] = useState({
    seo: true,
    marketing: false,
    development: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => {
      const newState = {};

      for (const key in prev) {
        newState[key] = key === section ? !prev[key] : false;
      }

      return newState;
    });
  };

  const DURATION = 0.25;
  const STAGGER = 0.025;

  const FlipLink = ({ children, to }) => {
    return (
      <Link href={to}>
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="relative block overflow-hidden whitespace-nowrap text-1xl font-semibold max-sm:text-xs lg:text-2xl text-[#929292] hover:text-black"
          style={{
            lineHeight: 0.75,
            fontSize: "18px",
          }}
        >
          <div>
            {children.split("").map((l, i) =>
              l === " " ? (
                <span key={i} className="inline-block">
                  &nbsp;
                </span>
              ) : (
                <motion.span
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: "-110%" },
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
              )
            )}
          </div>
          <div className="absolute inset-0">
  {children.split("").map((l, i) =>
    l === " " ? (
      <span key={i} className="inline-block">
        &nbsp;
      </span>
    ) : (
      <motion.span
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
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
    )
  )}
</div>

        </motion.div>
      </Link>
    );
  };

  return (
    <ul ref={ulRef} className="z-50 uppercase space-y-2 mt-12 grid gap-2">
      <li>
        <button
          onClick={() => toggleSection("seo")}
          className="hover:no-underline text-left w-full flex justify-between items-center text-2xl font-semibold text-black"
        >
          SEO & Lead Generation
          <span>{openSections.seo ? "−" : "+"}</span>
        </button>
        {openSections.seo && (
          <ul className="flex flex-col gap-2 pl-4 max-sm:pl-0 mt-2 text-wrap">
            <li>
              <FlipLink to="/search-engine-optimization">
                Search Engine Optimization
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/Local-Search-Optimization">
                Local Search Optimization
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/Landing-Page-Optimization">
                Landing Page Optimization
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/Enterprise-Level-Reachn">
                Enterprise Level Reach
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/SEO-for-Leads">SEO for Leads</FlipLink>
            </li>
            <li>
              <FlipLink to="/SEO-for-Amazon">SEO for Amazon [wroking]</FlipLink>
            </li>
          </ul>
        )}
      </li>

      <li>
        <button
          onClick={() => toggleSection("marketing")}
          className="hover:no-underline text-left w-full flex justify-between items-center text-2xl font-semibold text-black"
        >
          Paid Marketing Media & CRO
          <span>{openSections.marketing ? "−" : "+"}</span>
        </button>
        {openSections.marketing && (
          <ul className="flex flex-col gap-2 pl-4 mt-2  max-sm:pl-0">
            <li>
              <FlipLink to="/PPC-Ads">PPC & Ads</FlipLink>
            </li>
            <li>
              <FlipLink to="/Social-Media-Campaigning">
                Social Media Campaigning
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/Email-Marketing">Email Marketing</FlipLink>
            </li>
            <li>
              <FlipLink to="/Amazon-Marketplace">Amazon Marketplace</FlipLink>
            </li>
          </ul>
        )}
      </li>

      <li>
        <button
          onClick={() => toggleSection("development")}
          className="hover:no-underline text-left w-full flex justify-between items-center text-2xl font-semibold text-black"
        >
          IT & Development Technology
          <span>{openSections.development ? "−" : "+"}</span>
        </button>
        {openSections.development && (
          <ul className="flex flex-col gap-2 pl-4 mt-2  max-sm:pl-0">
            <li>
              <FlipLink to="/Wordpress-Development">
                Wordpress Website Development
              </FlipLink>
            </li>
            <li>
              <FlipLink to="/E-Commerce-Solution">E-Commerce Solution</FlipLink>
            </li>
            <li>
              <FlipLink to="/Logo-Development">Logo Development</FlipLink>
            </li>
            <li>
              <FlipLink to="/Interactive-UI-UX">Interactive UI/UX</FlipLink>
            </li>
            <li>
              <FlipLink to="/Video-Production">Video Production</FlipLink>
            </li>
            <li>
              <FlipLink to="/App-Development">App Development</FlipLink>
            </li>
            <li>
              <FlipLink to="/CRM-Generation">CRM Generation</FlipLink>
            </li>
            <li>
              <FlipLink to="/CMS-Solution">CMS Solution</FlipLink>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default NavbarContent;
