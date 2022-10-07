import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="section-component-div"
    >
      <h3 className="section-header">About</h3>
      <motion.img
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        // src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
        src="/images/me3.jpeg"
        className="-mb-20 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 mt-10 px-0 md:px-10 text-center md:text-left">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#FF647F]/50">little</span>{" "}
          background
        </h4>
        <p className="text-lg text-center md:text-left">
          I am a full stack software developer who enjoys transforming an idea
          into a usable product through code.
        </p>
        <p className="text-lg text-center md:text-left">
          My strengths lie in developing mobile application with React Native,
          Flutter and Android Kotlin. I find that I have the most fun developing
          mobile applications.
        </p>
        <p className="text-lg text-center md:text-left">
          I value learning and collaborating with others to come up with awesome
          solutions for clients. I have been working as a freelance developer
          for three years and have enjoyed the journey so far.
        </p>
        <p className="text-lg text-center md:text-left">
          I am currently looking to expand my skills and work on projects that
          make a difference.
        </p>

        <a target="_blank" href='https://kwambokab.hackerresume.io/343d051a-a332-4907-813b-d9e4fe732420' rel="noopener noreferrer">
        <p className="text-2xl text-center md:text-left cursor-pointer">
          <span className="underline decoration-[#FF647F]/50">
            Resume</span>
        </p>
        </a>
        {/* <iframe src="/files/Boulateresume.pdf" style={{width:'100%', height:'100%'}} frameborder="0"></iframe>
   */}

      </div>
    </motion.div>
  );
}

export default About;
