"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full h-full" id="mycv">
      <div className="absolute top-0 z-[5] w-auto h-auto">
        <motion.div
          variants={slideInFromTop}
          className="text-[30px] md:text-[40px] font-medium text-center text-gray-200 mt-5 md:mt-0"
        >
          My
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            CV{" "}
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] md:translate-y-0 absolute z-[20] w-auto h-auto mt-10 md:mt-0">
        <Link href="/mycv.pdf">
          <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={50}
              height={50}
              className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={70}
              height={70}
              className="z-10"
            />
          </div>
        </Link>
        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px] md:text-[14px]">My CV</h1>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute bottom-[10px] px-[5px] z-[5]">
        <div className="text-[14px] md:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full h-full absolute top-0 z-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
