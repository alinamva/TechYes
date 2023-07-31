import React from "react";
import image1 from "../assets/image1.png";
import { motion } from "framer-motion";

const AboutImage = () => {
  return (
    <div className="lg:w-[560px] max-w-[560px] w-full p-4 lg:h-[340px] h-full custom-gradient2 flex items-center justify-center rounded-xl">
      <motion.img
        src={image1}
        initial={{ rotate: 183 }}
        whileHover={{ rotate: 177 }}
        transition={{ type: "spring" }}
        className=" cursor-pointer"
      />
    </div>
  );
};

export default AboutImage;
