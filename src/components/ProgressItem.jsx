import { motion } from "framer-motion";
import React from "react";
import { ProgressData } from "../constants";

const ProgressItem = () => {
  return (
    <>
      {ProgressData.map((progress, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.41, 0.2, 0.7],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          key={index}
          className="flex lg:flex-row flex-col items-center"
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
          <div className="lg:w-[150%]">
            <img src={progress?.icon} />
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ProgressItem;
