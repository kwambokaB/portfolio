import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../data/experience.js";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="section-component-div"
    >
      <h3 className="section-header">Experience</h3>
      <div className="w-full flex snap-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FF647F]/50">
        {experienceData.map((exp, i) => {
          return <ExperienceCard data={exp} key={i} />;
        })}
      </div>
    </motion.div>
  );
}

export default Experience;
