"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Toggler from "./toggle";
import { motion } from "framer-motion";

export default function Navbar() {
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1,
      },
    },
  };
  let [Nav, setNav] = useState(false);
  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className=" bg-[#F5F5F5] md:flex bg-opacity-10 py-3 md:px-6 lg:px-16 justify-between md:justify-between  shadow-md shadow-black px-5 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image src="/logo.svg" width={145} height="100" alt="logo" />
        <div className="md:hidden">
          <Toggler />
        </div>
        {/* Responsive button */}
        <div className="md:hidden ">
          <button
            onClick={() => setNav(!Nav)}
            className="text-slate-300 hover:text-white focus:border focus:border-slate-400 rounded-md outline-none  p-2"
          >
            {Nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Menu bar */}
      <div
        className={`${
          Nav ? "block" : "hidden"
        } md:flex md:justify-between  items-center md:space-x-5`}
      >
        <div className=" md:space-x-16 md:flex py-5">
          <ul className="md:flex md:space-x-5 lg:space-x-8 space-y-5 md:space-y-0 text-slate-100 md:items-center md:justify-start md:text-lg lg:text-2xl ">
            <li className=" cursor-pointer ">Home</li>
            <li className=" cursor-pointer ">About</li>
            <li className="flex items-center cursor-pointer ">
              <p>Course</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="white"
                />
              </svg>
            </li>
            <li className=" cursor-pointer ">Contact</li>
          </ul>
        </div>
        <div className="md:flex md:items-center md:space-x-5 lg:space-x-8  md:pl-5 lg:pl-10">
          <div className={`${Nav ? "hidden" : "block"}`}>
            <Toggler />
          </div>
          <div className="md:flex md:items-center pb-8 md:pb-0 md:py-0">
            <button
              type="button"
              className="text-slate-800 bg-[#11AD8E] px-4 py-2 rounded-md md:text-sm font-semibold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
