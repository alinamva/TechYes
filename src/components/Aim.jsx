import React from "react";
import { AimsData } from "../constants";
import { motion } from "framer-motion";

const Aim = () => {
  return (
    <>
      {AimsData.map((aim, index) => {
        return (
          <div
            key={index}
            className="bg-transparent w-72 gap-10 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <img src={aim.icon} alt="aim" />
            </motion.div>
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
