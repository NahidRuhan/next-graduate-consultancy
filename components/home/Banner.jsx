"use client"

import { useState, useEffect } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import banner1 from '@/public/assets/home/banner1.jpg';
import banner2 from '@/public/assets/home/banner2.jpg';
import banner3 from '@/public/assets/home/banner3.jpg';
import banner4 from '@/public/assets/home/banner4.jpg';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment current slide with wrap around logic
      setCurrentSlide(current => (current % 4) + 1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run only once when component mounts


  return (
    <>
      <div className="carousel w-screen lg:w-full relative">
        <div id="item1" className={`carousel-item w-full -full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
          <Image src={banner1} className="w-full h-full" alt="Banner 1" />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
            <p className="text-base md:text-2xl lg:text-6xl font-extrabold w-2/3">Greetings! Your Visa Adventure Begins Here</p>
            <Link href="/contact-us"><button className='btn btn-sm my-3 bg-logoRed text-white'>Inquiry now <span className='text-2xl my-1'><FaArrowAltCircleRight /></span></button></Link>
          </div>
        </div>
        <div id="item2" className={`carousel-item w-full h-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
          <Image src={banner2} className="w-full h-full" alt="Banner 2" />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
            <p className="text-base md:text-2xl lg:text-6xl font-extrabold w-2/3">Build an Unlimited Study Abroad Career with Graduate Consultancy</p>
            <Link href="/contact-us"><button className='btn btn-sm my-3 bg-logoRed text-white'>Inquiry now <span className='text-2xl my-1'><FaArrowAltCircleRight /></span></button></Link>
          </div>
        </div>
        <div id="item3" className={`carousel-item w-full h-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
          <Image src={banner3} className="w-full h-full" alt="Banner 3" />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
            <p className="text-base md:text-2xl lg:text-6xl font-extrabold w-2/3">Prepare Today, Succeed Tomorrow; Visa Expert at Your Service</p>
            <Link href="/contact-us"><button className='btn btn-sm my-3 bg-logoRed text-white'>Inquiry now <span className='text-2xl my-1'><FaArrowAltCircleRight /></span></button></Link>
          </div>
        </div>
        <div id="item4" className={`carousel-item w-full h-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
          <Image src={banner4} className="w-full h-full" alt="Banner 4" />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
            <p className="text-base md:text-2xl lg:text-6xl font-extrabold">Student Visa for Canada</p>
            <Link href="/contact-us"><button className='btn btn-sm my-3 bg-logoRed text-white'>Inquiry now <span className='text-2xl my-1'><FaArrowAltCircleRight /></span></button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
