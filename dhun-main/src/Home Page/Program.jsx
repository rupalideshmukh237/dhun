import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { PiFlower } from "react-icons/pi";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Program = () => {
  const programref=useRef([])
  programref.current=[]


  const addToprogram = (el) => {
    if (el && !programref.current.includes(el)) {
     programref.current.push(el);
    }
  };
   useGSAP(()=> {
     gsap.fromTo(
      programref.current,
       { y: 100, opacity: 0 },
       {
        y: 0,
        opacity: 1,
        duration: 1.2,  
        ease: "power2.out",
        stagger: 0.25,
       scrollTrigger :{
       trigger:programref.current[0],
       start:"top 95%"
       }
      }

     )
   })
  return (
    <div  ref={addToprogram} className='relative bg-[#FEF9F4]'>
        <section className=" ml-17 min-h-screen flex  flex-col  text-start bg-[#fef9f4]  py-10">
             {/* Section Heading */}
             <h3 className="font-[regular] text-[18px] tracking-[0.6px] tracking-[2px] text-[#39393994]  mb-3 mt-26 uppercase">
              WELLNESS PROGRAMS
             </h3>
       
             {/* Divider line */}
             <div className="w-124 h-[1.4px] bg-[#3f323b2f] mb-6"></div>
       
             {/* Main Heading */}
             <h2 className="text-[45px]  font-[italic]  text-gray-900 mb-6">
              Restore, Revitalise, Re-tune.
             </h2>
       
             {/* Paragraph */}
             <p className="max-w-xl text-[18px] md:text-base text-gray-700 leading-relaxed mb-8">
               
               Designed for your unique needs, our 7-day programs combine Ayurvedic wisdom and modern therapies to help you rebalance and recharge.
             </p>
       
             {/* Button */}
            <button className=" w-[300px] flex items-center justify-center gap-2  border hover:cursor-pointer 
                        border-[#d4bfa6] px-7 py-3 rounded-full text-[14px] tracking-widest text-[#eae4df] bg-[#87241A]  ">
                         <span className="material-icons text-[#ece3dd] text-base r"><PiFlower /></span>
                          EXPLORE ALL SERVICES 
                         <span className="material-icons text-[#ece3dd] text-base r"><PiFlower /></span>
                        
                       </button>
             
             
           
           </section>  
           <img  className=' absolute top-28 left-[800px] h-[400px] w-[400px] rounded-t-[380px]' src="https://dhunwellness.com/cdn/shop/files/wp-2.jpg?v=1748241684&width=950" alt="" />
           
    </div>
  )
}

export default Program
