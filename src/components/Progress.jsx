import React from "react";
import bg2 from "../assets/bg2.png";
import { ProgressData } from "../constants";
const Progress = () => {
  return (
    <div className="bg-image w-full h-[1804px] pt-44 px-24">
      {" "}
      <div className="flex items-center gap-3">
        <div className="w-full h-[1px] border-b  border-white"></div>{" "}
        <span className="bg-accent2">03</span>
        <div className="w-[1px] h-[15px] border-r-2 border-secondary"></div>
        <h3 className="min-w-fit">OUR PROGRESS</h3>
      </div>
      {ProgressData.map((progress) => {
        return (
          <div>
            <h3 className="accen">{progress.heading}</h3>
            <p>{progress.content}</p>
            <img src={progress?.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
