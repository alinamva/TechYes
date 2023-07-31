import React from "react";
import logo2 from "../assets/logo2.png";
import { motion } from "framer-motion";
import { buttonVariants } from "./Header";

const PinkContact = () => {
  return (
    <div className="custom-gradient3 hidden absolute gap-7 rounded-xl text-center mx-9  lg:flex flex-col items-center py-16 lg:px-32 px-10 justify-center">
      <div className="flex gap-3 items-center ">
        <h2 className="font-4xl">Move even faster with</h2>
        <img src={logo2} />
      </div>
      <div>
        <h3 className="text-3xl">Your guide in the digital age.</h3>
      </div>
      <div className="flex gap-3">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="bg-white text-purple"
        >
          Let's Talk
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="bg-purple"
        >
          Book Your Consultation
        </motion.button>
      </div>
    </div>
  );
};

export default PinkContact;
