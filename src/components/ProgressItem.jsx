import React from "react";
import { ProgressData } from "../constants";

const ProgressItem = () => {
  return (
    <>
      {ProgressData.map((progress, index) => (
        <div
          key={index}
          className="flex items-center"
          style={{
            backgroundColor: progress.color,
            gridColumnStart: index % 2 === 0 ? 2 : 1,
            gridRowStart: index + 1,
          }}
        >
          <div>
            <h3 className="green-accent">{progress.heading}</h3>
            <p>{progress.content}</p>
          </div>
          <div className="w-[150%]">
            <img src={progress?.icon} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProgressItem;
