import React from "react";
import Image from "next/image";
import { useTimer } from 'react-timer-hook';
import { Fade } from "react-reveal";


function Lottery() {

    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5400);

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div id="Lottery" className="w-full h-screen">
        <Fade cascade bottom >
      <div
        className={`max-w-[1380px] w-full h-full m-auto flex justify-center items-start flex-col px-4`}
      >
        {/* Heading */}
        <h1 className="capitalize font-Ubuntu font-bold text-white md:text-[65px] sm:text-[50px] text-[44px] md:leading-[70px] sm:leading-[58px] leading-[46px] my-10">
          daily lottery
        </h1>

        {/* Banner */}
        <div className="w-full py-6 bg-[rgba(0,0,0,0.6)] rounded flex justify-center items-center md:flex-row flex-col mt-10">
          {/* Left Banner */}
          <div className="flex justify-center items-start flex-col md:w-[50%] w-full h-full ">
            <h3 className="text-[20px] text-white leading-[40px] tracking-[50%] font-Oswald font-normal md:ml-16 md:self-start self-center">
              PRIZE POOL
            </h3>

            <div className="relative md:w-[500px] w-[300px] md:h-[140px] h-[90px] md:my-6 my-2">
              <Image
                src={"/SVG/banner.svg"}
                layout="fill"
                objectFit="contain"
              />

              <div className="absolute w-full h-full flex justify-center items-center">
                <div className="relative md:w-[100px] w-[60px] md:h-[100px] h-[60px]">
                  <Image
                    src={"/PNG/logo.png"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2 className="md:text-[56px] text-[30px] text-white md:leading-[82.99px] leading-[36px] tracking-[50%] font-Oswald font-normal ml-10">
                  64.250.000
                </h2>
              </div>
            </div>

            <h3 className="text-[15px] text-white leading-[17.24px] tracking-[50%] font-Ubuntu font-[400] md:ml-16 md:self-start self-center">
              129,382 Tickets in Game
            </h3>
          </div>

          {/* Right Banner */}
          <div className="flex justify-center items-center flex-col md:w-[50%] w-full h-full md:mt-0 mt-8">
            <h3 className="text-[18px] text-white leading-[26.68px] tracking-[50%] font-Oswald font-[400]">
              LOTTERY DRAW STARTS IN
            </h3>

            {/* CountDown */}
            <div className="md:w-auto w-full flex justify-center items-center my-6">
              {/* days */}
              <div className="md:w-[105px] w-[80px] md:h-[138px] h-[80px] bg-gradient-to-r from-pink to-blue rounded flex justify-center items-center flex-col md:mr-4 mr-2 ">
                <h3 className="md:text-[49px] text-[30px] text-white md:leading-[72.62px] leading-[36px] tracking-[50%] font-Oswald font-[400]">
                  {days}
                </h3>
                <h3 className="text-[12px] text-white leading-[14px] tracking-[50%] font-Ubuntu font-[400]">
                  Days
                </h3>
              </div>

              {/* hours */}
              <div className="md:w-[105px] w-[80px] md:h-[138px] h-[80px] bg-gradient-to-r from-pink to-blue rounded flex justify-center items-center flex-col md:mr-4 mr-2 ">
                <h3 className="md:text-[49px] text-[30px] text-white md:leading-[72.62px] leading-[36px] tracking-[50%] font-Oswald font-[400]">
                  {hours}
                </h3>
                <h3 className="text-[12px] text-white leading-[14px] tracking-[50%] font-Ubuntu font-[400]">
                Hours
                </h3>
              </div>

              {/* minutes */}
              <div className="md:w-[105px] w-[80px] md:h-[138px] h-[80px] bg-gradient-to-r from-pink to-blue rounded flex justify-center items-center flex-col md:mr-4 mr-2 ">
                <h3 className="md:text-[49px] text-[30px] text-white md:leading-[72.62px] leading-[36px] tracking-[50%] font-Oswald font-[400]">
                  {minutes}
                </h3>
                <h3 className="text-[12px] text-white leading-[14px] tracking-[50%] font-Ubuntu font-[400]">
                Minutes
                </h3>
              </div>

              {/* seconds */}
              <div className="md:w-[105px] w-[80px] md:h-[138px] h-[80px] bg-gradient-to-r from-pink to-blue rounded flex justify-center items-center flex-col ">
                <h3 className="md:text-[49px] text-[30px] text-white md:leading-[72.62px] leading-[36px] tracking-[50%] font-Oswald font-[400]">
                  {seconds}
                </h3>
                <h3 className="text-[12px] text-white leading-[14px] tracking-[50%] font-Ubuntu font-[400]">
                  Seconds
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Fade>
    </div>
  );
}

export default Lottery;
