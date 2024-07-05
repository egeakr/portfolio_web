"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-10 md:px-20 mt-20 md:mt-40 w-full z-[10]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Cyber Security</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Ege
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Akar{" "}
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-full md:max-w-[600px]"
        >
          I am Ege, born in 2006. I am interested in software development and
          cybersecurity. Throughout my educational life, I have worked on many
          projects and earned several certificates. Currently, I have an
          intermediate level of knowledge in web programming and cybersecurity.{" "}
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mb-10 md:mb-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={400}
          width={400}
          className="md:height-auto md:width-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
