"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../public/assets/Logo.svg'
import canadaFlag from "../../public/assets/canadaFlag.png"
import USAFlag from "../../public/assets/usaFlag.png"
import AustraliaFlag from "../../public/assets/australiaFlag.png"
import UKFlag from "../../public/assets/ukFlag.png"
import { useRouter } from "next/navigation";

const NavigationBar = () => {

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

  const [subMenuOpen, setSubMenuOpen] = useState({});
  
  const navItems = [
      { title: 'Home', path: '/', hasSubNav: false },
      { title: 'Services', path: '/services', hasSubNav: true, subNav: [
      {name:'Career Counseling', path: '/services/career-counseling'}, 
      {name:'University Selection', path: '/services/university-selection'}, 
      {name:'Visa Document', path: '/services/visa-document'}, 
      {name:'Student Visa', path: '/services/student-visa'},
      {name:'SOP|Resume Preparation', path: '/services/sop-resume-prep'},
      {name:'Spouse Visa', path: '/services/spouse-visa'},
      {name:'Visitor Visa', path: '/services/visitor-visa'},
      {name:'PR|Immigration Visa', path: '/services/pr-immigration'},
      {name:'Accommodation', path: '/services/accommodation'},
      {name:'Bank Solvency', path: '/services/bank-solvency'},
      {name:'Air Ticket', path: '/services/air-ticket'},
      {name:'Pre-Departure Guidance', path: '/services/pre-departure-guidance'},
    ] },
      { title: 'Study Abroad', path: '/study-abroad', hasSubNav: true, subNav: [{name: 'Canada', path:'/canada'}, {name:'USA', path: '/usa'}, {name:'UK', path:'/uk'}, {name:'Australia', path:'/australia'}] },
      { title: 'Study Canada', path: '/study-canada', hasSubNav: false },
      { title: 'About Us', path: '/about-us', hasSubNav: true, subNav: [{name:'About Graduate Consultancy', path:'/'}, {name: 'Our Vision & Mission', path: '/vision-mission'}, {name: 'Meet Our Team', path: '/meet-our-team'}] },
      { title: 'Contact Us', path: '/contact-us', hasSubNav: false },
    ];
  
  const toggleSubMenu = (title) => {
      setSubMenuOpen(prevState => ({
        ...prevState,
        [title]: !prevState[title]
      }));
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
            <div className={`border border-gray-200 shadow-lg fixed top-0 left-0 w-1/2 min-w-min bg-white h-full z-50 transform transition-transform ${isNavDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button
        className="btn btn-ghost"
        onClick={toggleNavDrawer}
      >
        Close
      </button>
      <ul className="menu p-4 overflow-y-auto h-full">
        {navItems.map((item) => (
          <li key={item.title}>
            <div className="flex justify-between items-center hover:bg-logoRed hover:text-white rounded-lg">
              <Link className='' href={item.path}>{item.title}</Link>
              {item.hasSubNav && (
                <button
                  className="border border-gray-200 shadow-lg rounded-md hover:bg-red-900 hover:text-white p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubMenu(item.title);
                  }}
                >
                  +
                </button>
              )}
            </div>
            {subMenuOpen[item.title] && item.hasSubNav && (
              <ul className="pl-4 hover:bg-logoRed hover:text-white">
                {item.subNav.map((subItem, index) => (
                  <li key={index} className="hover:bg-logoRed hover:text-white"><Link className='' href={subItem.path}>{subItem.name}</Link></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
          </div>
          <Image onClick={()=>{navigate('/')}}
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
              {/* <ul
                tabIndex={0}
                className="dropdown-content menu xl:menu-horizontal lg:min-w-max z-[1] ml-1 shadow bg-base-100 w-52"
              >
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/career-counseling">
                    Career Counseling
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/university-selection">
                    University Selection
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/visa-document">Visa Document</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/student-visa">Student Visa</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/sop-resume-prep">
                    SOP|Resume Preparation
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/spouse-visa">Spouse Visa</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/visitor-visa">Visitor Visa</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/pr-immigration">PR|Immigration Visa</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:rounded-none hover:text-white" href="/services/accommodation">Accommodation</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/bank-solvency">Bank Solvency</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/air-ticket">Air Ticket</Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/services/pre-departure-guidance">
                    Pre-Departure Guidance
                  </Link>
                </li>
              </ul> */}
              <ul style={{ position: 'fixed', top: '60px', left: '69%', transform: 'translateX(-50%)' }} className="dropdown-content menu xl:menu-horizontal lg:min-w-max bg-base-200">
                <li className="border-r border-r-1 shadow-sm border-slate-300">
                  <a className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown}>
                    <Link href="/services/career-counseling">
                                  Career Counseling
                    </Link>
                  </a>
                  <a className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown}>
                    <Link href="/services/university-selection">
                                    University Selection
                    </Link>
                  </a>
                  <a className="hover:bg-logoRed hover:text-white rounded-none" onClick={closeDropdown}>
                    <Link href="/services/visa-document">Visa Document</Link>
                  </a>
                </li>

                <li className="border-r border-r-1 shadow-sm border-slate-300">
                  <a className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown}>
                    <Link href="/services/student-visa">Student Visa</Link>
                  </a>
                  <a className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown}>
                    <Link href="/services/sop-resume-prep">
                      SOP|Resume Preparation
                    </Link>
                  </a>
                  <a className="hover:bg-logoRed hover:text-white rounded-none" onClick={closeDropdown}>
                    <Link href="/services/spouse-visa">Spouse Visa</Link>
                  </a>
                </li>

                <li className="border-r border-r-1 shadow-sm border-slate-300">
                  <a className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown}>
                    <Link href="/services/visitor-visa">Visitor Visa</Link>
                  </a>
                  <a className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown}>
                    <Link href="/services/pr-immigration">PR|Immigration Visa</Link>
                  </a>
                  <a className="hover:bg-logoRed hover:text-white rounded-none" onClick={closeDropdown}>
                    <Link href="/services/accommodation">Accommodation</Link>
                  </a>
                </li>

                <li className="shadow-sm">
                  <a className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown}>
                    <Link href="/services/bank-solvency">Bank Solvency</Link>
                  </a>
                  <a className="hover:bg-logoRed hover:text-white rounded-none" onClick={closeDropdown}>
                  <Link href="/services/air-ticket">Air Ticket</Link>
                  </a>
                  <a className="hover:bg-logoRed hover:text-white rounded-none border-b-2 border-gray-300" onClick={closeDropdown}>
                    <Link href="/services/pre-departure-guidance">
                      Pre-Departure Guidance
                    </Link>
                  </a>
                  
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
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/study-abroad/canada"><span className="w-5"><Image src={canadaFlag}></Image></span> <span>Canada</span></Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/study-abroad/usa" ><span className="w-5"><Image src={USAFlag}></Image></span> <span>USA</span></Link>
                 
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/study-abroad/uk"><span className="w-5"><Image src={UKFlag}></Image></span> <span>UK</span></Link>
                  
                </li>
                <li onClick={closeDropdown}>
                  <Link className="hover:bg-logoRed hover:text-white hover:rounded-none" href="/study-abroad/australia"><span className="w-5"><Image src={AustraliaFlag}></Image></span> <span>Australia</span></Link>
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
          <Image onClick={()=>{navigate('/')}} className="lg:hidden w-24 h-20" src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
