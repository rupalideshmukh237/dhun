import React, { useRef } from 'react'
import Concept from './Concept'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Wellness = () => {
  const wellref=useRef()
   const h3ref = useRef()
  const lineref = useRef()
  const h2ref = useRef()
  const pref = useRef()

  // HERO TEXT FADE IN
  useEffect(() => {
    gsap.fromTo(
      wellref.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power3.out" }
    )
  }, [])

  // CONCEPT SECTION ANIMATION
  useEffect(() => {
    gsap.fromTo(
      [h3ref.current, lineref.current, h2ref.current, pref.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1.5, ease: "power3.out", scrollTrigger: {
          trigger: h3ref.current, // animation starts when h3 is visible
          start: "top 85%",
        }, }
    )
  }, [])
  
  return (
  <div className=' bg-[#F7F3EC]'>
     <div className="relative w-full overflow-hidden">
   
  <img
    src="https://dhunwellness.com/cdn/shop/files/DN-Wide_Pattern-2x.jpg?v=1745580879&width=1920"
    className=" h-[401px] w-full block"
  /> 
  
  {/* EXACT DHUN-STYLE CURVE */}
  <svg
    className="absolute bottom-[-1px] left-0 w-full"
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
  >
    <path
      d="M0,120 C480,260 960,0 1440,120 L1440,220 L0,220 Z"
      fill="#F7F3EC"  // Your background color
    />
  </svg>
 
</div>
<h1  ref={wellref} className='absolute text-white top-44 left-108 font-[medium] text-[42px] leading-[42px] tracking-[5px] font-light uppercase'><span></span>Wellness Programs</h1>
 <div   className="bg-[#F7F3EC]">
              
                 <section className="mt-[2%] flex flex-col items-center justify-center  text-center bg-[#F7F3EC] ">
            {/* Section Heading */}
            <h3 ref={h3ref}  className="font-[regular] text-[20px] tracking-[0.6px] tracking-[2px] text-[#424140]   uppercase">
            THE CONCEPT
            </h3>
      
            {/* Divider line */}
            <div ref={lineref}  className="w-245 h-[1.4px] bg-[#eac688] mt-3 mb-6"></div>
      
            {/* Main Heading */}
            <h2 ref={h2ref}  className="text-[45px]  font-[italic]  text-gray-900 mb-6">
              A wellness reset in the heart of the city
            </h2>
      
            {/* Paragraph */}
            <p ref={pref}  className="max-w-3xl font-[medium] text-[18px] md:text-base text-gray-700 leading-relaxed mb-8">
             At Dhun, wellness is not just a destination - it's a deeply immersive journey tailored to restore balance, vitality, and inner harmony. As India’s first in-city wellness center, our signature 7-day wellness programs blend time-honored Ayurvedic wisdom with modern therapeutic practices to support healing at every level of your being.<br></br><br></br><br></br>
Tailored for the demands of urban life, Dhun’s signature 7-day wellness programs target the root causes of common concerns such as gut imbalances, fatigue, hormonal shifts, weight gain, and disrupted sleep. We see symptoms as signals, not problems, and use root-cause analysis to create personalized treatment plans that restore balance and vitality. With expert therapies, customized take-home care, and a calming environment, Dhun provides a lasting, holistic approach to true well-being - right in the heart of the city.
            </p>
      
            {/* Button */}
           
           
        
          </section>  
          <Concept/>
      </div>
  </div>


  )
}

export default Wellness
