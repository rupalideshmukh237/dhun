import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { PiFlower } from "react-icons/pi";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
   const menuref=useRef([])
    menuref.current=[]
     const addTomenu = (el) => {
    if (el && !menuref.current.includes(el)) {
      menuref.current.push(el);
    }
  };
  useGSAP(()=>{
    gsap.fromTo(
      menuref.current,
       { y: 80, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.25,
        scrub:1,
        scrollTrigger: {
          trigger: menuref.current[0],
          start: "top 85%",
        }
}
    )
  },[])
   return (
   
    <div>
      
       <div  ref={addTomenu} className="">
              
                 <section className="mt-[15%] flex flex-col items-center justify-center bg-[#fef9f4] text-center ">
            {/* Section Heading */}
            <h3   ref={addTomenu} className="font-[regular] text-[18px] tracking-[0.6px] tracking-[2px] text-[#39393994]   uppercase">
             OUR SERVICES
            </h3>
      
            {/* Divider line */}
            <div  ref={addTomenu} className="w-124 h-[1.4px] bg-[#3f323b2f] mb-6"></div>
      
            {/* Main Heading */}
            <h2  ref={addTomenu} className="text-[45px]  font-[italic]  text-gray-900 mb-6">
              The Menu
            </h2>
      
            {/* Paragraph */}
            <p  ref={addTomenu}  className="max-w-3xl text-[18px] md:text-base text-gray-700 leading-relaxed mb-8">
              Our philosophy is centred on root cause analysis, addressing the underlying factors of health issues rather than merely treating symptoms. By promoting true recovery and long term healing, we help restore balance at every level. Our personalised approach honours the mind-body connection and thoughtfully integrates various modalities to support complete wellbeing.
            </p>
      
            {/* Button */}
            <button  ref={addTomenu} className="flex items-center justify-center gap-2  border hover:cursor-pointer 
             border-[#d4bfa6] px-7 py-3 rounded-full text-[14px] tracking-widest text-[#eae4df] bg-[#87241A] hover:scale-[1.1] transition-[1s]">
             <span className="material-icons text-[#ece3dd] text-base r"><PiFlower /></span>
                <Link to="/Treatment">EXPLORE ALL SERVICES</Link> 
              <span className="material-icons text-[#ece3dd] text-base r"><PiFlower /></span>
             
            </button>
           
        
          </section>  
          
      </div>
    </div>
  )
}

export default Menu
