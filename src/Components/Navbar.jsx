import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsStickey] = useState(false);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsStickey(true);
      } else {
        setIsStickey(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "Service",
      path: "service",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Product",
      path: "product",
    },
    {
      link: "Testimonial",
      path: "testimonial",
    },
    {
      link: "FAQ",
      path: "faq",
    },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 right-0 left-0 ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8 ">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }, index) => (
              <li
                // to={path}
                key={index}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium  cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
          {/* btn for larger devices  */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900 "
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
              Sign up
            </button>
          </div>
          {/* Menu Button for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-neutralDGray focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <GrClose className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile devices  */}
        <div
          className={` ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 md:hidden" : "hidden"
          } space-y-4 px-4 mt-16 py-7 bg-brandPrimary ml-[40%] rounded-md`}
        >
          {navItems.map(({ link, path }, index) => (
            <div
              // to={path}
              key={index}
              className="block text-base text-white hover:text-gray900 first:font-medium cursor-pointer"
            >
              {link}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
