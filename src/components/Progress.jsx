import React from "react";
import ProgressItem from "./ProgressItem";
import Testimonials from "./Testimonials";
const Progress = () => {
  return (
    <div className="bg-image w-full h-fit-content bg-no-repeat pt-44 px-24">
      <div className="flex items-center gap-3">
        <div className="w-full h-[1px] border-b  border-white"></div>{" "}
        <span className="green-accent">03</span>
        <div className="w-[1px] h-[20px] border-r-2 border-green"></div>
        <h3 className="min-w-fit">OUR PROGRESS</h3>
      </div>

      <div className="grid grid-rows-4 grid-cols-2 grid-flow-col">
        <ProgressItem />
      </div>
      <Testimonials />
    </div>
  );
};

export default Progress;
