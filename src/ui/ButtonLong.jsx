import React from "react";

const ButtonLong = ({
  bg = "white",
  bd = false,
  fc = "black",
  text = "your button",
}) => {
  return (
    <button
      className={`uppercase bg-${bg} text-${fc} ${
        bd ? "border-[1px] border-black" : "outline-none border-none"
      } px-20 font-inter py-2 rounded-lg text-sm`}
    >
      {text}
    </button>
  );
};

export default ButtonLong;
