"use client";

import React from "react";
import Section from "../Section";
import Container from "../Container";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/lib/utils";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <Section id="experience">
      <Container>
        <motion.h2 {...fadeAnimation} className="section_heading text-center">
          My <span className="text-secondary">professional</span> work
          <span className="text-secondary"> experience</span>
        </motion.h2>

        <motion.div
          initial={{ y: 40 }}
          whileInView={{
            y: 0,
            transition: {
              duration: 0.5,
              type: "spring",
              // stiffness: 300,
            },
          }}
          whileHover={{
            y: -10,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 300,
            },
          }}
          className="cursor-pointer min-h-52 py-8 px-10 max-w-3xl mx-auto border-2 border-primary rounded-xl flex flex-wrap w-full items-center gap-10"
        >
          <div className="w-full md:w-1/4 flex justify-center items-center">
            <Image
              src={`/assets/developer.svg`}
              height={150}
              width={150}
              alt="Frontend Developer"
              className=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-4 text-primary">
            <div>
              <h3 className="capitalize font-medium text-lg md:text-xl lg:text-2xl">
                full stack developer
              </h3>
              <h4 className="text-primary font-light text-sm">
                June 2023 - May 2024
              </h4>
            </div>
            <ul className="list-disc">
              <li className="text-base">
                Engineered high-quality, pixel-perfect, and responsive user
                interfaces using TypeScript, React.js, Next.js, and state
                management tools like Context, Redux, and Redux Toolkit.
              </li>
              <li className="text-base">
                Developed RESTful APIs for efficient communication between
                front-end and back end using Node.js and Express.js.
              </li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
