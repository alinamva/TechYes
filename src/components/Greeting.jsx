import React from "react";
import Aim from "./Aim";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { buttonVariants } from "./Header";

const Greeting = () => {
  return (
    <div className="flex  flex-col gap-9 my-16 px-16 lg:px-28 justify-center items-center text-center">
      <h1>
        Tech Yes! Solutions.
        <br /> Your guide in the <span className="accent">digital age.</span>
      </h1>
      <motion.button
        whileHover="hover"
        variants={buttonVariants}
        className="bg-base_btn hidden lg:block"
      >
        {" "}
        <Link to="contact" smooth={true} duration={500}>
          Let's Talk
        </Link>{" "}
      </motion.button>
      <div className="flex flex-wrap justify-center  gap-16">
        <Aim />
      </div>
      <Link to="aboutus" smooth={true} duration={500}>
        <div className="flex flex-col items-center pt-10 cursor-pointer gap-5">
          <p>Scroll to learn more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Greeting;
