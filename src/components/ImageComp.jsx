import React from "react";
import person2 from "../assets/person2.png";

const ImageComp = () => {
  return (
    <div className="bg-image2  hidden lg:flex bg-cover py-28 px-10 bg-no-repeat rounded-xl  flex-col items-center text-center justify-center ">
      <h3>“We specialise in helping our customers digitise their business”</h3>
      <img src={person2} />
      <p>
        Sandra Lewis
        <br />
        Front-End Developer
      </p>
    </div>
  );
};

export default ImageComp;
