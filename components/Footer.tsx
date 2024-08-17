"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/lib/utils";
import AnimatedButton from "./AnimatedButton";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "@/constants";

const Footer = () => {
  //   const handleMailTo = () => {
  //     const newWindow = window.open("about:blank", "_blank");
  //     newWindow
  //       ? (newWindow.location.href =
  //           "mailto:neelnarwadkar1905@gmail.com?subject=Let's Collaborate")
  //       : null;
  //   };

  return (
    <footer className="grid_bg" id="contact">
      <Container>
        <div className="min-h-screen flex flex-col justify-between items-center">
          <motion.div
            {...fadeAnimation}
            className="max-w-7xl mx-auto px-3 flex-1 flex flex-col justify-center"
          >
            <h2 className="section_heading text-center max-w-3xl">
              Let&apos;s create something{" "}
              <span className="text-secondary"> amazing </span>together.{" "}
              <span className="text-secondary">Get in touch!</span>
            </h2>

            <p className="text-center max-w-3xl text-primary lg:text-xl mb-5">
              Your next big idea deserves the perfect partner. Let&apos;s
              connect!
            </p>

            <div className="flex justify-center">
              <AnimatedButton>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:neelnarwadkar1905@gmail.com?subject=Let's Collaborate`}
                >
                  Contact Me
                </a>
              </AnimatedButton>
            </div>
          </motion.div>

          <div className="w-full text-primary py-5 flex gap-4 justify-center sm:justify-between items-center flex-wrap">
            <span className="font-light">
              Copyright ©{new Date().getFullYear()} Neel Narwadkar
            </span>

            <div className="flex gap-4">
              {socialMedia.map((item) => (
                <Link key={item.name} target="_blank" href={item.link}>
                  <div className="size-10 flex justify-center items-center border-2 border-primary rounded-xl">
                    <Image
                      src={item.icon}
                      height={20}
                      width={20}
                      alt={item.name}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
