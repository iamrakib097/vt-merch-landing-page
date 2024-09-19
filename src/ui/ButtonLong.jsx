import React from "react";
import { motion } from "framer-motion";

const ButtonLong = ({
  bg = "white",
  bd = false,
  fc = "black",
  text = "your button",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`uppercase bg-${bg} text-${fc} ${
        bd ? "border-[1px] border-black" : "outline-none border-none"
      } px-20 font-inter py-2 rounded-lg text-sm `}
    >
      {text}
    </motion.button>
  );
};

export default ButtonLong;
