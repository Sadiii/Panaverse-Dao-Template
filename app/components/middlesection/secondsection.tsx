"use client"
import React from 'react'
import Image from 'next/image'
import Card from './card'
import { motion } from 'framer-motion'
import { slideIn, textVariant } from '@/motion/motion'
 
export default function SecondSection() {
  return (
    <>
    <motion.div className=' flex flex-col items-center justify-center py-4 md:flex-row md:px-6 lg:px-16 md:justify-center md:items-center lg:h-[600px]'>
      {/* Image Section */}
        <motion.div variants={slideIn('left', 'sweep', 0.2, 1)} initial="hidden" whileInView="show" className='content-center md:w-1/2'>
            <Image src="/personsittingoncouch.svg" alt="persononcouch" height="800" width="500"></Image>
        </motion.div>
        {/* Card Section */}
        <motion.div variants={textVariant(0.5)} initial="hidden" whileInView="show" className='bg-[#FFFFFF] bg-opacity-10 mx-5 p-8 rounded-lg space-y-2 md:w-1/2 lg:space-y-4 md:text-center md:-mt-24 md:-ml-20 lg:-mt-28 lg:-ml-24 xl:-mt-28 xl:-ml-28'>
        <motion.div variants={textVariant(0.7)} initial="hidden" whileInView="show" className='text-[#11AD8E] text-2xl font-bold lg:text-4xl'>The Program in a Nutshell</motion.div>
        <motion.div variants={textVariant(0.9)} initial="hidden" whileInView="show" className='text-[#11AD8E] text-lg underline lg:text-2xl'>Earn While You Learn</motion.div>
        <motion.div variants={textVariant(1)} initial="hidden" whileInView="show" className='text-slate-100 text-sm lg:text-lg'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</motion.div>
        </motion.div>
    </motion.div>
    {/* Join part */}
    <div className='px-10 py-10 space-y-3 md:px-24 lg:px-36'>
        <motion.div variants={textVariant(0.5)} initial="hidden" whileInView="show" className='text-[#11AD8E] text-2xl font-bold text-center lg:text-4xl md:text-3xl '>Why to join</motion.div>
        <motion.div variants={textVariant(0.7)} initial="hidden" whileInView="show" className='text-slate-100 text-sm text-center lg:text-lg md:text-base'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</motion.div>
    </div>
    {/* Cards part */}
    <div className='pb-10'>
        <Card/>
    </div>
    </>
  )
}
