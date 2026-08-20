import React from "react";
import Footer from '../Home Page/Footer'
const TreatmentsSection = () => {
  const treatments = [
    {
      title: "Tulya Balance Therapy",
      time: "120 MIN",
      desc: "A grounding full-body ritual combining aroma oils, chakra balancing, and deep relaxation to restore energy flow.",
    },
    {
      title: "Lumira Bridal Glow",
      time: "90 MIN",
      desc: "A luxurious pre-bridal polish that detoxifies, brightens, and softens the skin with handcrafted wellness blends.",
    },
    {
      title: "Tranquil Deep Relief",
      time: "60 MIN",
      desc: "A tension-release treatment designed for muscle stiffness, chronic tightness, and full-body decompression.",
    },
    {
      title: "Ethera Sculpt Facial",
      time: "90 MIN",
      desc: "A contour-lifting skin rejuvenation facial that tones muscles and boosts radiance using touch-led techniques.",
    },
    {
      title: "Aura Detox Ritual",
      time: "75 MIN",
      desc: "A purifying mineral scrub and warm oil therapy that removes stagnation, improves circulation, and restores clarity.",
    },
    {
      title: "Nirvana Sleep Therapy",
      time: "60 MIN",
      desc: "A calming head-to-toe therapy that uses warm oil relaxation and sound healing to promote deep, restful sleep.",
    },
    {
      title: "Shakti Herbal Compress",
      time: "80 MIN",
      desc: "A traditional herbal-potli massage that reduces inflammation, improves mobility, and brings instant relaxation.",
    },
    {
      title: "Reva Skin Renewal",
      time: "95 MIN",
      desc: "A complete exfoliation and nourishment treatment using botanical serums for smooth, hydrated, luminous skin.",
    },
    {
      title: "Pulse Energy Rebalance",
      time: "60 MIN",
      desc: "A focused energy-healing therapy that aligns chakras, reduces mental fatigue, and restores emotional balance.",
    },
  ];

  return (
    <div className="w-full bg-[#F7F3EC] pt-15 pb-32">

      {/* --------- TOP TABS --------- */}
      <div className="w-full flex justify-center">
        <div className="flex gap-8 tracking-[2px] uppercase font-[medium] text-white bg-[#3F323B] px-10 py-4 rounded-md">
          <button className="text-[14px]">Holistic Body Therapies</button>
          <button className="text-[14px]">Regenerative Facials</button>
          <button className="text-[14px]">Recovery & Longevity</button>
          <button className="text-[14px]">Ayurvedic Healing</button>
          <button className="text-[14px]">Healing Therapies</button>
        </div>
      </div>

      {/* --------- TITLE --------- */}
      <h1 className="text-center text-[40px] font-[italic] text-[#3F323B] mt-10">
        Holistic Body Therapies
      </h1>

      {/* --------- DESCRIPTION --------- */}
      <p className="text-center font-[medium] text-[#6a5a62] max-w-3xl mx-auto mt-6 text-[16px] leading-[26px]">
        Explore our curated selection of therapeutic treatments created to heal,
        restore and elevate both body and mind through advanced wellness rituals.
      </p>

      {/* --------- Cards --------- */}
      <div className="mt-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {treatments.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md p-5 border border-[#eadfd5] hover:shadow-xl transition-all"
          >
            <h2 className="text-[26px] text-[#3F323B] mb-1 font-[italic] text-center">
              {item.title}
            </h2>
            <p className="text-[12px] font-[medium] tracking-[1px] text-[#6a5a62] mb-4 text-center">
              {item.time}
            </p>
            <p className="text-[#6a5a62] font-[medium] text-[14px] leading-[22px] mb-6 text-center">
              {item.desc}
            </p>

            <div className="flex gap-4 mt-4 justify-center font-[medium]">
              <button className="px-6 py-2 rounded-full bg-[#D9C7A4] text-[#3F323B] text-[13px] font-medium">
                Learn More
              </button>
              <button className="px-6 py-2 rounded-full bg-[#87241A] text-white text-[13px] font-medium">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default TreatmentsSection;
