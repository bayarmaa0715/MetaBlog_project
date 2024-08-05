import React from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className=" realtive  ">
      <div className=" relative ">
        <div className="relative h-[600px]">
          <img
            src="/images/Logo2.jpeg"
            alt=""
            className="rounded-lg size-full object-cover "
          />
        </div>
        <div className="bg-white absolute bottom-3 left-3 p-10 w-1/2 rounded-lg">
          <span className="bg-blue-600 px-4 py-1 rounded-lg  ">Technology</span>
          <p className="text-4xl flex flex-wrap my-4 ">
            {" "}
            Grid system for better Design User Interface
          </p>
          <p className="text-gray-500">August 20, 2022</p>
        </div>
      </div>
      <div className="text-4xl flex justify-end text-gray-500 font-normal ">
        <button>
          <CiSquareChevLeft />
        </button>
        <button>
          {" "}
          <CiSquareChevRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
