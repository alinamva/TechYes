import React from "react";

const TestimonialItem = ({ testimonial, index }) => {
  return (
    <div
      key={index}
      className=" bg-darkgrey px-6 pb-4 h-[300px] max-w-xs  sm:gap-9 gap-6   rounded-xl items-center justify-end flex flex-col text-center"
    >
      <img src={testimonial.img} />
      <div className="transparent flex flex-col lg:gap-7 gap-5">
        <img src={testimonial.icon} className="m-auto" />
        <h3>{testimonial.heading}</h3>
        <p>
          {testimonial.name}
          <br />
          {testimonial.job}
        </p>
      </div>
    </div>
  );
};

export default TestimonialItem;
