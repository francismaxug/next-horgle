"use client";
import Image from "next/image";
import React, { useState } from "react";
import { slides } from "@/loops/textsvg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  // const slides = [
  //   {
  //     url: "/totaloil.png",
  //     title: "Lobster",
  //   },
  //   {
  //     url: "/bost.jpg",
  //     title: "Sushi",
  //   },
  //   {
  //     url: "/goil1.jpg",
  //     title: "Pasta",
  //   },
  //   {
  //     url: "/petrosol.png",
  //     title: "Salmon",
  //   },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" flex h-auto sm:h-auto items-center border border-red-400 justify-center md:h-auto flex-col lg:h-[500px] w-auto lg:w-full m-auto px-4 relative group">
      <div
        className=" h-[8rem] overflow-hidden  sm:h-[10rem] sm:w-[15rem] md:w-[15rem] md:h-[10rem]   rounded-2xl border-2 w-auto bg-center mt-14 bg-cover duration-500"

        // style={{
        //   backgroundImage: `url(${slides[currentIndex].url})`,
        // }}
      >
        <Image
          className=" w-32 sm:w-full lg:w-full lg-72 h-full object-fill object-center"
          src={slides[currentIndex].url}
          alt={slides[currentIndex].title}
          width={1000}
          height={1000}
        />
      </div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-[3px]  text-white cursor-pointer">
        <Image
          onClick={prevSlide}
          src="/arrowleft.png"
          alt="arrow"
          width={100}
          height={100}
          className=" w-8"
        />
        {/* <BsChevronCompactLeft onClick={prevSlide} size={30} /> */}
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-[3px]  text-white cursor-pointer">
        <Image
          onClick={nextSlide}
          src="/arrowright.png"
          alt="arrow"
          width={100}
          height={100}
          className=" w-8"
        />
        {/* <BsChevronCompactRight onClick={nextSlide} size={30} /> */}
      </div>

      <div className="flex gap-x-2 justify-center py-8">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {/* <RxDotFilled /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={`${slideIndex === currentIndex ? "#ffc700" : "#808080"}`}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="lg:w-3 lg:h-3 w-2.5 h-2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
