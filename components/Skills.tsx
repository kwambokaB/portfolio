import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { skillData } from "../data/skills.js";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="section-component-div">
      <h3 className="section-header">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <motion.div className="grid grid-cols-4 gap-5 mt-12">
        {skillData?.slice(0, skillData.length/2).map((sk, index) => {
          return <Skill directionLeft={true} data={sk} key={index} />;
        })}
         {skillData?.slice(skillData.length / 2, skillData.length).map((sk, index) => {
          return <Skill directionLeft={false} data={sk} key={index} />;
        })}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
