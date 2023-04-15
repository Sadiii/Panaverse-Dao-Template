"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/motion/motion";
import { slideIn } from "@/motion/motion";

export default function Introduction() {
  
  return (
    <motion.div  initial="hidden" whileInView="show" viewport={{once:false, amount:0.25}} className="md:flex md:justify-between md:items-center lg:px-20 ">
      {/* Text Portion */}
      <div className="text-slate-50 py-8 space-y-5 md:space-y-8 px-4 md:px-10 md:w-1/2">
        <motion.div variants={textVariant(0.7)} className="font-bold text-2xl md:text-3xl lg:text-5xl">Becomes <br/><span className="text-[#11AD8E]">Certified Web 3.0</span> and <span className="text-[#11AD8E]">Metaverse Developer</span></motion.div>
        <motion.div variants={textVariant(0.9)} className="md:text-lg lg:text-xl">Launch Your Dev Career With Web 3 and Metaverse Getting Ready for the Next Generation of the Internet</motion.div>
        <motion.button
        variants={textVariant(0.9)}
        whileHover={{scale: 1.1}}
        whileTap = {{scale: 0.9}}
            type="button"
            className="text-slate-800 bg-[#11AD8E] px-4 py-2 rounded-md md:text-base font-semibold"
          >
            Join Now
          </motion.button>
      </div>
      {/* Image Portion */}
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="md:w-1/2 md:float-right md:mt-10">
        <Image className="md:float-right" src= "/banner-img-1.svg" alt="banner" width="500" height= "200"/>
      </motion.div>
    </motion.div>
  );
}
