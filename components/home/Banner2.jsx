"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '@/public/assets/home/banner1.jpg';
import banner2 from '@/public/assets/home/banner2.jpg';
import banner3 from '@/public/assets/home/banner3.jpg';
import banner4 from '@/public/assets/home/banner4.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
const Banner2 = () => {
  return (
    <div className=''>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Image src={banner1} className="h-screen w-full bg-contain object-cover" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><Image src={banner2} className="h-screen w-full bg-contain object-cover" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><Image src={banner3} className="h-screen w-full bg-contain object-cover" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><Image src={banner4} className="h-screen w-full bg-contain object-cover" alt="Banner 1" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner2
