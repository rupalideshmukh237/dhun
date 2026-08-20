import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const ServiceSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const services = [
    {
      img: "https://dhunwellness.com/cdn/shop/files/reocvery.jpg?v=1750978839&width=1920",
      title: "Recovery & Longevity",
      para: "Deeply relaxing treatments that harmonise the body and mind through therapeutic touch and sound healing.",
    },
    {
      img: "https://dhunwellness.com/cdn/shop/files/Ayurvedic.jpg?v=1748235268&width=1920",
      title: "Ayurvedic Healing",
      para: "Designed for your unique needs, our 7-day programs combine Ayurvedic wisdom and modern therapies to help you rebalance and recharge.",
    },
    {
      img: "https://dhunwellness.com/cdn/shop/files/Healing_Therapies.jpg?v=1748235268&width=1920",
      title: "Healing Therapies",
      para: "Sculpting facials that lift and restore with fascia release, lymphatic drainage, and expert touch therapies.",
    },
    {
      img: "https://dhunwellness.com/cdn/shop/files/Wellness-Program.jpg?v=1748235268&width=1920",
      title: "Wellness Programs",
      para: "Tech-led treatments designed to reduce inflammation, enhance recovery, and restore vitality—so you feel your best, faster.",
    },
    {
      img: "https://dhunwellness.com/cdn/shop/files/Holistic_Body.jpg?v=1748235268&width=1920",
      title: "Holistic Body",
      para: "Rooted in ancient wisdom, our personalised Ayurvedic therapies restore balance, detoxify the body, and align you with your natural rhythm.",
    },
  ];

  return (
    <div className="w-full bg-[#fefaf6] py-21 px-4 relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // store swiper instance
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center z-0 cursor-pointer"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div className="h-80 w-80 overflow-hidden rounded-t-[999px]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-80 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-[medium] text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 font-[regular] mt-2 text-sm px-4">{service.para}</p>
              </div>
              <button className="mt-3 text-[#87251a] font-[regular]  border border-[#87251a] px-4 py-1 rounded-full hover:bg-[#87251a] hover:text-white transition hover:cursor-pointer">
                Explore
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => swiperRef.current?.slidePrev()} // move to previous
          className="bg-[#87251a] mr-14 z-[999] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a13925] transition pointer-events-auto hover:cursor-pointer"
        >
          <GrPrevious />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()} // move to next
          className="bg-[#87251a] z-[999] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a13925] transition pointer-events-auto hover:cursor-pointer"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default ServiceSwiper;
