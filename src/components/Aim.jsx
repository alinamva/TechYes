import React from "react";
import { AimsData } from "../constants";

const Aim = () => {
  return (
    <>
      {AimsData.map((aim, index) => {
        return (
          <div
            key={index}
            className="bg-transparent w-80 gap-10 flex flex-col items-center"
          >
            <div>
              <img src={aim.icon} alt="aim" />
            </div>
            <div className="box-gradient w-9/12 rounded-2xl px-8 py-8">
              <p>{aim.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Aim;
