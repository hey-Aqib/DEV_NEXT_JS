'use client'
import { useState, useEffect, useRef } from 'react';

const ScrollSpySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, 4);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
  
      const sections = contentRefs.current;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
  
      let closestIndex = 0;
      let minDistance = Infinity;
  
      sections.forEach((section, index) => {
        if (!section) return;
  
        const rect = section.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(sectionMiddle - viewportHeight / 2);
  
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
  
      setActiveIndex(closestIndex);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleNavClick = (index) => {
    isScrollingRef.current = true;
    setActiveIndex(index);
    
    contentRefs.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <section className="w-full h-full">
      <div className="w-full h-full flex max-sm:flex-col gap-2 px-10 py-8">
        {/* Left Navigation */}
        <div className="w-[20%] max-sm:w-full">
          <div className="sticky top-2 space-y-2">
            {[0, 1, 2, 3].map((index) => (
              <div 
                key={index}
                onClick={() => handleNavClick(index)}
                className={`w-full rounded-2xl p-7 flex flex-col gap-4 border border-white/30 transition-colors cursor-pointer ${
                  activeIndex === index 
                    ? 'bg-[#510ADD]' 
                    : 'bg-transparent hover:bg-white/10'
                }`}
              >
                <h1 className="text-white font-lg">0{index + 1}</h1>
                <h3 className="text-white font-medium text-xl">
                  {index === 0 ? 'Challenge' : 
                   index === 1 ? 'Solution' : 
                   index === 2 ? 'Approach' : 'Impact'}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div 
          ref={containerRef}
          className="w-[80%] max-sm:w-full space-y-2 h-full overflow-y-auto"
        >
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              ref={(el) => (contentRefs.current[index] = el)}
              className="w-full p-12 bg-[#510ADD] space-y-2 rounded-2xl scroll-mt-4"
            >
              <div className="w-full flex justify-between items-center py-4 border-b border-white">
                <h1 className="text-white text-3xl">
                  {index === 0 ? 'Challenge' : 
                   index === 1 ? 'Solution' : 
                   index === 2 ? 'Approach' : 'Impact'}
                </h1>
                <h3 className="text-white text-3xl">0{index + 1}</h3>
              </div>
              <div className="w-full flex justify-between items-center py-4">
                <p className="text-white font-medium text-lg">
                  The client, a leading provider of cloud-based solutions for government agencies, experienced a rise in complex technical support tickets that their internal team struggled to resolve within agreed-upon Service Level Agreements (SLAs). This led to frustrated customers and declining Customer Satisfaction Scores (CSAT). The client has a history of maintaining exceptional SLA and impeccable CSAT. They needed to partner with a BPO that could match their standards.
                </p>
              </div>
              <div className="w-full">
                <video
                  src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3b5eee61f4c0be515133e_1-9-1_1-transcode.mp4"
                  className="object-cover object-center rounded w-full h-full"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollSpySection;