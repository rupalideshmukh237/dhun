import React   from "react";
import  {Link} from 'react-router-dom'
const Footer = () => {
 
  
  return (
    <footer className="w-full bg-[#f7f3ec] text-[#4a4139] pt-42 pb-10 pl-10  font-[Poppins] tracking-wide">
  
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 ">

        {/* COLUMN 1 */}
        <div>
          <p className="text-[11px] font-[medium] tracking-[6px] mb-3 text-[#7a6f67]">
            HARMONISE AND HEAL
          </p>

          <h1 className="text-[42px] font-[regular] tracking-[10px] mb-6">
            DHUN
          </h1>

          <p className="text-[15px] font-[regular] leading-[26px] w-[80%] text-[#6a6058]">
            A sanctuary of sound, soul, renewal.  
            Where traditional wisdom, modern comfort, and the healing  
            power of music unite for holistic well-being.
          </p>

          <div className="mt-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              className="w-6 opacity-60"
            />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="space-y-4 text-[15px] font-[regular]">
          <p className="hover:opacity-60 cursor-pointer"><Link to="/" onClick={() => window.scrollTo(0, 0)}>HOME</Link></p>
          <p className="hover:opacity-60 cursor-pointer"><Link to="/About" onClick={() => window.scrollTo(0, 0)}>ABOUT US</Link></p>
          <p className="hover:opacity-60 cursor-pointer"><Link to="/Treatment" onClick={() => window.scrollTo(0, 0)}>TREATMENTS</Link></p>
          <p className="hover:opacity-60 cursor-pointer"><Link to="/Wellness" onClick={() => window.scrollTo(0, 0)}>WELLNESS PROGRAMS</Link></p>
          <p className="hover:opacity-60 cursor-pointer"><Link to="">CONCERN</Link></p>
        </div>

        {/* COLUMN 3 */}
        <div className="space-y-4 text-[15px] font-[regular]">
          <p className="hover:opacity-60 cursor-pointer">GIFT CARD</p>
          <p className="hover:opacity-60 cursor-pointer">CAREERS</p>
          <p className="hover:opacity-60 cursor-pointer"> <Link to="/Contact" onClick={() => window.scrollTo(0, 0)}>CONTACT</Link></p>
        </div>

        {/* COLUMN 4 */}
        <div className="space-y-7 text-[15px] font-[regular]">
          <div>
            <p className="text-[14px] font-medium mb-1">WhatsApp</p>
            <p className="text-[#6a6058]">( +91 ) 0987654321</p>
          </div>

          <div>
            <p className="text-[14px] font-medium mb-1">Phone Number</p>
            <p className="text-[#6a6058]">( +91 ) 1234567890</p>
          </div>

          <div>
            <p className="text-[14px] font-medium mb-1 font-[regular]">Visit Us</p>
            <p className="text-[#6a6058] leading-[25px] font-[regular]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi cum assumenda ab. Molestiae ratione sequi enim alias, harum cum iusto ex non? Fuga laudantium impedit quam debitis sint maiores?
            </p>
          </div>
        </div>
      </div>

      {/* BORDER LINE */}
      <div className="border-t border-[#d6ccc5] w-full mt-16 mb-8"></div>

      {/* BOTTOM ROW */}
      <div className="md:flex justify-between text-[14px] text-[#7a6f67] font-[regular]">
        <p>
          © 2025, Dhun Wellness | All Rights Reserved |  
          All prices are exclusive of tax
        </p>

        <div className="flex gap-8 mt-4 md:mt-0 font-[regular]">
          <p className="hover:opacity-60 cursor-pointer">Privacy Policy</p>
          <p className="hover:opacity-60 cursor-pointer">Terms & Conditions</p>
          <p className="hover:opacity-60 cursor-pointer">Booking & Cancellation Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
