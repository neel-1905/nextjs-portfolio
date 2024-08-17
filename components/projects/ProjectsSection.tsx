"use client";

import React, { useState } from "react";
import Section from "../Section";
import Container from "../Container";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/constants";
import AnimatedButton from "../AnimatedButton";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/lib/utils";

const ProjectsSection = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  return (
    <Section id="projects">
      <Container>
        <motion.h2 {...fadeAnimation} className="section_heading text-center">
          A selection of <span className="text-secondary">recent projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10">
          {projectsData.slice(0, visibleItems).map((item) => (
            <ProjectCard key={item.title} project={item} />
          ))}
        </div>
        {visibleItems > projectsData.length ? null : (
          <div className="flex items-center justify-center mt-12">
            <AnimatedButton onClick={loadMore}>Load More</AnimatedButton>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default ProjectsSection;
