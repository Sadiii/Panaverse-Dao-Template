import React from "react";
import Image from "next/image";

export default function Cities() {
  return (
    <div className="md:flex md:justify-center md:items-center px-2 md:px-6 lg:px-16 md:py-7 lg:py-16">
      <div className="bg-[url('/cities-theme.svg')] py-20 px-10 md:py-20 lg:py-28 rounded-r-lg ">
        <p className="text-[#11AD8E] font-bold text-2xl text-center md:text-3xl lg:text-4xl  ">Operational Cities</p>
      </div>
      <div className="px-10 flex justify-center items-center flex-wrap  md:gap-1 md:grid md:grid-cols-5 md:-ml-16 " >
        <Image className="" src="/karachi.svg" alt = "karachi" width="180" height="100"/>
        <Image  src="/islamabad.svg" alt = "islamabad" width="180" height="100"/>
        <Image  src="/peshawar.svg" alt = "peshawer" width="180" height="100"/>
        <Image  src="/lahore.svg" alt = "islamabad" width="180" height="100"/>
        <div className="relative">
        <Image  src="/comingsoon.svg" alt = "islamabad" width="180" height="100"/>
        <div className="absolute inset-0 flex justify-center items-center px-3">
            <h1 className="text-[#11AD8E] text-xl md:text-2xl lg:text-3xl text-center px-3">Coming Soon</h1>
        </div>
        </div>
        
      </div>
    </div>
  );
}
