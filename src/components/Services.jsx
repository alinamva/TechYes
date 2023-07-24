import React from "react";
import back from "../assets/back.png";
import Service from "./Service";

const Services = () => {
  return (
    <div className="bg-darkpurple px-10  pb-12 flex gap-6 flex-col">
      <div className="flex flex-col mt-24 gap-24 items-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-base_btn">01</span>
            <div className="w-[1px] h-[15px] border-r-2  border-base_btn"></div>
            <h3 className="min-w-fit">WHO WE ARE</h3>
          </div>{" "}
          <div className="flex flex-col gap-8 text-center w-6/12">
            <h2 className="font-bold">
              Our <span className="accent">comprehensive services</span> will
              cover all your needs.
            </h2>
            <p>
              We don't just help with your IT needs. We focus on the entire
              ecosystem surrounding it. Bringing together people, process, and
              technology, we pride ourselves on delivering solutions that work
              in reality. Not theory.
            </p>
          </div>
        </div>
        <div className="ml-32 gap-16 justify-center items-center grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <Service />
        </div>
      </div>
      <div className="absolute">
        <img src={back} />
      </div>
    </div>
  );
};

export default Services;
