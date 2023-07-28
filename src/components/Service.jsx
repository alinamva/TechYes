import React from "react";
import service1 from "../assets/service1.svg";

const Service = ({ service, index }) => {
  console.log(service);
  return (
    <div key={index} className="gap-1 flex flex-col">
      <img src={service1} />

      <h3 className="text-base_btn">{service.service}</h3>
      <p className="flex gap-3">
        Learn more
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
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </p>
    </div>
  );
};

export default Service;
