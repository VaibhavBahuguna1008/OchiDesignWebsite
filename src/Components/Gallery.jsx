/* eslint-disable no-unused-vars */
import React from "react";

const Gallery = () => {
  return (
    <div className="w-full h-[40vw] flex gap-[2vw] px-[5vw] mt-[10vw]">
      <div className="cardcontainer  w-1/2 h-[25vw] ">
        <div className="card relative w-full h-full bg-[#5d811f] rounded-lg flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="bg-black absolute text-sm left-10 bottom-10   font-['NeueMontreal'] font-medium   rounded-full px-[1vw] py-[0.5vw]">
            2020 - 22
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5  w-1/2 h-[25vw] ">
        <div className="card w-1/2 h-full relative bg-[#0e1108] rounded-lg flex items-center justify-center overflow-hidden">
          <img 
            className="w-full h-full object-cover absolute inset-0" 
            src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" 
            alt="" 
          />
          <button className="bg-black absolute text-sm left-10 bottom-10   font-['NeueMontreal'] font-medium   rounded-full px-[1vw] py-[0.5vw]">
            2021 - 23
          </button>
        </div>
        <div className="card w-1/2 h-full relative bg-[#212121] rounded-lg flex items-center justify-center ">
          
          <img 
           className="w-full h-full rounded-lg object-cover absolute inset-0" 
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt=""/>
          <button className="bg-black absolute text-sm left-10 bottom-10   font-['NeueMontreal'] font-medium   rounded-full px-[1vw] py-[0.5vw]">
            2023 - 24
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
