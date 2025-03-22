"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi"; // Importing the right arrow icon from react-icons
import cardImage1 from "../assets/shwarma.png";
import cardImage2 from "../assets/shwarma.png";
import cardImage3 from "../assets/shwarma.png";
import cardImage4 from "../assets/shortbread.png";
import cardImage5 from "../assets/shortbread.png";
import cardImage6 from "../assets/shortbread.png";
import cardImage7 from "../assets/salmon.png";
import cardImage8 from "../assets/salmon.png";
import cardImage9 from "../assets/salmon.png";

const Recipe = () => {
  const [activeButton, setActiveButton] = useState(1);

  const recipeTitles = [
    ["Shwarma Sandwich", "Shwarma Sandwich", "Shwarma Sandwich"],
    ["Sweet Shortbread", "Sweet Shortbread", "Sweet Shortbread"],
    ["Salmon Strips", "Salmon Strips", "Salmon Strips"],
  ];

  const renderCards = () => {
    const recipes = [
      [cardImage1, cardImage2, cardImage3],
      [cardImage4, cardImage5, cardImage6],
      [cardImage7, cardImage8, cardImage9],
    ];

    return recipes[activeButton - 1].map((image, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden h-[320px] flex flex-col items-center p-4"
      >
        <div className="relative w-full h-[180px]">
          <Image
            src={image}
            alt={recipeTitles[activeButton - 1][index]}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <h3 className="text-lg font-bold text-[#261B6C] mt-2">
          {recipeTitles[activeButton - 1][index]}
        </h3>
        <div className="mt-2 text-left ">
          <p className="text-sm text-gray-600">
          Prep Time :20 min
          </p>
        </div>
        <div className="flex justify-between w-full mt-2">
          <p className="text-sm text-gray-500">Try this amazing recipe and enjoy the taste.</p>
          <button className="flex items-center text-[#ffffff] bg-[#B29046] rounded-full font-bold">
            <HiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="mt-10 text-center" style={{ margin: "100px 150px" }}>
      <h2 className="text-4xl font-bold mb-8" style={{ color: "#261B6C" }}>
        Recipe Section
      </h2>
      <div className="flex justify-center mb-4 space-x-2">
        <button
          onClick={() => setActiveButton(1)}
          className={`font-extrabold cursor-pointer rounded text-2xl py-2 px-0 ${
            activeButton === 1
              ? "text-[#261B6C] underline decoration-[#B29046] decoration-8 underline-offset-8"
              : "text-[#9588B8]"
          }`}
        >
          For Kid&apos;s
        </button>
        <button
          onClick={() => setActiveButton(2)}
          className={`font-extrabold cursor-pointer rounded text-2xl py-2 px-0 ${
            activeButton === 2
              ? "text-[#261B6C] underline decoration-[#B29046] decoration-8 underline-offset-8"
              : "text-[#9588B8]"
          }`}
        >
          For Vegans
        </button>
        <button
          onClick={() => setActiveButton(3)}
          className={`font-extrabold cursor-pointer rounded text-2xl py-2 px-0 ${
            activeButton === 3
              ? "text-[#261B6C] underline decoration-[#B29046] decoration-8 underline-offset-8"
              : "text-[#9588B8]"
          }`}
        >
          For Family
        </button>
      </div>
      <hr
        className="border-2 border-gray-300"
        style={{ borderColor: "#9588B8" }}
      />
      <div className="text-left grid grid-cols-3 gap-4">{renderCards()}</div>
    </div>
  );
};

export default Recipe;
