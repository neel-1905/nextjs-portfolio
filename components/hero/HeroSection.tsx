"use client";

import Image from "next/image";
import React from "react";
import AnimatedButton from "../AnimatedButton";
import ScrollDown from "../ScrollDown";
// import { motion } from "framer-motion";

const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/files/resume.pdf"; // Replace with the actual path to your PDF file in the public folder
    link.download = "Resume.pdf"; // Replace with the desired file name
    link.click();
  };

  return (
    <section
      id="about"
      className="h-screen pb-16 pt-20 lg:pb-20 lg:pt-36 flex justify-center items-center grid_bg"
    >
      {/* <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "keyframes", stiffness: 50, duration: 3 }}
      > */}
      <div>
        <h3 className="text-center font-light text-primary mb-7 uppercase tracking-[0.2em]">
          Shaping the web
        </h3>
        <h1 className="mb-7 capitalize text-primary font-bold text-3xl leading-[40px] sm:text-4xl sm:leading-[48px] md:text-5xl md:leading-[56px] lg:text-6xl lg:leading-[64px] xl:text-7xl xl:leading-[72px] text-center md:max-w-4xl lg:max-w-5xl mx-auto tracking-tighter">
          Developing <span className="text-secondary">pixel-perfect</span> and{" "}
          <span className="text-secondary">seamless</span> user experiences
        </h1>
        <h2 className="mb-7 text-center text-primary text-lg md:text-xl lg:text-2xl font-normal md:max-w-2xl lg:max-w-3xl mx-auto">
          Hi! I am Neel, a Full Stack Web Developer based in India.
        </h2>

        <div className="flex justify-center">
          <AnimatedButton onClick={downloadResume}>
            My Resume{" "}
            <Image
              src={`/assets/resume-icon.svg`}
              height={18}
              width={20}
              alt="Resume"
            />
          </AnimatedButton>
        </div>
        {/* </motion.div> */}
      </div>
      <ScrollDown />
    </section>
  );
};

export default HeroSection;
