"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from '@/public/assets/Logo.svg'
import canadaFlag from "@/public/assets/canada Flag-01.png"
import USAFlag from "@/public/assets/USA Flag-01.png"
import AustraliaFlag from "@/public/assets/Australia Flag-01.png"
import UKFlag from "@/public/assets/UK Flag-01.png"

const Nav = () => {

     const router = useRouter();

     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
     const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
   
     const toggleDropdown = () => {
       setIsDropdownOpen(!isDropdownOpen);
     };
   
     const closeDropdown = () => {
       setIsDropdownOpen(false);
     };
   
     const toggleNavDrawer = () => {
       setIsNavDrawerOpen(!isNavDrawerOpen);
     };
   

  return (
    <>
      <div className="navbar z-10 sticky top-0 font-bold bg-logoRed max-h-14 lg:max-h-24 justify-between">
        <div className="">
          <div className="dropdown">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={toggleNavDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {/* Navigation Drawer for Mobile View */}
            <div className={`border border-gray-200 shadow-lg fixed top-0 left-0 w-3/4 bg-white h-full z-50 transform transition-transform ${isNavDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
              <button
                className="btn btn-ghost"
                onClick={toggleNavDrawer}
              >
                Close
              </button>
              <ul className="menu p-4">
                <li onClick={closeDropdown}>
                  <Link className='rounded-lg hover:bg-logoRed hover:text-white' href="/">Home</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className='rounded-lg hover:bg-logoRed hover:text-white' href="/services"><span className="hover:text-white">Services</span></Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className='rounded-lg hover:bg-logoRed hover:text-white' href="/study-abroad">Study Abroad</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className='rounded-lg hover:bg-logoRed hover:text-white' href="/about-us">About us</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className='rounded-lg hover:bg-logoRed hover:text-white' href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <Image onClick={() => router.push('/')}
            className="hidden lg:flex w-52 h-40 lg:fixed px-4"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Desktop Nav */}
        <div className="">
          <div className="hidden lg:flex">
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" href="/">Home</Link>
              </label>
            </div>

            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" href="/services">
                  Services <i className="fa-solid fa-sort-down"></i>
                </Link>
              </label>
              
              <ul style={{ position: 'fixed', top: '60px', left: '69%', transform: 'translateX(-50%)' }} className="dropdown-content menu xl:menu-horizontal lg:min-w-max bg-base-200">
                <li className="border-r border-r-1 shadow-sm border-slate-300">
                    <Link className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown} href="/services/career-counseling">
                                  Career Counseling
                    </Link>
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown} href="/services/university-selection">
                                    University Selection
                    </Link>
                  
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none" onClick={closeDropdown} href="/services/visa-document">Visa Document</Link>
                  
                </li>

                <li className="border-r border-r-1 shadow-sm border-slate-300">
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown} href="/services/student-visa">Student Visa</Link>
                  
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown} href="/services/sop-resume-prep">
                      SOP|Resume Preparation
                    </Link>
                  
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none" onClick={closeDropdown} href="/services/spouse-visa">Spouse Visa</Link>
                  
                </li>

                <li className="border-r border-r-1 shadow-sm border-slate-300">
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown} href="/services/visitor-visa">Visitor Visa</Link>
                  
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown} href="/services/pr-immigration">PR|Immigration Visa</Link>
                  
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none" onClick={closeDropdown} href="/services/accommodation">Accommodation</Link>
                  
                </li>

                <li className="shadow-sm">
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown} href="/services/bank-solvency">Bank Solvency</Link>
                  
                  
                    <Link className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown} href="/services/pre-departure-guidance">
                      Pre-Departure Guidance
                    </Link>
                  
                  
                  <Link className="hover:bg-logoRed hover:text-white rounded-none" onClick={closeDropdown} href="/services/air-ticket">Air Ticket</Link>
                  
                </li>
                
              </ul> 
            </div>

            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" href="/study-abroad">
                  Study Abroad <i className="fa-solid fa-sort-down"></i>
                </Link>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu ml-1 shadow bg-base-100 w-52"
              >
                <li  onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/study-abroad/canada"><span className="w-5"><Image src={canadaFlag}alt="logo"></Image></span> <span>Canada</span></Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/study-abroad/usa" ><span className="w-5"><Image src={USAFlag} alt="logo"></Image></span> <span>USA</span></Link>
                 
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/study-abroad/uk"><span className="w-5"><Image src={UKFlag} alt="logo"></Image></span> <span>UK</span></Link>
                  
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/study-abroad/australia"><span className="w-5"><Image src={AustraliaFlag} alt="logo"></Image></span> <span>Australia</span></Link>
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" href="/study-abroad/canada">Study Canada</Link>
              </label>
            </div>

            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg">
                <Link className="hover:border-b-4 hover:border-white" href="/about-us">
                  About Us <i className="fa-solid fa-sort-down"></i>
                </Link>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu ml-1 shadow bg-base-100 w-52 min-w-[280px] max-w-[290px]"
              >
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/about-us">About Graduation Consultancy</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/about-us/vision-mission">
                    Our Vision And Mission
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href='/meet-our-team'>
                    Meet Our Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" href="/contact-us">Contact us</Link>
              </label>
            </div>
          </div>
          <Image onClick={() => router.push('/')} className="lg:hidden w-24 h-20" src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Nav;
