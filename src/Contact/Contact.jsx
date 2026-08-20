import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Home Page/Footer";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const treatref = useRef();
  const h3ref = useRef();
  const lineref = useRef();
  const h2ref = useRef();
  const pref = useRef();

  useEffect(() => {
    gsap.fromTo(
      treatref.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      [h3ref.current, lineref.current, h2ref.current, pref.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h3ref.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-[#F7F3EC]">

      {/* TOP IMAGE SECTION */}
      <div className="relative w-full overflow-hidden">

        <img
          src="https://dhunwellness.com/cdn/shop/files/DN-Wide_Pattern-2x.jpg?v=1745580879&width=1920"
          className="h-[401px] w-full block"
        />

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

        <h1
          ref={treatref}
          className="absolute text-white top-44 left-125 font-[medium] text-[42px] leading-[42px] tracking-[5px] uppercase"
        >
          Contact
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="px-6 md:px-20 pt-20 pb-32">

        {/* HEADING */}
        <section className="flex flex-col items-center text-center">

          <h3
            ref={h3ref}
            className="font-[regular] text-[20px] tracking-[2px] text-[#1a1b1a] uppercase"
          >
            BOOK APPOINTMENT
          </h3>

          <div
            ref={lineref}
            className="w-245 h-[1.4px] bg-[#eac688] mt-3 mb-6"
          ></div>

          <h2
            ref={h2ref}
            className="text-[45px] font-[italic] text-gray-900 mb-6"
          >
            Begin your journey at Dhun
          </h2>

          <p
            ref={pref}
            className="max-w-3xl font-[medium] text-[18px] text-gray-700 leading-relaxed mb-20"
          >
            Schedule an appointment with us and immerse yourself in a journey of
            healing, balance and rejuvenation
          </p>

        </section>

        {/* 3 CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* WhatsApp */}
          <div className="rounded-3xl border border-[#E9D9C6] text-black backdrop-blur-sm p-12 text-center shadow-sm">
            <h2 className="text-[32px] font-[italic] mb-2">WhatsApp Us</h2>
            <p className="uppercase text-[14px] font-[regular]  opacity-60">
              AVAILABLE ANYTIME
            </p>
          </div>

          {/* Call */}
          <div className="rounded-3xl border border-[#E9D9C6] text-black backdrop-blur-sm p-12 text-center shadow-sm">
            <h2 className="text-[32px] font-[italic] mb-2">Call Us</h2>
            <p className="uppercase text-[14px] font-[regular]  opacity-60">
              MON TO SUN • 10 AM - 9 PM
            </p>
          </div>

          {/* Book Online */}
          <div className="rounded-3xl border border-[#E9D9C6] text-black backdrop-blur-sm p-12 text-center shadow-sm">
            <h2 className="text-[32px] font-[italic]  mb-2">Book Online</h2>
            <p className="uppercase text-[14px] font-[regular]  opacity-60">
              GET AN APPOINTMENT
            </p>
          </div>

        </div>

        {/* FOOTER CONTACT */}
      

        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
