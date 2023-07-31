import React from "react";
import Form from "./Form";
import ImageComp from "./ImageComp";
import PinkContact from "./PinkContact";

const Contact = () => {
  return (
    <div className="bg-black lg:px-40 px-10 flex flex-col justify-center  lg:py-32 py-16 gap-12 ">
      <h2 className="lg:text-5xl text-2xl font-bold">
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
