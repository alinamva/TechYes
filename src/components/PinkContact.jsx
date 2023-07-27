import React from "react";
import logo2 from "../assets/logo2.png";

const PinkContact = () => {
  return (
    <div className="custom-gradient3 absolute gap-7 rounded-xl text-center  flex flex-col items-center py-16 px-32 justify-center">
      <div className="flex gap-3 items-center ">
        <h2 className="font-4xl">Move even faster with</h2>
        <img src={logo2} />
      </div>
      <div>
        <h3 className="text-3xl">Your guide in the digital age.</h3>
      </div>
      <div className="flex gap-3">
        <button className="bg-white text-purple">Let's Talk</button>
        <button className="bg-purple">Book Your Consultation</button>
      </div>
    </div>
  );
};

export default PinkContact;
