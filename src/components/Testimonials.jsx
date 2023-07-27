import React from "react";
import pinkcube from "../assets/pinkcube.png";
import { TestimonialsData } from "../constants";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-3">
        <span className="text-base_btn">04</span>
        <div className="w-[1px] h-[15px] border-r-2  border-base_btn"></div>
        <h3 className="min-w-fit">TESTIMONIALS</h3>
        <div className="w-full h-[1px] border-b  border-white"></div>
      </div>
      <div className="flex flex-col gap-40">
        <div className="w-full flex">
          <div>
            <img src={pinkcube} />
          </div>
          <div className="w-2/4 flex flex-col gap-5">
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
        <div className="flex justify-centre gap-5 m-auto ">
          {TestimonialsData.map((testimonial, index) => (
            <TestimonialItem testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
