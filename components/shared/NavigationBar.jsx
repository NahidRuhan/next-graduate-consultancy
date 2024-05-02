"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/assets/Logo.svg";
import canadaFlag from "../../public/assets/canadaFlag.png";
import USAFlag from "../../public/assets/usaFlag.png";
import AustraliaFlag from "../../public/assets/australiaFlag.png";
import UKFlag from "../../public/assets/ukFlag.png";
import { useRouter } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
    { title: "Home", path: "/", hasSubNav: false },
    {
      title: "Services",
      path: "/services",
      hasSubNav: true,
      subNav: [
        { name: "Career Counseling", path: "/services/career-counseling" },
        {
          name: "University Selection",
          path: "/services/university-selection",
        },
        { name: "Visa Document", path: "/services/visa-document" },
        { name: "Student Visa", path: "/services/student-visa" },
        { name: "SOP|Resume Preparation", path: "/services/sop-resume-prep" },
        { name: "Spouse Visa", path: "/services/spouse-visa" },
        { name: "Visitor Visa", path: "/services/visitor-visa" },
        { name: "PR|Immigration Visa", path: "/services/pr-immigration" },
        { name: "Accommodation", path: "/services/accommodation" },
        { name: "Bank Solvency", path: "/services/bank-solvency" },
        { name: "Air Ticket", path: "/services/air-ticket" },
        {
          name: "Pre-Departure Guidance",
          path: "/services/pre-departure-guidance",
        },
      ],
    },
    {
      title: "Study Abroad",
      path: "/study-abroad",
      hasSubNav: true,
      subNav: [
        { name: "Canada", path: "/study-abroad/canada" },
        { name: "USA", path: "/study-abroad/usa" },
        { name: "UK", path: "/study-abroad/uk" },
        { name: "Australia", path: "/study-abroad/australia" },
      ],
    },
    { title: "Study Canada", path: "/study-abroad/canada", hasSubNav: false },
    {
      title: "About Us",
      path: "/about-us",
      hasSubNav: true,
      subNav: [
        { name: "About Graduate Consultancy", path: "/about-us" },
        { name: "Our Vision & Mission", path: "/about-us/vision-mission" },
        { name: "Meet Our Team", path: "/meet-our-team" },
      ],
    },
    { title: "Contact Us", path: "/contact-us", hasSubNav: false },
    { title: "IELTS", path: "/ielts", hasSubNav: false },
    { title: "Blogs", path: "/blogs", hasSubNav: false },
  ];

  const toggleSubMenu = (title) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
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
              <IoIosMenu />
            </button>
            {/* Navigation Drawer for Mobile View */}
            <div
              className={`border border-gray-200 shadow-lg fixed top-0 left-0 w-1/2 min-w-min bg-white h-full z-50 transform transition-transform ${
                isNavDrawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button className="btn btn-ghost" onClick={toggleNavDrawer}>
                Close
              </button>
              <ul className="menu p-4 overflow-y-auto h-full">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <div className="flex justify-between items-center hover:bg-logoRed hover:text-white rounded-lg">
                      <Link
                        className=""
                        href={item.path}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNavDrawer(); // Close the navigation drawer
                        }}
                      >
                        {item.title}
                      </Link>
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
                      <ul
                        className="pl-4 hover:bg-logoRed hover:text-white"
                        onClick={toggleNavDrawer}
                      >
                        {item.subNav.map((subItem, index) => (
                          <li
                            key={index}
                            className="hover:bg-logoRed hover:text-white"
                          >
                            <Link
                              className=""
                              href={subItem.path}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleNavDrawer(); // Close the navigation drawer
                              }}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <Image onClick={()=>{router.push('/')}}
            className="hidden lg:flex w-52 h-40 lg:fixed px-4"
            src={logo}
            alt="logo"
          /> */}
        </div>

        {/* Desktop Nav */}
        <div>
          <div className="hidden lg:flex">
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link className="hover:border-b-4 hover:border-white" href="/">
                  Home
                </Link>
              </label>
            </div>

            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link
                  className="hover:border-b-4 hover:border-white"
                  href="/services"
                >
                  <p className="flex items-center gap-1 text-white font-poppins font-semibold xl:text-lg">Services<span><MdOutlineKeyboardArrowDown /></span></p> 
                </Link>
              </label>
              <ul
  style={{
    position: "absolute",
    top: "100%",
    left: "0",
    paddingTop: "10px",
  }}
  className="dropdown-content menu xl:menu-horizontal lg:min-w-max bg-base-200"
  onBlur={closeDropdown}
>
                <li className="shadow-sm ">
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/career-counseling"
                  >
                    Career Counseling
                  </Link>
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/university-selection"
                  >
                    University Selection
                  </Link>
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/visa-document"
                  >
                    Visa Document
                  </Link>
                </li>

                <li className="shadow-sm ">
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/student-visa"
                  >
                    Student Visa
                  </Link>
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/sop-resume-prep"
                  >
                    SOP|Resume Preparation
                  </Link>
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/spouse-visa"
                  >
                    Spouse Visa
                  </Link>
                </li>

                <li className="shadow-sm ">
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/visitor-visa"
                  >
                    Visitor Visa
                  </Link>
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/pr-immigration"
                  >
                    PR|Immigration Visa
                  </Link>
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/accommodation"
                  >
                    Accommodation
                  </Link>
                </li>

                <li className="shadow-sm ">
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/bank-solvency"
                  >
                    Bank Solvency
                  </Link>
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/air-ticket"
                  >
                    Air Ticket
                  </Link>
                  <Link
                    className="hover:bg-logoRed hover:text-white rounded-none"
                    onClick={closeDropdown}
                    href="/services/pre-departure-guidance"
                  >
                    Pre-Departure Guidance
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
                <Link
                  className="hover:border-b-4 hover:border-white"
                  href="/study-abroad"
                >
                  <p className="flex items-center gap-1 text-white font-poppins font-semibold xl:text-lg">Study Abroad<span><MdOutlineKeyboardArrowDown /></span></p> 
                </Link>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu ml-1 shadow bg-base-100 w-52"
              >
                <li onClick={closeDropdown}>
                  <Link
                    className="hover:bg-logoRed hover:text-white hover:rounded-none"
                    href="/study-abroad/canada"
                  >
                    <span className="w-5">
                      <Image src={canadaFlag}></Image>
                    </span>{" "}
                    <span>Canada</span>
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link
                    className="hover:bg-logoRed hover:text-white hover:rounded-none"
                    href="/study-abroad/usa"
                  >
                    <span className="w-5">
                      <Image src={USAFlag}></Image>
                    </span>{" "}
                    <span>USA</span>
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link
                    className="hover:bg-logoRed hover:text-white hover:rounded-none"
                    href="/study-abroad/uk"
                  >
                    <span className="w-5">
                      <Image src={UKFlag}></Image>
                    </span>{" "}
                    <span>UK</span>
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link
                    className="hover:bg-logoRed hover:text-white hover:rounded-none"
                    href="/study-abroad/australia"
                  >
                    <span className="w-5">
                      <Image src={AustraliaFlag}></Image>
                    </span>{" "}
                    <span>Australia</span>
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
                <Link
                  className="hover:border-b-4 hover:border-white"
                  href="/study-abroad/canada"
                >
                  Study Canada
                </Link>
              </label>
            </div>

            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link
                  className="hover:border-b-4 hover:border-white"
                  href="/about-us"
                >
                  <p className="flex items-center gap-1 text-white font-poppins font-semibold xl:text-lg">About Us<span><MdOutlineKeyboardArrowDown /></span></p> 
                </Link>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu ml-1 shadow bg-base-100 w-52 min-w-[280px] max-w-[290px]"
              >
                <li onClick={closeDropdown}>
                  <Link
                    className="hover:bg-logoRed hover:text-white hover:rounded-none"
                    href="/about-us"
                  >
                    About Graduation Consultancy
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link
                    className="hover:bg-logoRed hover:text-white hover:rounded-none"
                    href="/about-us/vision-mission"
                  >
                    Our Vision And Mission
                  </Link>
                </li>
                <li onClick={closeDropdown}>
                  <Link
                    className="hover:bg-logoRed hover:text-white hover:rounded-none"
                    href="/meet-our-team"
                  >
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
                <Link
                  className="hover:border-b-4 hover:border-white"
                  href="/contact-us"
                >
                  Contact us
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link
                  className="hover:border-b-4 hover:border-white"
                  href="/ielts"
                >
                  IELTS
                </Link>
              </label>
            </div>
            <div className="dropdown dropdown-hover">
              <label
                onClick={closeDropdown}
                tabIndex={0}
                className="btn btn-ghost m-1 text-white font-poppins font-semibold xl:text-lg"
              >
                <Link
                  className="hover:border-b-4 hover:border-white"
                  href="/blogs"
                >
                  Blogs
                </Link>
              </label>
            </div>
          </div>
          <Image
            onClick={() => {
              router.push("/");
            }}
            className="lg:hidden w-24 h-20"
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <button className="hidden lg:flex h-full items-center gap-3 text-xl text-white btn btn-ghost">
            <span>
              <FaHeadphonesSimple />
            </span>
            Free Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
