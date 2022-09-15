import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";


function OnTheWay() {
  return (
    <div id="OnTheWay" className="w-full md:h-screen md:py-0 py-8">
      <Fade cascade bottom >
      <div
        className={`max-w-[1380px] w-full h-full m-auto flex justify-center items-start flex-col p-4`}
      >
        {/* Heading */}
        <h1 className="capitalize font-Ubuntu font-bold text-white md:text-[65px] sm:text-[50px] text-[44px] md:leading-[70px] sm:leading-[58px] leading-[46px] mb-16">
          On the way 2023
        </h1>

        {/* Cards */}
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-rows-1 sm:grid-rows-2 grid-rows-4 gap-6">
          {Cards.map((item, index) => {
            return (
              <div key={index} className="w-full h-[325px] flex justify-center items-center flex-col rounded bg-gradient-to-b from-pink to-blue hover:bg-gradient-to-t">
                <div className="relative w-[178.23px] h-[201.83px]">
                  <Image
                    src={item.Img}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <h3 className="font-Ubuntu font-bold text-white md:text-[22px] text-[18px] md:leading-[25.28px] leading-[24px] mt:3 uppercase">
                  {item.Title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
        </Fade>
    </div>
  );
}

export default OnTheWay;

const Cards = [
  {
    Title: "POKER",
    Img: "/SVG/poker.svg",
  },
  {
    Title: "DICE",
    Img: "/SVG/dice.svg",
  },
  {
    Title: "BLACKJACK",
    Img: "/SVG/blackjack.svg",
  },
  {
    Title: "BACCARAT",
    Img: "/SVG/baccarat.svg",
  },
];
