import React from "react";
import { FooterData } from "../constants";
import map from "../assets/map.png";

const Footer = () => {
  return (
    <>
      <div className="bg-grey lg:pt-64 pt-10 pb-10 flex lg:flex-row flex-col lg:gap-10 gap-2 lg:px-24 px-10 justify-center">
        {FooterData.map((footer, index) => (
          <ul
            key={index}
            className="gap-1 flex flex-col lg:text-justify max-w-[266px]"
          >
            <li className="font-semibold text-white">{footer.heading}</li>
            <li>{footer.first}</li>
            <li>{footer.second}</li>
            <li>{footer.third}</li>
            <li>{footer.fourth}</li>
            <li>{footer.fifth}</li>
            <li>{footer.six}</li>
            <li>{footer.sevens}</li>
          </ul>
        ))}
        <ul>
          <li className="font-bold">OUR LOCATIONS</li>
          <li>
            <img src={map} />
          </li>
        </ul>
      </div>
      <div className="text-center bg-black w-full py-4 text-lightgrey">
        {" "}
        © 2022 Tech Yes! Solutions. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
