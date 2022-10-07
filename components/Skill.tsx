import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
  data: {
    icon: string;
    Percentage: string;
    name: string
  }
};

function Skill({ directionLeft, data }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 h-20 w-20 md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={data.icon}
        alt="skill icon"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-24 md:w-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl font-bold text-black opacity-100">{`${data.name} ${data.Percentage}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
