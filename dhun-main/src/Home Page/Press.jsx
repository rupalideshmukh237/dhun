import React,{ useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Press = () => {

  const logos = [
    "https://dhunwellness.com/cdn/shop/files/vogue-india.png?v=1748519846&width=1920",
    "https://dhunwellness.com/cdn/shop/files/conde-nast-traveller.png?v=1756190901&width=1920",
    "https://dhunwellness.com/cdn/shop/files/the-nod.png?v=1748519847&width=1920",
    "https://dhunwellness.com/cdn/shop/files/cnbc-tv18.png?v=1756190980&width=1920",
    "https://dhunwellness.com/cdn/shop/files/travel-leisure.png?v=1748519846&width=1920",
    "https://dhunwellness.com/cdn/shop/files/hello.png?v=1756191051&width=1920",
    "https://dhunwellness.com/cdn/shop/files/ad_1.png?v=1748580957&width=1920",
    "https://dhunwellness.com/cdn/shop/files/the-hindu.png?v=1756191151&width=1920",
    "https://dhunwellness.com/cdn/shop/files/grazia.png?v=1756191190&width=1920",
    "https://dhunwellness.com/cdn/shop/files/vogue-arabia.png?v=1757497073&width=1920",
    "https://dhunwellness.com/cdn/shop/files/elle-decor.png?v=1756191337&width=1920",
    "https://dhunwellness.com/cdn/shop/files/et-retail.png?v=1756191391&width=1920",
    "https://dhunwellness.com/cdn/shop/files/mint.png?v=1756191464&width=1920",
    "https://dhunwellness.com/cdn/shop/files/esquire.png?v=1748519847&width=1920",
    "https://dhunwellness.com/cdn/shop/files/lifestyle-asia.png?v=1748580957&width=1920"
  ];
  const pressref = useRef([]);
  pressref.current = [];

  const addTopress = (el) => {
    if (el && !pressref.current.includes(el)) {
      pressref.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      pressref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: pressref.current[0],
          start: "top 100%",
        }
      }
    );
  }, []);


  return (
    <div ref={addTopress} className="relative">

      <section className="flex flex-col items-center justify-center bg-[#fef9f4] text-center px-6 py-20">

        <h3 className="font-[regular] text-[18px] tracking-[2px] text-[#39393994] uppercase">
          PRESS
        </h3>

        <div className="w-124 h-[1.4px] bg-[#3f323b2f] mb-6"></div>

        <h2 className="text-[45px] font-[italic] text-gray-900">
          Revolutionary Initiative
        </h2>

        <p className="max-w-3xl text-[18px] text-gray-700 leading-relaxed">
          With wellness at its core, Dhun is setting a new benchmark in the industry.
          We are creating a space where luxury meets healing, and science meets spirituality.
        </p>

      </section>

      {/* LOGO GRID */}
      <div className="grid grid-cols-5 gap-10 justify-center px-1 ">
        {logos.map((src, i) => (
          <div key={i} className="h-[120px] w-[220px] flex items-center justify-center hover:cursor-pointer">
            <img src={src} alt="press" className=" h-[150px] w-[140px] object-contain " />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Press;
