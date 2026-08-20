import React from "react";
import Conceptprop from "./Conceptprop";
import Footer from '../Home Page/Footer'
import Program from "./Program";
const Concept = () => {
  return (
    <div>
      <div className="flex gap-6  bg-[#F7F3EC]">
      <Conceptprop
        img="https://dhunwellness.com/cdn/shop/files/DHUN0660.jpg?v=1748246470"
        step="Step 1"
        title="Book Consultation"
        Description="Dhun is where traditional wisdom meets modern convenience "
      />

      <Conceptprop
        img="https://dhunwellness.com/cdn/shop/files/DHUN0742.jpg?v=1748246470"
        step="Step 2"
        title="Personalised Planning"
        Description="Dhun is where traditional wisdom meets modern convenience "
      />

      <Conceptprop
        img="https://dhunwellness.com/cdn/shop/files/DHUN0858.jpg?v=1748246470"
        step="Step 3"
        title="Take-Home Docket"
        Description="Dhun is where traditional wisdom meets modern convenience "
      />
       <Conceptprop
        img="https://dhunwellness.com/cdn/shop/files/stress_management_program_at_Dhun.jpg?v=1751286665"
        step="Step 4"
        title="Follow Up Support"
        Description="Dhun is where traditional wisdom meets modern convenience "
      />
    </div>
    <Program/>
      <Footer/>
    </div>
   
  );
};

export default Concept;
