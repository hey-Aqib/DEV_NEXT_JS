import React from 'react'

const Section10 = () => {
  function FancyCard({ title, description, image, button }) {
    return (
      <div className="relative text-white rounded-2xl shadow-lg  w-full max-w-sm overflow-hidden h-full">
       <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-48 object-cover mb-4 z-10 relative"
        style={{
          clipPath: "polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0% calc(100% - 20px), 0% 20px)",
        }}
      />
        <span className="text-lg p-2 mt-10 text-white rounded bg-[#1b1b1b] font-bold z-10 relative">{title}</span>
        <p className="text-lg text-gray-300 mt-4 mb-4 z-10 relative">{description}</p>

        <div className="relative m-[6%] ml-[2%] me-0  inline-block  mx-[1%] group">
                    <button className="relative z-20 text-white px-8 py-4 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
                      <span className="relative z-20">{button}</span>

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
        
      </div>
    );
  }
  const cards = [
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description: "Develop targeted content strategies to attract and engage your audience",
      image: "https://plus.unsplash.com/premium_photo-1661678060948-b8d1d293889a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button: "LEARN MORE"
    },
    {
      title: "LOCAL SEARCH",
      description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button: "LEARN MORE"
    },
    {
      title: "SOCIAL MEDIA",
      description: "Elevate Your Brand with Strategic Social Media Management",
      image: "https://plus.unsplash.com/premium_photo-1683488869706-4152826ca919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNPQ0lBTCUyME1FRElBfGVufDB8fDB8fHww",
      button: "LEARN MORE"
    },
    {
      title: "GOOGLE ADS",
      description: "Maximize ROI with Precision Google Ads Campaigns",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button: "LEARN MORE"
    },
  ];
  return (
    <div className="relative w-full h-full bg-black text-white ">
      <h1 className="text-center pt-16  pb-0 text-1xl max-sm:text-2xl 2xl:text-5xl 2xl:p-15 2xl:pt-30 md:text-3xl  font-bold">
          Blogs
        </h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((card, index) => (
          <FancyCard key={index} {...card} />
        ))}
      </div>
      
    </div>
  )
}

export default Section10
