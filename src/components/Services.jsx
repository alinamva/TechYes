import React from "react";
import back from "../assets/back.png";
import { ServicesData } from "../constants";
import Service from "./Service";

const Services = () => {
  return (
    <div className="bg-darkpurple px-10  pb-16 flex gap-6 flex-col">
      <div className="flex flex-col mt-24 gap-24 items-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-base_btn">02</span>
            <div className="w-[1px] h-[15px] border-r-2  border-base_btn"></div>
            <h3 className="min-w-fit">ALL OUR SERVICES</h3>
          </div>{" "}
          <div className="flex flex-col lg:px-24 gap-8 text-center max-w-6/12">
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
        <div className="lg:ml-32   gap-16 justify-center items-center grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {ServicesData.map((service, index) => (
            <Service service={service} key={index} />
          ))}
        </div>
      </div>
      <div className="absolute">
        <img src={back} />
      </div>
    </div>
  );
};

export default Services;
