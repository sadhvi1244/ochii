import { motion } from "framer-motion";

const Marquee = () => {
  motion;

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-15 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-1 border-b-1 border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className=" text-[20vw] uppercase  pt-[3.5vw] -mb-[4vw]  leading-none font-['Founders_Grotesk_X_Condensed'] font-semibold pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className=" text-[20vw] uppercase pt-[3.5vw] -mb-[4vw]  leading-none font-['Founders_Grotesk_X_Condensed'] font-semibold pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
