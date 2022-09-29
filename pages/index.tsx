import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar scrollbar-thumb-[#f7ab0a]/50">
      <Head>
        <title>Boulate Kwamboka</title>
        <meta name="description" content="Boulate's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section className="snap-center" id="projects">
        <Projects />
      </section>
      <section className="snap-start" id="contact">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image src="" alt="" className="h-10 w-10 rounded-full filter gratscale hover:grayscale-0"/>
            <p>Boulate Kwamboka</p>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
