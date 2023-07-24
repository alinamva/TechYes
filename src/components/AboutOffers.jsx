import React from "react";
import { Abouts } from "../constants";
import sign from "../assets/sign.png";

const AboutOffers = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 justify-center">
        {Abouts.map((offer, index) => {
          return (
            <label key={index} className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 min-w-[40px] text-base_btn"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>{offer.content}</p>
            </label>
          );
        })}
      </div>
      <div className="lg:flex-row flex flex-col justify-between items-center">
        <div>
          <h3>Jon Leposky</h3>
          <p>CEO, Tech Yes! Solutions</p>
        </div>
        <div>
          <img src={sign} alt="signs" />
        </div>
      </div>
    </div>
  );
};

export default AboutOffers;
