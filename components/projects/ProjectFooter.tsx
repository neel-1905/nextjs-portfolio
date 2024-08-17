"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ProjectFooter = ({
  techStack,
  link,
}: {
  techStack: any[];
  link: string;
}) => {
  return (
    <div className="mt-auto flex w-full items-center justify-between">
      <div className="flex items">
        {techStack.map((tech, index) => {
          let translate = index * 8;
          return (
            <div
              key={tech.name}
              className={`size-12 rounded-full flex items-center border border-white/[0.2] justify-center tech_bg
                `}
              style={{ transform: `translateX(-${translate}px)` }}
            >
              <Image src={tech.icon} height={24} width={24} alt={tech.name} />
            </div>
          );
        })}
      </div>

      <div>
        <Link
          target="_blank"
          href={link}
          className="capitalize project-card_link flex"
        >
          <motion.span
            initial={{ x: 0 }}
            variants={{
              hover: {
                opacity: 1,
                x: -15,
                transition: {
                  duration: 2,
                  type: "spring",
                  stiffness: 300,
                },
              },
            }}
          >
            See it live
          </motion.span>
          <motion.div
            className="mt-1"
            initial={{ opacity: 0, x: -10, position: "absolute" }}
            variants={{
              hover: {
                opacity: 1,
                x: 0,
                position: "static",
                transition: {
                  duration: 2,
                  type: "spring",
                  stiffness: 300,
                  delay: 0.2,
                },
              },
            }}
          >
            <Image
              src={`/assets/right-arrow.svg`}
              height={24}
              width={24}
              alt="Link"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectFooter;
