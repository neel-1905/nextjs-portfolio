"use client";
import React from "react";
import Section from "../Section";
import Container from "../Container";
import Image from "next/image";
import AboutCardText from "./AboutCardText";
import { motion } from "framer-motion";
import AnimatedButton from "../AnimatedButton";
import { techStack } from "@/constants";
import { fadeAnimation } from "@/lib/utils";

const AboutMeSection = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            whileHover="hover"
            className="min-h-52 border-2 border-primary rounded-xl py-10 relative cursor-pointer "
          >
            <AboutCardText
              text="Focused on understanding and exceeding client expectations"
              textStyles="bottom-5 md:bottom-10 left-5 md:left-10 max-w-md"
            />
            <Image
              src={`/assets/about1.png`}
              fill
              alt="About Me Clients"
              className="object-cover rounded-xl"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              whileHover={"hover"}
              className="min-h-52 border-2 border-primary rounded-xl relative cursor-pointer glass"
            >
              <Image
                src={`/assets/about2.png`}
                fill
                alt="Timezones"
                className="object-cover rounded-xl"
              />
              <AboutCardText
                text="Flexible and comfortable collaborating across various time zones."
                textStyles="top-10 left-5 md:left-10 max-w-md"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              whileHover={"hover"}
              className="min-h-52 border-2 border-primary rounded-xl relative cursor-pointer glass"
            >
              <AboutCardText
                text="Passionate about development and the ever-evolving tech"
                textStyles="top-10 left-5 md:left-10 max-w-md"
              />
              <Image
                src={`/assets/about3.png`}
                height={358}
                width={250}
                alt="Passion"
                className="object-cover rounded-xl absolute bottom-0 right-0"
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            whileHover="hover"
            className="col-span-1 md:col-span-2 flex justify-center items-end min-h-52 border-2 border-primary rounded-xl py-10 relative cursor-pointer "
          >
            <AboutCardText
              text="Want to get projects done?"
              textStyles="top-1/3"
            />
            <Image
              src={`/assets/about4.png`}
              fill
              alt="Contact Bg"
              className="object-cover"
            />
            <AnimatedButton>Contact Me</AnimatedButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            whileHover="hover"
            className="glass grid gap-6 grid-cols-1 lg:grid-cols-2 p-10 col-span-1 md:col-span-3 min-h-52 border-2 border-primary rounded-xl py-10 relative cursor-pointer "
          >
            <div className="">
              <motion.h2
                {...fadeAnimation}
                className={`about_card-text text-center lg:text-left text-primary`}
              >
                My Skill Set
              </motion.h2>
            </div>

            <div className="text-primary grid grid-cols-2 gap-2 mx-auto md:ml-auto w-max">
              {techStack.map((tech, index) => (
                <motion.div
                  initial={{ x: 0 }}
                  variants={{
                    hover: {
                      x: 10,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        delay: index * 0.1,
                      },
                    }, // Define the animation when hovered
                  }}
                  animate={{
                    x: 0, // Reverse animation to the original position
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      delay: index * 0.1,
                    },
                  }}
                  key={tech}
                  className="w-32 h-12 border-2 border-primary rounded-xl flex justify-center items-center"
                >
                  <span className="text-sm font-bold">{tech}</span>
                </motion.div>
              ))}
              {/* <div className="w-32 h-16 border"></div> */}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutMeSection;
