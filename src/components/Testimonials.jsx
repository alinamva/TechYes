import React from "react";
import pinkcube from "../assets/pinkcube.png";
import { TestimonialsData } from "../constants";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div className="flex flex-col lg:gap-12">
      <div className="flex items-center gap-3">
        <span className="text-base_btn">04</span>
        <div className="w-[1px] h-[15px] border-r-2  border-base_btn"></div>
        <h3 className="min-w-fit">TESTIMONIALS</h3>
        <div className="w-full h-[1px] border-b  border-white"></div>
      </div>
      <div className="flex  flex-col lg:gap-40 gap-28">
        <div className="w-full flex lg:flex-row flex-col justify-center">
          <div className="lg:m-0 m-auto ">
            <img src={pinkcube} />
          </div>
          <div className="lg:w-2/4 w-full text-justify flex flex-col gap-5 lg:m-0 m-auto ">
            <h2>
              Testimonials.
              <span className="accent">
                <br />
                Loved{" "}
              </span>
              by product people.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:flex-row flex-col lg:gap-5 gap-20 m-auto ">
          {TestimonialsData.map((testimonial, index) => (
            <TestimonialItem testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
