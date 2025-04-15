"use client";
import React from "react";
import { useState } from "react";

const buttons = [
  {
    label: "Programming Languages",
    images: [
      { src: "/dev/images/python.avif", title: "Python" },
      { src: "/dev/images/Java.avif", title: "Java" },
      { src: "/dev/images/JavaScript.avif", title: "JavaScript" },
      { src: "/dev/images/C.avif", title: "C#" },
      { src: "/dev/images/Swift.avif", title: "Swift" },
      { src: "/dev/images/Kotlin.webp", title: "Kotlin" },
    ],
  },
  {
    label: "Frameworks",
    images: [
      { src: "/dev/images/React.avif", title: "React" },
      { src: "/dev/images/Angular.avif", title: "Angular" },
      { src: "/dev/images/Django.avif", title: "Django" },
      { src: "/dev/images/Spring.avif", title: "Spring" },
      { src: "/dev/images/Net.avif", title: ".Net" },
    ],
  },
  {
    label: "Clouds Platforms",
    images: [
    ],
  },
  {
    label: "AI & Machine Learning",
    images: [
    ],
  },
];

function FancyButton({ text, isSelected, onClick, disabled }) {
  return (
    <div
      onClick={disabled ? null : onClick}
      className={`relative mt-[3%] inline-block mx-[1%] group cursor-pointer ${disabled ? 'cursor-not-allowed' : ''}`}
    >
      <div className="">
        <button
          className={`relative z-20 text-white px-8 py-4 uppercase tracking-wider rounded-md  text-sm overflow-hidden cursor-pointer 
            ${isSelected ? 'bg-blue-600' : ''}
            ${disabled ? 'bg-gray-400 cursor-not-allowed' : ''}
          `}
          disabled={disabled} 
        >
          <span className="relative z-20">{text}</span>
          {!isSelected && (
            <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
          )}
        </button>

        <img
          src="/dev/images/left top.svg"
          alt=""
          className={`absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-20 transition-transform duration-300 ${disabled ? '' : 'group-hover:translate-x-1 group-hover:translate-y-1'}`}
        />
        <img
          src="/dev/images/right top.svg"
          alt=""
          className={`absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-20 transition-transform duration-300 ${disabled ? '' : 'group-hover:-translate-x-1 group-hover:translate-y-1'}`}
        />
        <img
          src="/dev/images/left bottom.svg"
          alt=""
          className={`absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-20 transition-transform duration-300 ${disabled ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`}
        />
        <img
          src="/dev/images/right bottom.svg"
          alt=""
          className={`absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-20 transition-transform duration-300 ${disabled ? '' : 'group-hover:-translate-x-1 group-hover:-translate-y-1'}`}
        />
      </div>
    </div>
  );
}


const Section7 = () => {
  const [selected, setSelected] = useState(0);
  const disabledButtons = [2, 3];
  return (
    <div className="relative w-full h-auto bg-black text-white p-10">
      <div className="text-3xl max-sm:text-center sm:text-3xl md:text-4xl">
        <h1 className="w-[70%] mx-10 max-sm:text-center max-sm:m-auto max-sm:p-0 2xl:text-5xl p-8 pl-0 pb-0 mt-5 font-bold">
          Technologies We Use
        </h1>
        <p className="w-[92%] max-sm:text-center max-sm:mx-0 max-sm:w-[100%] max-sm:text-sm 2xl:w-[50%] px-2 mx-10 text-xl mt-5">
          Dev Pandas integrates a mix of technologies to deliver top-tier
          solutions for our clients. Our technology toolkit features
        </p>
      </div>
      <div className="">
        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-evenly gap-4">
          {buttons.map((btn, i) => (
    
      <FancyButton
        key={i}
        text={btn.label}
        isSelected={selected === i}
        onClick={() => setSelected(i)}
        disabled={disabledButtons.includes(i)} 
      />
  ))}
          </div>

          <div className="mt-10 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {buttons[selected].images.map((img, i) => (
                <div key={i} className="text-center mb-5">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-32 object-contain p-2 shadow-sm"
                  />
                  <p className="mt-2 text-white text-sm uppercase font-semibold tracking-wide">
                    {img.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
