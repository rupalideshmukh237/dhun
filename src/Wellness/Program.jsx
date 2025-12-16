import React, { useRef,useEffect } from "react";
import { PiFlower } from "react-icons/pi";
import gsap from 'gsap'
const Program = () => {
  const programs = [
    {
      main: "Sleep Program",
      day: "07 Days",
      description:
        "The Sleep Program at Dhun is designed to gently realign your sleep cycle, restore balance to your circadian rhythm, and enhance the quality of your rest. ",
      button: "REQUEST A CALLBACK",
    },
     {
      main: "Cleanse & Reset",
      day: "07 Days",
      description:
        "Reawaken your body’s natural intelligence with Dhun’s Cleanse & Reset Program-a meticulously crafted detox experience designed to gently release stagnation and restore vitality from within.",
      button: "REQUEST A CALLBACK",
    },
     {
      main: "Gut Restoration",
      day: "07 Days",
      description:
        "Embark on a transformative journey with Dhun’s Gut Restoration Program, where ancient Ayurvedic wisdom meets modern wellness. Rooted in the time-honoured principles of Panchakarma.",
      button: "REQUEST A CALLBACK",
    },
     {
      main: "Women's Health",
      day: "07 Days",
      description:
        "At Dhun, we honour the sacred rhythm of a woman’s life through an integrative approach rooted in Ayurveda. With deep respect for the physical, emotional, and hormonal transitions unique to women.",
      button: "REQUEST A CALLBACK",
    },
    {
      main: "Stress Management",
      day: "07 Days",
      description:
        "Step into a world of serenity and renewal with Dhun’s Stress Management Program. This transformative journey is designed not just to manage stress, but to prevent it at its source.",
      button: "REQUEST A CALLBACK",
    },
  ];
    const programref = useRef()
    const lineref1 = useRef()
    const ourref = useRef()
    const cardref = useRef([])
    useEffect(() => {
      gsap.fromTo([programref.current,lineref1.current,ourref.current],
        {
         y:100,opacity: 0,
},{
   y: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power3.out", scrollTrigger: {
            trigger: programref.current,
            start: "top 85%",
          },
})
    }, [])
    useEffect(() => {
    cardref.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2, // one-by-one effect
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);
    
  return (
    <div className="relative w-full mt-24 text-white">

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://dhunwellness.com/cdn/shop/files/Texture_Background_88bcc686-12b0-4056-ba53-61b2d9b54a83.png?v=1746446750"
        alt=""
      />

      {/* Title Section */}
      <div className="relative z-10 flex gap-2 flex-col items-center justify-center pt-10">
        <h5  ref={programref} className="uppercase text-xl font-[medium] tracking-wide">
          Programs
        </h5>
        <div ref={lineref1} className="h-[1px] w-[490px] bg-amber-50 my-2"></div>
        <h2 ref={ourref} className="text-5xl font-[italic] font-light">Our Offerings</h2>
      </div>

      {/* Program Cards */}
      <div  className="relative z-10 w-full px-10 py-14 flex flex-col gap-10">
        {programs.map((e, i) => (
          <div
            key={i}
            ref={(el) => (cardref.current[i] = el)}
            className="border border-[#d4b9a1] rounded-2xl p-6 md:p-10"
          >
            <div className="bg-[#F8F1E9] rounded-xl p-8 flex flex-row md:flex-row justify-between gap-8">

              {/* LEFT CONTENT */}
              <div className="text-[#5F4633] flex-row max-w-2xl">
                <h4 className="text-3xl font-[italic]">{e.main}</h4>
                <h6 className="mt-2 text-sm font-[medium] ">{e.day}</h6>
                <p className="mt-4 leading-7 font-[medium]">{e.description}</p>
              </div>

              {/* RIGHT BUTTON */}
             <div className="flex items-center">
  <button  onClick={() =>
    window.open("https://web.whatsapp.com/", "_blank")
  }  src="https://api.whatsapp.com/send?text=&phone=9967979986"   className="bg-[#9A1E1E] text-white px-8 py-3 rounded-full 
                     text-sm tracking-wide hover:opacity-90 transition 
                     flex items-center gap-2 font-[medium]">
    <PiFlower />
    {e.button}
    <PiFlower />
  </button>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
