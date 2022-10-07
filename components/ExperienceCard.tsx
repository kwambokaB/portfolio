/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    companyName: string;
    link: string;
    companyIcon: string;
    role: string;
    start: string;
    end: string;
    points: Array<string>;
    stack: Array<
      {
        icon: string;
        name: string;
      }
    >;
  };
};

function ExperienceCard({ data }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mx-5">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{}}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:h-[200px]object-cover object-center"
        src={data.companyIcon}
        alt="company logo"
      />
      <div className="px=0 md:px-10">
        <h4 className="text-4xl font-light">{data.role}</h4>
       
        <a target="_blank" href={data.link} rel="noopener noreferrer">
        <p className="font-bold text-2xl my-2">{data.companyName}</p>
        </a>
        <div className="flex space-x-2 my-2">
          {data.stack.map((st, index) => {
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
        <p className="uppercase py-5 text-pink-500">{`Started: ${data.start},  -ended: ${data.end}`}</p>
        <p className="text-lg">Responsibilities included</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {data.points.map((p, i) => {
            return <li key={i}>{p}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
