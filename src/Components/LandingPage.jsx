/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full min-h-[50vw] bg-zinc-900 border-t-2"
    >
      <div className="textStructure mt-36 px-[3.5rem]">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker text-9xl">
              <div className="flex w-fit">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1.5,
                      delay: 1,
                    }}
                    src = "../../content-image01.jpg"
                    className="w-[9vw] mr-[1vw] h-[6vw]  leading-none top-[1vw] relative"
                  >
                    <img 
    src="../../content-image01.jpg" 
    alt="Content" 
    className="w-full h-full rounded-md  object-cover" 
  />
                  </motion.div>
                )}
                <h4
                  key={index}
                  className="leading-[0.75]  text-[9vw] uppercase font-['FoundersGrotesk'] tracking-normal "
                >
                  {item}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-[6.5rem] flex justify-between items-center py-3 px-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p key={index} className="text-[1.2vw] text-zinc-300 font-['NeueMontreal']">
              {item}
            </p>
          );
        })}
        <div className="start flex flex-row items-center">
          <div className="px-[1vw] py-[0.5vw] text-[1vw] uppercase border-zinc-700 border-2 rounded-full font-['NeueMontreal'] text-zinc-300">
            Start the Project
          </div>
          <div className="py-[0.5vw] px-[0.5vw] ml-3 w-[2.2vw] h-[2.2vw] rounded-full border-2 border-zinc-600 rotate-[45deg] ">
            <FaArrowUpLong size="1.vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
