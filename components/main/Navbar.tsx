"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] z-50 px-10 backdrop-blur-xl">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Cyber Security
          </span>
        </a>

        <div className="hidden md:flex top-0 right-0 w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#mycv" className="cursor-pointer">
              My CV
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center md:hidden ml-auto">
          <button className="text-gray-200 focus:outline-none" onClick={toggleMenu}>
            {!isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} fixed md:relative top-[65px] md:top-auto decoration-white right-0 left-0 w-full md:w-[100%] px-[20px] py-[10px] rounded-b-lg border-t-[1px] border-[#cac9d3] md:border-none backdrop-filter backdrop-blur-md`}>
          <div className="flex flex-col items-center justify-between w-full h-auto border border-[#7042f861] bg-[#02000f] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-100">
            <a href="#about-me" className="cursor-pointer block md:inline-block mb-2 md:mb-0" onClick={closeMenu}>
              About me
            </a>
            <a href="#skills" className="cursor-pointer block md:inline-block mb-2 md:mb-0" onClick={closeMenu}>
              Skills
            </a>
            <a href="#mycv" className="cursor-pointer block md:inline-block mb-2 md:mb-0" onClick={closeMenu}>
              My CV
            </a>
            <a href="#contact" className="cursor-pointer block md:inline-block" onClick={closeMenu}>
              Contact
            </a>
            <div className={`flex mt-4 md:hidden ${isOpen ? "block" : "hidden"}`}>
              <Link href={"https://www.instagram.com/egee.akr?igsh=Z2ZybHlrODkza3Y%3D&utm_source=qr"}>
                <Image
                  src={"/instagramlog.png"}
                  alt={"instagram"}
                  width={24}
                  height={24}
                  className="mx-2"
                />
              </Link>
              <Link href={"https://www.linkedin.com/in/ege-akr"}>
                <Image
                  src={"/linkedin.png"}
                  alt={"instagram"}
                  width={24}
                  height={24}
                  className="mx-2"
                />
              </Link>
              <Link href={"https://github.com/egeakr"}>
                <Image
                  src={"/github.png"}
                  alt={"instagram"}
                  width={24}
                  height={24}
                  className="mx-2"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:flex top-0 right-0 flex flex-row gap-5">
          <Link href={"https://www.instagram.com/egee.akr?igsh=Z2ZybHlrODkza3Y%3D&utm_source=qr"}>
            <Image
              src={"/instagramlog.png"}
              alt={"instagram"}
              width={24}
              height={24}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/ege-akr"}>
            <Image
              src={"/linkedin.png"}
              alt={"instagram"}
              width={24}
              height={24}
            />
          </Link>
          <Link href={"https://github.com/egeakr"}>
            <Image
              src={"/github.png"}
              alt={"instagram"}
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
