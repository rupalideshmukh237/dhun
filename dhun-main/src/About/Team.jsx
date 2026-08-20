import React from "react";
import Footer from '../Home Page/Footer'
const MeetTeam = () => {
  return (
    <div className="relative w-full text-white mt-20">

      {/* BACKGROUND IMAGE FULL SECTION */}
      <img
        src="https://dhunwellness.com/cdn/shop/files/Texture_Background_mobile.png?v=1746598949"
        className="absolute inset-0 w-full h-full object-cover -z-20"
        alt="bg"
      />

      {/* CONTENT */}
      <div className="pt-20 pb-32 px-6 md:px-20">

        {/* HEADING */}
        <h1 className="text-center text-[48px] leading-[42px] italic font-[italic] mb-20">
          Meet the Team
        </h1>

        {/* WRAPPER */}
        <div className="flex flex-col md:flex-row items-center  ">

          {/* LEFT: IMAGE + SHAPES */}
          <div className="relative w-full flex justify-center md:justify-start">

            {/* cream circles */}
            <div className="absolute -z-10 -left-10 -top-10 w-[330px] h-[330px] bg-[#F7EBD9] rounded-full"></div>
            <div className="absolute -z-20 left-4 top-6 w-[380px] h-[380px] bg-[#EEDCC6] rounded-full"></div>

            {/* profile image */}
            <img
              src="https://dhunwellness.com/cdn/shop/files/Mira_Kapoor.png?v=1746700125&width=1920"
              className="w-[320px] h-[380px] object-cover rounded-full"
              alt="Founder"
            />
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="w-full -ml-42">

            <h2 className="text-[24px] tracking-[2px] font-[Regular]">
              MIRA KAPOOR
            </h2>

            <p className="text-[14px] mt-2 tracking-[3px] font-[Regular]">
              FOUNDER
            </p>

            <div className="w-full h-[1px] bg-white mt-4 mb-6 opacity-30"></div>

            <p className="leading-7 mb-5 font-[medium]">
              Mira Kapoor, the visionary behind Dhun, brings her deep passion for
              wellness and balance to life through this unique sanctuary.
            </p>

            <p className="leading-7 mb-5 font-[medium]">
              Inspired by her own journey of self-discovery and a deep connection
              to holistic living, Mira envisioned Dhun as a space where ancient
              Ayurvedic wisdom meets the demands of modern urban life.
            </p>

            <p className="leading-7 mb-5 font-[medium]">
              With an innate belief in the power of rhythm, both in music and in
              wellness, Mira created Dhun as a harmonious blend of science,
              tradition, and individuality. Her dedication to personalised care
              and her love for sound healing shape every aspect of Dhun, from its
              curated treatments to its serene, soulful environment.
            </p>

            <p className="leading-7 font-[medium]">
              Through Dhun, Mira invites you to experience wellness, guiding you
              toward a life of balance, pause, and harmony.
            </p>

          </div>
          
        </div>
       <div className="flex flex-col pt-32 md:flex-row items-center ">

  {/* LEFT TEXT CONTENT */}
  <div className="w-full md:w-3xl">

    <h2 className="text-[24px] tracking-[2px] font-[Regular]">
    Dr. Sujit Kumar Gupta
    </h2>

    <p className="text-[14px] mt-2 tracking-[3px] font-[Regular]">
     WELLNESS DIRECTOR
    </p>

    <div className="w-full h-[1px] bg-white mt-4 mb-6 opacity-30"></div>

   

    <p className="leading-7 mb-5 font-[medium]">
     At the helm of Dhun’s wellness philosophy is Dr. Sujit Kumar Gupta, a highly respected Ayurvedic doctor with over 20 years of experience in holistic healthcare. An Ayurvedic doctor with dual master’s degrees in Yoga and Healthcare Management, he is also India’s first Ayurvedic practitioner trained at Lifestyle Prescriptions University (USA) and a Certified Diabetes Educator.
    </p>

    <p className="leading-7 mb-5 font-[medium]">
      His approach focuses on Root Cause Analysis, treating the underlying imbalances rather than just the symptoms. Blending Ayurveda with modern modalities like Chakra Balancing, Sound Therapy, EFT, and Quantum Neurobiology, Dr. Gupta creates personalised healing journeys rooted in both science and tradition.
    </p>

    <p className="leading-7 font-[medium]">
     With global experience across Six Senses, Aman, and Banyan Tree, he brings a truly world-class perspective to Dhun’s integrative wellness offering.
    </p>

  </div>

  {/* RIGHT IMAGE + SHAPES */}
  <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">

    {/* Background shapes */}
    <div className="absolute -z-10 -right-10 -top-10 w-[330px] h-[330px] bg-[#F7EBD9] rounded-full"></div>
    <div className="absolute -z-20 left-32 top-6 w-[380px] h-[380px] bg-[#EEDCC6] rounded-full"></div>

    {/* Image */}
    <img
      src="https://dhunwellness.com/cdn/shop/files/Dr._Sujit.png?v=1746700182&width=1920"
      className="w-[320px] h-[380px] object-cover rounded-full relative z-10"
      alt="Founder"
    />
  </div>

</div>

        
      </div>
      <Footer/>
    </div>

  );
};

export default MeetTeam;
