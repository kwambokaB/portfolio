/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCIrcles from "./BackgroundCIrcles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<Hi, I'm Boulate Kwamboka />",
      "<I am a Full Stack Developer />",
      "<I enjoy developing Mobile Applications />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCIrcles />
      <img
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="images/me3.jpeg"
        alt="image profile"
      />
      <div className="z-20">
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
      <h1 className="text-5xl lg:text:6xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor="#FF647F" />
      </h1>
      <div className="pt-5">
        <Link href="#about">
        <button className="hero-button">About</button>
        </Link>
        <Link href="#experience">
        <button className="hero-button">Experience</button>
        </Link>
        <Link href="#skills">
        <button className="hero-button">Skills</button>
        </Link>
        <Link href="#projects">
        <button className="hero-button">Projects</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Hero;
