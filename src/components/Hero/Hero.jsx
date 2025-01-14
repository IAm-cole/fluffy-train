/* eslint-disable */

import react from "react";
import { useState } from "react";

export default function Hero() {
  return (
    <div
      id="about"
      className=" border-gray-500 rounded-full  text-gray-200    bg-black  w-full  max-w-[1200px] mx-auto  p-10 md:mt-9 "
    >
      <h1 className="text-base mt-10 md:justify-center  font-serif  font-bold  ">
        About Me...
      </h1>
      <p className=" md:text-lg md:text-gray-300  mt-2">
        I am a dedicated frontend web developer skilled in JavaScript, React,
        HTML, Tailwind, and CSS. With a proven track record of successfully
        collaborating with various organizations, I am committed to delivering
        high-quality work that drives growth and innovation. My goal is to work
        closely with teams to create dynamic and user-friendly web applications
        that meet business needs. Trust and teamwork are at the core of my
        approach, and I take pride in the relationships I've built through my
        commitment to excellence
      </p>
    </div>
  );
}
