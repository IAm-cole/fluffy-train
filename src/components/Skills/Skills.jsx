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
        <div className=" mt-10   inline-block justify-start  bg-gray-900 h-96 w-full      md:bg-gray-900  md:w-3/4 md:mr-20     border-white md:h-36 md:items-center md:inline-block   rounded-tr-xl rounded-br-xl  rounded-tl-3xl rounded-bl-3xl  ">
          <h2 className="  mb-2 mt-2  text-center  underline ml-2   text-gray-300   w-full     text-xl  md:text-lg  font-serif  font-semibold md:font-bold ">
            My Tech Stack
          </h2>
          <div className="grid  justify-items-center md:flex md:justify-between w-full h-80 md:h-16    mt-4    ">
            <div className=" flex justify-center md:items-center  md:flex-col mr-7   items-center gap-2   ">
              <img
                src={cus}
                alt="Javascript"
                className="md:ml-8 rounded-lg md:w-10      h-9 "
              />
              <p className=" text-gray-300 text-lg  md:text-lg md:ml-2  font-serif w-9 ">
                JavaScript
              </p>
            </div>
            <div className=" flex justify-center gap-2 mt-4  mr-7  md:flex-col  items-center w-9     ">
              <img src={dail} alt="" className=" rounded-lg h-10  md:w-10 " />
              <p className=" text-gray-300 text-lg md:text-lg font-serif ">
                {" "}
                React
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-4   md:flex-col mr-7   items-center w-9 ">
              <img src={breed} alt="" className=" rounded-lg h-9  md:w-10" />
              <p className="  text-gray-300 text-lg md:text-lg font-serif ">
                {" "}
                Html
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-4  md:flex-col  items-center w-9 mr-7">
              <img
                src={style}
                alt="css"
                className=" rounded-lg md:w-10  h-9  "
              />
              <p className="  text-gray-300 text-lg md:text-lg font-serif ">
                CSS
              </p>
            </div>
            <div className="flex justify-center md:mr-9  gap-2 mt-4   md:flex-col   items-center   w-8    ">
              <img src={big} alt="" className=" rounded-lg h-9 md:w-10 " />
              <p className="   text-gray-300 text-lg md:text-lg font-serif  ">
                Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
