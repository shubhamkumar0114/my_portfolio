import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingTextAuto = () => {
  return (
    <TypeAnimation
      sequence={["Full Stack Developer", 1000]}
      wrapper="span"
      speed={40}
      style={{ fontSize: "1.4em", color: "#C0C0C0", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypingTextAuto;
