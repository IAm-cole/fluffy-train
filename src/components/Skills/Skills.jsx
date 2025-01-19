/*eslint-disable*/

import React from "react";

import dail from "/react.jpeg";
import breed from "/html.jpeg";
import big from "/NewTailwind.png";
import style from "/cssFfile.jpeg";
import cus from "/cus.jpeg";

export default function Skills() {
  return (
    <>
      <div id="skills" className="flex justify-center ">
        <div className=" mt-6 inline-block  bg-gray-900 h-full w-full  md:w-3/4 border-white md:h-40 md:items-center md:inline-block   rounded-tr-3xl rounded-br-3xl  rounded-tl-3xl rounded-bl-3xl  ">
          <h2 className="  mb-2 mt-2 text-center  underline ml-2   text-gray-300   w-full     text-xl  md:text-2xl  font-serif  font-semibold md:font-bold ">
            My Tech Stack
          </h2>
          <div className="sm:flex sm:flex-col space-y-5 md:flex-row md:justify-between  items-center mx-2 my-5  w-full h-80 md:h-16 ">
            <div className="flex justify-center mr-8 gap-2 md:flex-col items-center">
              <img src={breed} alt="Html" className=" rounded-lg h-14" />
              <p className="  text-gray-300 text-lg font-serif "> Html</p>
            </div>

            <div className="flex justify-center mr-10 gap-2 md:flex-col items-center">
              <img src={style} alt="css" className=" rounded-lg h-12 " />
              <p className="  text-gray-300 text-lg  font-serif ">CSS</p>
            </div>

            <div className=" flex justify-center ml-4  gap-2 md:flex-col items-center  ">
              <img src={cus} alt="Javascript" className="rounded-lg h-12" />
              <p className="text-gray-300 text-lg font-serif">JavaScript</p>
            </div>

            <div className="flex justify-center gap-2   md:flex-col  md:items-center items-center ">
              <img src={big} alt="tailwind" className="rounded-lg h-11 w-10" />
              <p className="   text-gray-300 text-lg md:text-lg font-serif  ">
                Tailwind
              </p>
            </div>

            <div className=" flex justify-center gap-2 mr-5 md:flex-col md:items-center items-center">
              <img src={dail} alt="React" className=" rounded-lg h-14" />
              <p className=" text-gray-300 text-lg md:text-lg font-serif ">
                {" "}
                React
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
