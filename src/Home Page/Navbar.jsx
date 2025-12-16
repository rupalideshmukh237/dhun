import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Detect scroll for color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Force navbar black on Treatment route
 

  // Conditions
  const navScrolled = isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[90px] z-50 flex items-center justify-between px-6 md:px-10 border-b transition-all duration-500 ${
        navScrolled
          ? "bg-white text-black border-gray-300 shadow-md"
          : "bg-transparent text-white border-white/20"
      }`}
    >
      {/* Left */}
      <div className="flex items-center space-x-4 md:space-x-6 h-full">
        <div
          className="group relative md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 39 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-7 h-7 relative z-10"
          >
            <path
              d="M1 0.5H38M1.33036 10.2568H29.0804M1.33036 19.5H19.8304"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          className={`hidden md:block h-6 border-r ${
            navScrolled ? "border-gray-400" : "border-white/30"
          }`}
        ></div>

        {/* Logo */}
        <div className="flex flex-col items-start leading-tight">
          <span
            className={`text-[9px] tracking-[3px] uppercase font-light ${
              navScrolled ? "text-black/70" : "text-white"
            }`}
          >
            Harmonise and Heal
          </span>

          <h1
            className={`text-[20px] tracking-[6px] font-medium uppercase ${
              navScrolled ? "text-black" : "text-white"
            }`}
          >
            DHUN
          </h1>
        </div>
      </div>

      {/* Center nav */}
      <ul
        className={`hidden md:flex gap-10 text-[13px] tracking-[2px] uppercase ${
          navScrolled ? "text-black" : "text-white"
        }`}
      >
        <Link to="/Wellness" className="hover:text-gray-500 transition">
          Wellness Programs
        </Link>
        <Link to="/Treatment" className="hover:text-gray-500 transition">
          Treatment
        </Link>
         <Link to="/About" className="hover:text-gray-500 transition">
          About
        </Link>
      </ul>

      {/* Button */}
      <div className="h-full flex items-center">
        <Link to="/Contact">
        <button
          className={`h-[70%] px-6 md:px-8 py-2 mx-2 md:mx-4 uppercase text-[12px] md:text-[13px] tracking-[2px] border rounded-lg backdrop-blur-md transition-all duration-300 ${
            navScrolled
              ? "text-black border-black/40 bg-black/5 hover:bg-black/10"
              : "text-white border-white/40 bg-white/10 hover:bg-white/20"
          }`}
        >
        Book an Appointment
       
          
        </button>
         </Link>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`absolute top-[90px] left-0 w-full ${
            navScrolled ? "bg-white/90 text-black" : "bg-black/80 text-white"
          } backdrop-blur-lg flex flex-col items-center py-6 space-y-6 text-sm uppercase tracking-[2px] md:hidden transition-all duration-300`}
        >
          <li className="hover:text-gray-400 cursor-pointer">Wellness Programs</li>
          <li className="hover:text-gray-400 cursor-pointer">Treatments</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
