"use client";

import Image from "next/image";
import React from "react";
import ProjectDescription from "./ProjectDescription";
import { motion } from "framer-motion";
import ProjectFooter from "./ProjectFooter";

type ProjectType = any;

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    // relative glass px-6 py-9 rounded-xl border-2 border-primary
    <motion.div
      className="h-full"
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
    >
      <motion.div
        className="flex w-full h-full flex-col gap-7 cursor-pointer "
        whileHover={"hover"}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <div className="px-8  bg-[#13162D] rounded-xl overflow-hidden max-h-80">
          <Image
            src={project.thumbnail}
            width={450}
            height={450}
            alt="Steelora"
            className="object-contain rotate-2 mx-auto mt-7 rounded-xl"
          />
        </div>

        <ProjectDescription
          title={project.title}
          description={project.description}
        />

        <ProjectFooter techStack={project.techStack} link={project.link} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
