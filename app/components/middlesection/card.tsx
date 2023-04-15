'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '@/motion/motion'
import { textVariant } from '@/motion/motion'

export default function Card() {
  let cards_data = [{name:'Product Owner', img_location: '/productowner.svg'},
{name:'Freelancer', img_location: '/freelancer.svg'},
{name:'Access to Global Market by DAO', img_location: '/globalmarket.svg'},
{name:'Boost Economy', img_location: '/boosteconomy.svg'}]

const [cards, setCards]=useState(cards_data)
  return (
    <div className='py-6 px-28 lg:px-20 space-y-10 sm:grid sm:grid-cols-2 sm:space-x-5 md:grid lg:grid-cols-4'>
      {cards.map((card)=>{
        return(
          <motion.div variants={slideIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className='flex flex-col items-center justify-between space-y-8 border py-10 lg:py-0 border-[#11AD8E] bg-[#FFFFFF] bg-opacity-10 rounded-lg first:sm:mt-10 first:sm:ml-5 first:pb-6'>
        <motion.div variants={textVariant(0.2)} initial="hidden" whileInView="show"  className='text-slate-100 text-center text-2xl px-7 md:text-3xl lg:text-4xl lg:pt-10'>{card.name}</motion.div>
        <Image className='md:w-40 md:h-56 lg:pb-5' src={card.img_location} alt= "product owner" width= "100" height= "200"/>
      </motion.div>
        )
      })}
      
    </div>
  )
}
