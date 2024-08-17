import { AboutMeSection } from "@/components/about";
import EducationSection from "@/components/education/EducationSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";
import React from "react";

const Home = () => {
  return (
    <main className="h-full">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
    </main>
  );
};

export default Home;
