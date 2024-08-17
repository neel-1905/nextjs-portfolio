"use client";

import React from "react";
import Section from "../Section";
import Container from "../Container";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/lib/utils";

const EducationSection = () => {
  return (
    <Section id="education">
      <Container>
        <motion.h2 {...fadeAnimation} className="section_heading text-center">
          <span className="text-secondary">Education</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10">
          <motion.div
            initial={{
              scale: 1,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className="border-2 p-10 rounded-xl border-primary cursor-pointer"
          >
            <h3
              className="text text-primary capitalize font-medium text-lg md:text-xl lg:text-2xl
            
            "
            >
              Master of Science in Information Technology
            </h3>
            <p className="text-primary font-normal text-base mb-5 ">
              August 2023 - Present
            </p>

            <h4 className="text-primary font-normal text-lg lg:text-xl">
              V. G. Vaze College of Arts, Science and Commerce
            </h4>
          </motion.div>

          <motion.div
            initial={{
              scale: 1,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className="border-2 p-10 rounded-xl border-primary cursor-pointer"
          >
            <h3
              className="text text-primary capitalize font-medium text-lg md:text-xl lg:text-2xl
            
            "
            >
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-primary font-normal text-base mb-5 ">
              August 2019 - April 2022
            </p>

            <h4 className="text-primary font-normal text-lg lg:text-xl">
              V. G. Vaze College of Arts, Science and Commerce
            </h4>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default EducationSection;
