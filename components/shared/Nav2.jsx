import Image from 'next/image'
import React from 'react'
import { MdEmail, MdPhone } from "react-icons/md";
import logo from '../../public/graduateconsultancylogo.png'
import Link from 'next/link';

const Nav2 = () => {
  return (
    <div className='hidden lg:flex justify-between py-5 max-w-6xl mx-auto'>
      <div>
        <Link href="/">
        <Image className='w-48' src={logo}></Image></Link>
      </div>
      <div className='flex gap-5'>
            <div className='flex gap-5 items-center'>
                <p className=' text-xl'><MdEmail /></p>
                <div>
                    <p className='text-logoRed text-xl'>Send Email</p>
                    <p className=' text-xl'>info@graduateconsultancy.com</p>
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <p className=' text-xl'><MdPhone></MdPhone></p>
                <div>
                    <p className='text-logoRed text-xl'>Call Us</p>
                    <p className=' text-xl'>(+880)1330993330</p>
                </div>
            </div>
        </div>

      </div>
  )
}

export default Nav2
