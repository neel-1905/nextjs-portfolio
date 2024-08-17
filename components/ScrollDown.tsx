"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/constants/scrollDown.json";

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Assuming the next section starts right after the first section
      if (scrollPosition > windowHeight * 0.2) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: isVisible ? 1 : 0,
        transition: { delay: 1.5 },
      }}
      className="size-20 absolute bottom-20"
    >
      <Lottie animationData={animationData} loop={true} />
    </motion.div>
  );
};

export default ScrollDown;
