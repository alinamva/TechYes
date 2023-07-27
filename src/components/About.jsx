import React from "react";
import cubes from "../assets/cubes.png";
import AboutImage from "./AboutImage";
import AboutOffers from "./AboutOffers";

const About = () => {
  return (
    <div className="bg-black h-fit-oontent px-12 lg:px-28 pb-24 pt-10 flex flex-col gap-12">
      <div className="flex items-center gap-3">
        <span className="text-base_btn">01</span>
        <div className="w-[1px] h-[15px] border-r-2  border-base_btn"></div>
        <h3 className="min-w-fit">WHO WE ARE</h3>
        <div className="w-full h-[1px] border-b  border-white"></div>
      </div>
      <div className="flex ">
        <div className="hidden lg:block">
          <img src={cubes} />
        </div>
        <div className="flex flex-col gap-8 text-justify">
          <h2>
            We are a <span className="accent">group of experts </span>looking to
            help companies leverage technology to do more than they had ever
            thought possible.
          </h2>
          <p>
            We do this through a number of services to provide comprehensive
            solutions for your business. Scroll down to read about what we can
            do for you.
          </p>
        </div>
      </div>{" "}
      <div className="flex-col lg:flex-row flex items-center gap-20 lg:gap-3 justify-between">
        <AboutImage />
        <AboutOffers />
      </div>
    </div>
  );
};

export default About;
