/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="section-component-div"
    >
      <h3 className="section-header">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FF647F]/50">
        {projects?.map((project, i) => {
          return (
            <div
              key={i}
              className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                }}
                src={project.image}
                alt=""
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  {" "}
                  {project.title}
                </h4>
                {project.title === "Mentor Sacco Website" ? (
                   <a target="_blank" href='https://mentorsacco.co.ke/' rel="noopener noreferrer">
                  <p className="text-1xl font-semibold text-center">
                   https://mentorsacco.co.ke/
                  </p>
                  </a>
                ) : null}
                <div className="flex space-x-2 text-center">
                  {project?.stack.map((st, index) => {
                    return (
                      <img
                        key={index}
                        className="h-10 w-10 rounded-full my-2"
                        src={st.icon}
                        alt="react icon"
                      />
                    );
                  })}
                </div>
                <p className="text-lg text-center md:text-left">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute left-0 top-[30%] bg-[#FF647F]/10 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
