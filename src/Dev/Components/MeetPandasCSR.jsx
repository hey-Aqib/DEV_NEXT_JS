import React from "react";

const MeetPandasCSR = () => {
  const CRS = [
    {
      title: "Planting Today for Tomorrow",
      dis: "We actively engage in tree planting to enrich our environment, support community economies, and honor our team's commitment to green practices.",
    },
    {
      title: "Eco-Conscious Waste Management",
      dis: "Dedicated to sustainability, we deploy zero-waste strategies, develop cutting-edge pollution controls, and conduct thorough audits to safeguard human rights.",
    },
    {
      title: "Water Filtration Excellence",
      dis: "We prioritize the environment with our advanced water recycling, energy-saving initiatives, and support for sustainable transportation methods.",
    },
    {
      title: "Eco-Smart Partnerships",
      dis: "We rigorously select suppliers who are committed to minimizing plastic use and ensuring compliance with environmental and ethical standards.",
    },
    {
      title: "Clean Energy Initiative",
      dis: "Dedicated to a greener future, we implement solar solutions, and efficient water management, and partner in global reforestation.",
    },
  ];
  return (
    <>
      <div className=" w-full h-full relative flex flex-col  items-center bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden py-20">
        <span className="size-200 absolute top-80 -right-90  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
        {/* <span className="size-200 absolute top-60 -right-90 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span> */}
        <div className="w-full h-full space-y-20">
          <h1 className="text-white text-center font-bold text-5xl">
            Sustainability & CSR
          </h1>
          <div className="w-full h-full">
            <div className="w-full flex flex-wrap justify-center gap-3">
              {CRS?.map((card, index) => (
                <div
                  key={index}
                  className="w-[30%] p-6 border border-white rounded-2xl space-y-4 transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 z-[1] hover:z-10"
                >
                  <h2 className="text-3xl text-white text-center font-bold">
                    {card.title}
                  </h2>
                  <p className="text-white font-medium text-xl text-center">{card.dis}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default MeetPandasCSR;
