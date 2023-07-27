import React from "react";
import Form from "./Form";
import ImageComp from "./ImageComp";
import PinkContact from "./PinkContact";

const Contact = () => {
  return (
    <div className="bg-black lg:px-40 px-16 flex flex-col justify-center  py-32 gap-12 ">
      <h2 className="text-5xl font-bold">
        Get in Touch with our <span className="blue-accent">Team.</span>
      </h2>
      <div className="flex  lg:flex-row flex-col justify-center gap-8 m-auto">
        <Form />
        <ImageComp />
      </div>
      <div className="flex justify-center">
        <PinkContact />
      </div>
    </div>
  );
};

export default Contact;
