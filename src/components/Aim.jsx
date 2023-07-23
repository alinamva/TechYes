import React from "react";
import aim1 from "../assets/aim1.png";
import { Aims } from "../constants";

const Aim = () => {
  return (
    <>
      {Aims.map((aim) => {
        return (
          <div className="bg-transparent w-80 gap-10 flex flex-col items-center">
            <div>
              <img src={aim1} alt="aim1" />
            </div>
            <div className="box-gradient rounded-2xl px-16 py-8">
              <p className="w-[215px]">{aim.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Aim;
