"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutCardText = ({
  text,
  textStyles,
}: {
  text: string;
  textStyles: string;
}) => {
  return (
    <motion.h2
      initial={{ x: 0 }}
      variants={{
        hover: { x: 10, transition: { type: "spring", stiffness: 300 } }, // Define the animation when hovered
      }}
      //   whileHover={{
      //     x: 10,
      //   }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`about_card-text absolute z-[1] text-left ${textStyles} text-primary`}
    >
      {text}
    </motion.h2>
  );
};

export default AboutCardText;
