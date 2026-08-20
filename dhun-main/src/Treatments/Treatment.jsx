import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Treatmentcard from './TreatmentCard'
import TreatmentsSection from './Treatmentsection'
import gsap from 'gsap'
const Treatment = () => {
  const treatref = useRef()
  useEffect(() => {
    gsap.fromTo(
      treatref.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power3.out" }
    )
  }, [])
  return (
    <div>
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
<h1  ref={treatref}  className='absolute text-white top-44 left-125 font-[medium] text-[42px] leading-[42px] tracking-[5px] font-light uppercase'><span></span>Treatments</h1>
 
</div>
   <Treatmentcard/>
   <TreatmentsSection/>
    </div>
  )
}

export default Treatment
