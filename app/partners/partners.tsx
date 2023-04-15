import React from 'react'
import Image from 'next/image'

export default function Partner() {
  let images = [{img_name:'/piaic.svg', img_width:50},
  {img_name:'/psx.png', img_width:55},
  {img_name:'/panacloud.svg', img_width:130},
  {img_name:'/sylani.svg', img_width:150},
  {img_name:'/cecos.svg', img_width:90},
  {img_name:'/bahria.svg', img_width:60},
  {img_name:'/air-uni.svg', img_width:60}]
  return (
    <div className='py-10 '>
      <div className='flex items-center justify-start'>
      <Image className='self-start' src='/journey.svg' alt= "product owner" width= "100" height= "200"/>
        <p className='text-[#11AD8E] text-2xl self-center text-center mx-auto font-bold md:text-3xl lg:text-4xl '>Our Partners</p>
      </div>
      <div className='bg-[#282B2E] bg-opacity-70 px-6 py-3 flex items-center justify-center space-x-5 flex-wrap'>
      {images.map((image)=>{
        return(
          <Image className='' src={image.img_name} alt= "product owner" width= {image.img_width} height= "100"/>
        )
      })}
      </div>
    </div>
  )
}
