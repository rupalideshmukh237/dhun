import React from 'react'
import Conceptprop from './Conceptprop'


const Concept = ({ img, step, title, }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-6 text-[#101828cd] ml-18 mt-10 bg-[#F7F3EC]">
      <img src={img} className='h-80 w-59 object-cover rounded-[30px] ' alt="" />
      <h2 className='font-[regular] text-xl'>{step}</h2>
      <h6 className='font-[italic] text-[23px]'>{title}</h6>
      
     
    </div>
   
    </div>
  
  )
}

export default Concept
