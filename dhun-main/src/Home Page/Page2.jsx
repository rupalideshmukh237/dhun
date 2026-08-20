import React, { useRef } from 'react';
import { LuAudioLines } from "react-icons/lu";
import Menu from "./Menu";
import Swiper from './Swiper';
import Program from './Program';
import Press from './Press';
import Videocard from './Videocard';
import Footer from './Footer';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

  // ✅ store multiple refs
  const pageref = useRef([]);
   const audioRef = useRef(null);
   const [isPlaying, setIsPlaying] = useState(false);
const handleToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // reset to start
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };




  pageref.current = [];

  const addToRefs = (el) => {
    if (el && !pageref.current.includes(el)) {
      pageref.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      pageref.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: pageref.current[0],
          start: "top 85%",
        }
      }
    );
  }, []);

  const img = [
    "https://dhunwellness.com/cdn/shop/files/DHUN0660.jpg?v=1748246470",
    "https://dhunwellness.com/cdn/shop/files/DHUN0742.jpg?v=1748246470",
    "https://dhunwellness.com/cdn/shop/files/DHUN0858.jpg?v=1748246470",
    "https://dhunwellness.com/cdn/shop/files/stress_management_program_at_Dhun.jpg?v=1751286665"
  ];

  const shapes = [
    "M208 53.6C236.3 93.4..."
  ];

  return (
    <div className="h-screen relative">

      <div className="h-[30%] w-full mt-[20%]">
        <img
          className='ml-7 w-[95%] h-[130%] object-cover rounded-2xl'
          src="https://dhunwellness.com/cdn/shop/files/DxV-Box.png?v=1762520303&width=1920"
        />
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center bg-[#fef9f4] text-center px-6 py-20">

        {/* Heading */}
        <h3 ref={addToRefs} className="text-[18px] text-[#39393994] uppercase">
          About Us
        </h3>

        <div ref={addToRefs} className="w-124 h-[1.4px] bg-[#3f323b2f] mb-6"></div>

        {/* Title */}
        <h2 ref={addToRefs} className="text-[45px] text-gray-900 font-[italic] mb-6">
          Pioneering in-city wellness
        </h2>

        {/* Paragraph */}
        <p ref={addToRefs} className="max-w-3xl text-[18px] text-gray-700 leading-relaxed mb-8">
          <span className="text-[#a34b36]">Dhun is where traditional wisdom meets modern convenience —</span>
          Unlike fleeting getaway retreats, Dhun brings balance...
        </p>

        {/* Button */}
        <button  onClick={handleToggle}
          ref={addToRefs}
          className="flex items-center gap-2 border border-[#d4bfa6] px-7 py-3 rounded-full text-[#a87a57] hover:bg-[#f5ede5]"
        >
          <LuAudioLines /> TAP TO TUNE IN
           <audio ref={audioRef} src="/src/assets/dhun.mp3" />
        </button>

        {/* Images */}
        <div  ref={addToRefs} className="flex flex-wrap justify-center overflow-hidden gap-10 py-16 bg-[#fefaf6]">
          {img.map((e, i) => (
            <div key={i} className="w-[280px] h-[280px] overflow-hidden"
              style={{
                clipPath: `path('${shapes[0]}')`,
                animation: "half-rotate 6s ease-in-out infinite"
              }}>
              <img src={e} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <Menu />

      </section>

      <Swiper />
      <Program />
      <Press />
      <Videocard />
      <Footer />
    </div>
  );
};

export default Page2;
