import React from "react";
import image1 from "../assets/image1.png";

const AboutImage = () => {
  return (
    <div className="lg:w-[560px] max-w-[560px] w-full p-4 lg:h-[340px] h-full custom-gradient2 flex items-center justify-center rounded-xl">
      <img src={image1} className=" rotate-[-176deg]" />
    </div>
  );
};

export default AboutImage;
