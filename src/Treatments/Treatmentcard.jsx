import React from 'react'
import { PiFlowerBold } from "react-icons/pi";

const Treatmentcard = () => {

  const cards = [
    {
      src: "https://dhunwellness.com/cdn/shop/files/Holistic_Body.jpg?v=1748235268&width=400",
      title: "Holistic Body Therapies",
      desc: "Deeply relaxing treatments that harmonise the body and mind through therapeutic touch and sound healing."
    },
    {
      src: "https://dhunwellness.com/cdn/shop/files/Regenerative_Facials.jpg?v=1748235268&width=400",
      title: "Regenerative Facial",
      desc: "Transformational facials that sculpt, lift, and restore-combining fascia release, lymphatic drainage, and expert techniques like Japanese touch therapy and Biologique Recherche."
    },
    {
      src: "https://dhunwellness.com/cdn/shop/files/reocvery.jpg?v=1750978839&width=400",
      title: "Recovery & Longevity",
      desc: "Tech-led therapies designed to reduce inflammation, enhance recovery, and restore vitality-so you feel your best, faster."
    },
    {
      src: "https://dhunwellness.com/cdn/shop/files/Ayurvedic.jpg?v=1748235268&width=400",
      title: "Ayurvedic Healing",
      desc: "Rooted in ancient wisdom, our personalised Ayurvedic therapies restore balance, detoxify the body, and align you with your natural rhythm."
    },
    {
      src: "https://dhunwellness.com/cdn/shop/files/Healing_Therapies.jpg?v=1748235268&width=400",
      title: "Healing Therapies",
      desc: "Energy-based practices that restore inner harmony, release emotional blockages, and ease both physical and emotional pain."
    }
  ];

  return (
    <div className="relative z-10 w-full py-25 bg-[#F7F3EC]">
      
      {/* Cards Row */}
      <div className="px-7 w-full text-black flex justify-between items-start gap-6">
        {cards.map((e, i) => (
          <div key={i}>
            <img
              className="h-[250px] w-[230px] object-cover rounded-t-full"
              src={e.src}
              alt=""
            />
            <h3 className='font-[italic] text-[#87241a] leading-[23.4px] tracking-[0.6px] pt-3 pb-2 text-[18px] font-semibold'>
              {e.title}
            </h3>
            <p className='w-[250px] text-[#3f323b] font-[medium] text-[12px] leading-[16.8px] tracking-[0.6px]'>
              {e.desc}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className='flex items-center gap-2 font-[regular] uppercase bg-[#87241A] px-12 py-2 rounded-full text-white'>
          <PiFlowerBold /> View All <PiFlowerBold />
        </button>
      </div>

    </div>
  );
};

export default Treatmentcard;
