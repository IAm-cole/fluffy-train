/* eslint-disable */

import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className={`relative w-screen transition-all`}>
        <div className="bg-gradient-to-r from-blue-200 to-purple-300 fixed top-0 left-0 right-0 flex justify-between items-center text-gray-600 h-16 rounded-md px-6 shadow-md">
          <h1 className="text-lg font-bold">IBITAU MICHAEL</h1>

          <ul className="hidden md:flex gap-4 p-2 text-lg font-semibold mr-36">
            <a href="#about">
              <li className="hover:underline cursor-pointer transition-all ease-in-out duration-300">
                Home
              </li>
            </a>

            <a href="#about">
              <li className="hover:underline cursor-pointer transition-all ease-in-out duration-300">
                About
              </li>
            </a>
            <a href="#portfolio">
              <li className="hover:underline cursor-pointer transition-all ease-in-out duration-300">
                Work
              </li>
            </a>
            <a href="#contact">
              <li className="hover:underline cursor-pointer transition-all ease-in-out duration-300">
                Contact
              </li>
            </a>
          </ul>

          <div onClick={handleNavToggle} className="md:hidden">
            {nav ? (
              <AiOutlineClose size={24} className="text-white" />
            ) : (
              <AiOutlineMenu size={24} className="text-white" />
            )}
          </div>

          <div
            className={`fixed left-0 top-0 h-full w-2/5 bg-gray-800 transition-transform duration-300 z-20 ${
              nav ? "translate-x-0" : "-translate-x-full "
            }`}
          >
            {/* inner hamburger */}

            <h1 className="text-2xl  font-extrabold text-white m-4">Welcome</h1>
            <ul className="text-lg font-semibold cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "#fff", cursor: "pointer" }}
              >
                <a href="#about">
                  <li className="hover:underline text-2xl ml-4 font-semibold  transition-all ease-in-out duration-300">
                    About
                  </li>
                </a>
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ margin: "0 10px", color: "#fff", cursor: "pointer" }}
              >
                <a href="#porfolio">
                  <li className=" text-2xl ml-4   font-semibold  transition-all ease-in-out duration-300 hover:underline">
                    Portfolio
                  </li>
                </a>
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "#fff", cursor: "pointer" }}
              >
                <a href="#contact">
                  <li className=" text-2xl ml-4  transition-all ease-in-out hover:underline font-semibold ">
                    Contact
                  </li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

