import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

function Footer() {
  return (
    <div className="w-full py-12 bg-[black] ">
      <Fade cascade bottom>
        <div
          className={`max-w-[1380px] w-full h-full m-auto flex md:justify-between justify-center items-center md:flex-row flex-col px-4`}
        >
          {/* Left */}
          <div className="flex justify-center items-center">
            <div className="relative w-[83.77px] h-[88px]">
              <Image
                src={"/SVG/logoFooter.svg"}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex justify-center items-start flex-col ml-6">
              {/* logo Text */}
              <div className="relative w-[219.23px] h-[13.23px]">
                <Image
                  src={"/SVG/logotext.svg"}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <h3 className="text-[14px] text-white leading-[14px] font-Ubuntu font-[400] mt-4">
                © 2022 All Right reserved.{" "}
                <a className="text-white underline" href="">
                  Policy Privacy
                </a>{" "}
                |{" "}
                <a className="text-white underline" href="">
                  Contact us
                </a>
              </h3>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center items-center md:mt-0 mt-10">
            <a className="flex justify-center items-center flex-col cursor-pointer">
              <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
                <Image
                  src={"/SVG/discord.svg"}
                  width={31.5}
                  height={36}
                  objectFit="contain"
                />
              </div>
              <h4 className="text-[15px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
                disord
              </h4>
            </a>
            <a className="flex justify-center items-center flex-col cursor-pointer mx-5">
              <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
                <Image
                  src={"/SVG/twitter.svg"}
                  width={31.5}
                  height={36}
                  objectFit="contain"
                />
              </div>
              <h4 className="text-[15px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
                twitter
              </h4>
            </a>
            <a className="flex justify-center items-center flex-col cursor-pointer">
              <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
                <Image
                  src={"/SVG/github.svg"}
                  width={31.5}
                  height={36}
                  objectFit="contain"
                />
              </div>
              <h4 className="text-[15px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
                github
              </h4>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Footer;
