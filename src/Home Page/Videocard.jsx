import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
const Videocard = () => {

  const values = [
    "https://cdn.shopify.com/videos/c/o/v/09e1284e2135465590af1aca92f1c61d.mp4",
    "https://cdn.shopify.com/videos/c/o/v/0ff731c39d48455b9a62400b68515037.mp4",
    "https://cdn.shopify.com/videos/c/o/v/e5ab2c92231244be9b3a133d3cf7ef9e.mp4",
    "https://cdn.shopify.com/videos/c/o/v/a4b6e93796934d79a9ef08c0656b4c1f.mp4",
    "https://cdn.shopify.com/videos/c/o/v/568810f7917a4ba28fa39844b8dfa0c0.mp4",
  ];

  const videoref=useState()
  useGSAP(()=>{
     gsap.fromTo(videoref.current,{
    rotateX:100
     },
     {rotateX:0}
    )
  })


  return (
    <div ref={videoref} className="w-full flex  justify-center gap-10 mt-20">
      {values.map((url, index) => (
        <Link key={index} to={`/video/${index}`} state={{ videoUrl: url }}>
          <video
            className="w-[320px] h-[440px] object-cover rounded-2xl hover:scale-105 transition duration-300 hover:cursor-pointer"
            src={url}
            muted
            loop
            autoPlay
            playsInline
          ></video>
        </Link>
      ))}
    </div>
  );
};

export default Videocard;
