import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Team from './Team';

gsap.registerPlugin(ScrollTrigger);

const Treatment = () => {
  const treatref = useRef()
  const h3ref = useRef()
  const lineref = useRef()
  const h2ref = useRef()
  const pref = useRef()

  // Fade-in for title
  useEffect(() => {
    gsap.fromTo(
      treatref.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power3.out" }
    )
  }, [])

  // Scroll animations
  useEffect(() => {
    gsap.fromTo(
      [h3ref.current, lineref.current, h2ref.current, pref.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h3ref.current,
          start: "top 85%",
        }
      }
    )
  }, [])

  return (
    <div className=''>
      <div className="relative w-full overflow-hidden bg-[#FEF9F4]">

        {/* TOP IMAGE */}
        <img
          src="https://dhunwellness.com/cdn/shop/files/DN-Wide_Pattern-2x.jpg?v=1745580879&width=1920"
          className="h-[401px] w-full block"
        />

        {/* DHUN STYLE CURVE (FIXED SVG) */}
        <svg
          className="absolute bottom-[-1px] left-0 w-full z-10"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C480,260 960,0 1440,120 L1440,220 L0,220 Z"
            fill="#F7F3EC"
          />
        </svg>

        {/* TITLE */}
        <h1
          ref={treatref}
          className="absolute text-white top-44 left-125 font-[medium] text-[42px] leading-[42px] tracking-[5px] font-light uppercase"
        >
          ABOUT US
        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="bg-[#F7F3EC]">

        <section className="mt-[2%] flex flex-col items-center justify-center text-center bg-[#F7F3EC]">

          {/* Section Heading */}
          <h3
            ref={h3ref}
            className="font-[regular] text-[20px] tracking-[2px] text-[#424140] uppercase"
          >
         OUR STORY
          </h3>

          {/* Divider Line */}
          <div
            ref={lineref}
            className="w-245 h-[1.4px] bg-[#eac688] mt-3 mb-6"
          ></div>

          {/* Main Heading */}
          <h2
            ref={h2ref}
            className="text-[45px] font-[italic] text-gray-900 mb-6"
          >
           A sanctuary of sound, soul, renewal.
          </h2>

          {/* Paragraph */}
          <p
            ref={pref}
            className="max-w-3xl font-[medium] text-[18px] md:text-base text-gray-700 leading-relaxed mb-8"
          >
           At Dhun, we believe wellness is like music-a delicate balance of rhythm, harmony, and rest. Just as a beautiful melody needs pauses to create depth, your body and mind need moments of rest to restore and heal. Rooted in Ayurvedic wisdom, Dhun is designed to help you find your unique rhythm amidst the chaos of urban life. Every treatment, every program is like a carefully composed tune, crafted to bring balance and flow back into your life.
          </p>

        </section>

      </div>
<Team/>
    </div>
  )
}

export default Treatment
