import React, { useRef } from "react";
import Navbar from "./Navbar";
import Page2 from "./Page2";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'


const Home = () => {
  const homeref=useRef()
   useGSAP(() => {
    gsap.fromTo(
      homeref.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 4, ease: "power3.out" }
    );
  }, []);
   
  return (
    <div  className="relative  w-full  text-white">
      {/* Navbar */}
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full  object-cover -z-10"
        src="./src/assets/36a6932daff84c9681d7380504468a84.mp4"
      ></video>

      {/* Main Content */}
      <div ref={homeref }className="flex flex-col justify-center items-center pt-23  text-center h-[calc(100vh-90px)] gap-6">
        
        {/* SVG Shape */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="141"
          viewBox="0 0 34 141"
          fill="none"
          className="w-[40px] h-[130px]"
        >
          <path
            d="M7.88129 0C10.976 2.88995 13.7085 6.04767 16.2914 9.37513C18.6169 12.3719 20.9828 15.5121 22.5347 18.9727C25.6413 25.9042 29.2478 32.8634 27.1917 40.6378C25.2597 47.9409 19.1452 52.6643 16.0325 59.3895C14.3595 63.0037 14.6513 66.8243 15.7168 70.5542C16.7927 74.3148 19.7064 77.2881 21.99 80.3917C24.5983 83.9357 27.5927 87.1988 30.1128 90.8292C31.3264 92.5778 33.0069 94.7171 33.3002 96.8695C33.6654 99.5517 30.5931 99.3044 28.7345 98.6562C27.7738 98.7937 26.5257 98.2377 25.58 98.0533C24.5654 97.8558 23.6929 97.8192 22.6679 97.787C20.4725 97.7197 18.2099 97.4548 16.04 97.9626C12.2719 98.8449 9.85662 102.047 9.54535 105.721C8.85698 113.873 13.4631 121.496 17.8462 128.053C20.0685 131.378 22.5526 134.569 25.0891 137.655C25.5022 138.157 26.8265 139.278 26.8565 139.932C26.8924 140.745 26.1456 140.533 25.6234 140.235C24.0865 139.354 23.0734 137.586 21.9331 136.326C16.3363 130.144 11.2184 123.46 6.97143 116.319C4.827 112.714 3.11953 108.996 1.81013 105.024C0.52167 101.12 -0.463005 96.4174 1.15916 92.4666C4.4454 84.4654 14.9491 87.1198 21.5036 88.2948C23.2021 88.5991 25.128 88.1865 23.7693 86.2038C22.6304 84.543 21.2552 83.0168 19.9473 81.4833C17.2432 78.3095 14.5376 74.9425 12.215 71.4936C7.75409 64.8709 3.39339 56.2259 7.24529 48.396C9.30891 44.1993 12.649 40.8572 15.208 36.9708C17.8118 33.0171 19.4295 28.6317 18.9072 23.8731C18.4284 19.5112 16.9559 15.2472 14.7201 11.453C13.5005 9.38245 11.9921 7.50215 10.6138 5.53114C9.58576 4.06641 7.37249 1.90224 7.65382 0C7.73014 0 7.80497 0 7.88129 0Z"
            fill="#F8F3ED"
          />
        </svg>

        {/* Text Section */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-sm tracking-[8px] uppercase font-[medium]">
            Harmonise and Heal
          </h2>
          <h1 className="text-7xl tracking-[15px] font-[medium] font-black uppercase pt4">DHUN</h1>
          <p className="max-w-md text-center text-[17px] leading-relaxed text-gray-200 font-[medium] pt-4" >
            Where traditional wisdom, modern comfort, new age recovery technology
            and the healing power of music unite for holistic well-being
          </p>
        </div>
      </div>
      <Page2/>
     
    </div>
    
  );
};

export default Home;
