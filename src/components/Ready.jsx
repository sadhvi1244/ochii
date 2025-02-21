import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { FaArrowUpLong } from "react-icons/fa6";

const Ready = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy(); // Clean up on component unmount
  }, []);

  return (
    <div className="w-full relative rounded-tl-3xl rounded-tr-3xl min-h-screen sm:h-screen xm:h-screen text-zinc-900 bg-green-500">
      <div className="flex flex-col justify-center items-center pt-[9vw] -mb-[2vw] uppercase text-[20vw] sm:text-[12vw] xm:text-[12vw] min-text-[12vw] leading-[0.72] font-['Founders_Grotesk_X_Condensed'] font-medium text-center">
        <h1 className="">Ready </h1>
        <h1 className="">To Start</h1>
        <h1 className="">The Project</h1>
      </div>

      <div className="flex justify-center items-center py-10 gap-5">
        <div className="start flex items-center text-zinc-950 gap-5">
          <div className="px-5 py-2 uppercase font-light text-md border-[1px] border-zinc-900 rounded-full">
            Start The Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-900">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
