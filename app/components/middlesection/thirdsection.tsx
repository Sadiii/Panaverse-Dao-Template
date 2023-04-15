"use client";
import React from "react";
import Image from "next/image";
import ReviewCard from "./review-card";
import { motion } from "framer-motion";
import { slideIn } from "@/motion/motion";
import { textVariant } from "@/motion/motion";

export default function Reviews() {
  return (
    <div className="bg-[url('/section3bg.svg')] bg-opacity-30 p-10 md:flex md:space-x-6 md:px-20 lg:space-x-8 md:p-16 lg:pl-36">
      <div className="py-5 space-y-6 md:w-3/5">
        <motion.div variants={textVariant(0.5)} initial="hidden" whileInView="show" className="text-slate-50 text-2xl md:text-3xl lg:text-4xl">
          Student Feedback
        </motion.div>
        <ReviewCard />
        <div className="flex space-x-2 text-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#11AD8E" />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#11AD8E" />
          </svg>
          <svg
            width="60"
            height="20"
            viewBox="0 0 60 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="20" rx="10" fill="#D9D9D9" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center md:justify-between md:flex-col md:w-2/5 md:float-right">
            {/* card */}
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="hidden md:block border border-[#11AD8E] bg-[#282B2E] bg-opacity-70 rounded-xl py-4 px-8 mr-3 md:-ml-14 md:-mt-10  md:mr-16 lg:mr-36 md:mb-24 ">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <Image
                  className="rounded-full"
                  src="/avatar.jpeg"
                  height="50"
                  width="50"
                  alt="logo"
                />
                <div className="">
                  <p className="text-base underline text-[#11AD8E]">Sadia.z</p>
                  <p className="text-white text-xs">Data Scientist</p>
                </div>
              </div>
              <svg
                width="20"
                height="32"
                viewBox="0 0 44 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2222 0H7.33333C3.28957 0 0 3.06021 0 6.82203V11.37C0 15.1319 3.28957 18.1921 7.33333 18.1921H12.2222C13.0071 18.1921 13.7492 18.0467 14.4587 17.8331C13.4731 23.189 8.48075 27.2881 2.44444 27.2881C1.09332 27.2881 0 28.3052 0 29.5621C0 30.819 1.09332 31.8361 2.44444 31.8361C11.8785 31.8361 19.5556 24.6944 19.5556 15.9181V6.82203C19.5556 3.06021 16.266 0 12.2222 0ZM36.6667 0H31.7778C27.734 0 24.4444 3.06021 24.4444 6.82203V11.37C24.4444 15.1319 27.734 18.1921 31.7778 18.1921H36.6667C37.4515 18.1921 38.1936 18.0467 38.9032 17.8331C37.9176 23.189 32.9252 27.2881 26.8889 27.2881C25.5378 27.2881 24.4444 28.3052 24.4444 29.5621C24.4444 30.819 25.5378 31.8361 26.8889 31.8361C36.323 31.8361 44 24.6944 44 15.9181V6.82203C44 3.06021 40.7104 0 36.6667 0Z"
                  fill="#20B486"
                />
                <path
                  d="M14.9505 17.9236L15.0987 17.1183L14.3146 17.3543C13.6369 17.5583 12.9448 17.6921 12.2222 17.6921H7.33333C3.53107 17.6921 0.5 14.8223 0.5 11.37V6.82203C0.5 3.36977 3.53107 0.5 7.33333 0.5H12.2222C16.0245 0.5 19.0556 3.36977 19.0556 6.82203V15.9181C19.0556 24.3848 11.637 31.3361 2.44444 31.3361C1.33481 31.3361 0.5 30.5095 0.5 29.5621C0.5 28.6148 1.33481 27.7881 2.44444 27.7881C8.7031 27.7881 13.9179 23.5348 14.9505 17.9236ZM39.3949 17.9236L39.5431 17.1183L38.759 17.3543C38.0813 17.5583 37.3892 17.6921 36.6667 17.6921H31.7778C27.9755 17.6921 24.9444 14.8223 24.9444 11.37V6.82203C24.9444 3.36977 27.9755 0.5 31.7778 0.5H36.6667C40.4689 0.5 43.5 3.36977 43.5 6.82203V15.9181C43.5 24.3848 36.0815 31.3361 26.8889 31.3361C25.7793 31.3361 24.9444 30.5095 24.9444 29.5621C24.9444 28.6148 25.7793 27.7881 26.8889 27.7881C33.1475 27.7881 38.3623 23.5348 39.3949 17.9236Z"
                  stroke="black"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
            <p className="text-slate-100 py-2 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.{" "}
            </p>
            <svg
              width="20"
              height="32"
              viewBox="0 0 44 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7778 0H36.6667C40.7104 0 44 3.06021 44 6.82203V11.37C44 15.1319 40.7104 18.1921 36.6667 18.1921H31.7778C30.9929 18.1921 30.2508 18.0467 29.5413 17.8331C30.5269 23.189 35.5192 27.2881 41.5556 27.2881C42.9067 27.2881 44 28.3052 44 29.5621C44 30.819 42.9067 31.8361 41.5556 31.8361C32.1215 31.8361 24.4444 24.6944 24.4444 15.9181V6.82203C24.4444 3.06021 27.734 0 31.7778 0ZM7.33334 0H12.2222C16.266 0 19.5556 3.06021 19.5556 6.82203V11.37C19.5556 15.1319 16.266 18.1921 12.2222 18.1921H7.33334C6.5485 18.1921 5.80637 18.0467 5.09683 17.8331C6.08243 23.189 11.0748 27.2881 17.1111 27.2881C18.4622 27.2881 19.5556 28.3052 19.5556 29.5621C19.5556 30.819 18.4622 31.8361 17.1111 31.8361C7.67702 31.8361 0 24.6944 0 15.9181V6.82203C0 3.06021 3.28957 0 7.33334 0Z"
                fill="#20B486"
              />
              <path
                d="M29.0495 17.9236L28.9013 17.1183L29.6854 17.3543C30.3631 17.5583 31.0552 17.6921 31.7778 17.6921H36.6667C40.4689 17.6921 43.5 14.8223 43.5 11.37V6.82203C43.5 3.36977 40.4689 0.5 36.6667 0.5H31.7778C27.9755 0.5 24.9444 3.36977 24.9444 6.82203V15.9181C24.9444 24.3848 32.363 31.3361 41.5556 31.3361C42.6652 31.3361 43.5 30.5095 43.5 29.5621C43.5 28.6148 42.6652 27.7881 41.5556 27.7881C35.2969 27.7881 30.0821 23.5348 29.0495 17.9236ZM4.60509 17.9236L4.45689 17.1183L5.24097 17.3543C5.91866 17.5583 6.61077 17.6921 7.33334 17.6921H12.2222C16.0245 17.6921 19.0556 14.8223 19.0556 11.37V6.82203C19.0556 3.36977 16.0245 0.5 12.2222 0.5H7.33334C3.53107 0.5 0.5 3.36977 0.5 6.82203V15.9181C0.5 24.3848 7.91852 31.3361 17.1111 31.3361C18.2207 31.3361 19.0556 30.5095 19.0556 29.5621C19.0556 28.6148 18.2207 27.7881 17.1111 27.7881C10.8525 27.7881 5.63768 23.5348 4.60509 17.9236Z"
                stroke="black"
                strokeOpacity="0.1"
              />
            </svg>
          </motion.div>
          <motion.img variants={slideIn('right', 'tween', 0.4, 1)} initial="hidden" whileInView="show" src="/vrwalibaji.svg" alt="Avatar" height="500" width="500" />
        
      </div>
    </div>
  );
}
