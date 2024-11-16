/* eslint-disable no-unused-vars */
import React from "react";
const About = () => {
  return (
    <div
      data-scroll
      // data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full p-[5vw] bg-[#CDEA68] rounded-tl-xl rounded-tr-xl"
    >
      <h1 className="font-['NeueMontreal'] text-[4.2vw] text-zinc-900 leading-[4.5vw] tracking-tight w-[90%]">
        Ochi is a strategic partner for <u>fast-growing</u> tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire <u>great
        people</u>.
      </h1>
      <div className="w-full mt-[4vw]   border-t-[1px] border-[#738146] flex pt-[4vw] ">
        <div className="w-1/2 h-[70vh]">
          <h1 className="text-[4.5vw]  text-zinc-900 tracking-tighter">
            Our approach:
          </h1>
          <p className="mt-[2vw] mb-[2vw] mr-[2.5vw] text-start text-[1.9vh] text-zinc-900">
            Ochi is a strategic partner for fast-growing tech businesses that
            need to raise funds, sell products, explain complex ideas, and
            hire great people.
            <br/>
            <br/>We design and develop custom websites and apps for our clients. 
            Our teams are made up of experienced developers, designers, and
            marketers who work closely with our clients to deliver exceptional
            results.
          </p>
          <button
  className="group mt-[1vw] w-[150px] h-[50px] font-['NeueMontreal'] rounded-full bg-black text-white flex justify-between items-center px-5"
>
<span className="whitespace-nowrap text-sm">Read More</span>
  <div className="rounded-full bg-white w-[0.8vw] h-[0.8vw]   transition-all duration-300 group-hover:w-[1.4vw] group-hover:h-[1.4vw]"></div>

</button>
        </div>
        <div className="group w-1/2 h-[60vh] bg-black rounded-3xl overflow-hidden">
  <img
    src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
    alt="agency"
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  />
</div>
      </div>
    </div>
  );
};

export default About;
