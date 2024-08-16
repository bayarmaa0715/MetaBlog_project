import React, { useState } from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import HeroCard from "./HeroCard";

const heroSlider = [
  "/images/a1.png",
  "/images/a2.png",
  "/images/a3.png",
  "/images/a4.png",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=" realtive  ">
      <div className="overflow-hidden">
        <HeroCard heroSlider={heroSlider} currentIndex={currentIndex} />
      </div>

      <div className="text-4xl flex justify-end text-gray-500 font-normal ">
        <button
          onClick={() => {
            // return setCurrentIndex(currentIndex - 1);
            console.log("hero slider len left click", heroSlider.length);
            console.log("currenr index len left click", currentIndex);
            if (currentIndex <= 0) {
              return setCurrentIndex(0);
            } else return setCurrentIndex(currentIndex - 1);
          }}
        >
          <CiSquareChevLeft />
        </button>
        <button
          onClick={() => {
            console.log("hero slider len right click", heroSlider.length);
            console.log("currenr index len right click", currentIndex);
            // return setCurrentIndex(currentIndex + 1);
            if (heroSlider.length <= currentIndex + 1) {
              return setCurrentIndex(heroSlider.length - 1);
            } else if (heroSlider.length > currentIndex) {
              return setCurrentIndex(currentIndex + 1);
            }
          }}
        >
          <CiSquareChevRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
