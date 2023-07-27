import React from "react";
import { FooterData } from "../constants";
import map from "../assets/map.png";

const Footer = () => {
  return (
    <>
      <div className="bg-grey pt-64 flex gap-10 px-24 justify-center">
        {FooterData.map((footer, index) => (
          <ul
            key={index}
            className="gap-4 flex flex-col text-justify max-w-[266px]"
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
          <li>OUR LOCATIONS</li>
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
