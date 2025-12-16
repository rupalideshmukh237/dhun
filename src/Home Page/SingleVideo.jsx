import React from "react";
import { useLocation } from "react-router-dom";

const SingleVideo = () => {
  const location = useLocation();
  const { videoUrl } = location.state || {};

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <video
        className=" w-[80%] h-screen rounded-2xl"
        src={videoUrl}
        controls
        autoPlay
      ></video>
    </div>
  );
};

export default SingleVideo;
