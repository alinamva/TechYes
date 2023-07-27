import React from "react";

const ProgressItem = ({ progress, index }) => {
  return (
    <div key={index} className="row-span-2">
      <h3 className="accen">{progress.heading}</h3>
      <p>{progress.content}</p>
      <img src={progress?.icon} />
    </div>
  );
};

export default ProgressItem;
