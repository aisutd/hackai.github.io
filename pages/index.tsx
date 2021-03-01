import { FC } from 'react'
import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import About from '../components/about'
import Why from '../components/why'
import Sponsors from '../components/sponsors'
import FAQ from '../components/faq'
import Footer from '../components/footer'
import Countdown from '../components/countdown'

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>HackAI: The Largest AI Hackathon at UT Dallas</title>
      </Head>
      <Countdown />
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
