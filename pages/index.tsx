import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen  snap -y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Boulate Kwamboka</title>
        <meta name="description" content="Boulate's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Header />
       <section id='hero' className='snap-start'>
         <Hero />
       </section>
       <section id="about">
        <About />
       </section>
     
    </div>
  )
}

export default Home
