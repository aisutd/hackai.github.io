import { FC } from 'react'
import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import About from '../components/about'
import Why from '../components/why'
import PastSponsors from '../components/past-sponsors'
import FAQ from '../components/faq'
import Footer from '../components/footer'
import Countdown from '../components/countdown'
import Attribution from '../components/attribution'

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>HackAI: The Largest AI Hackathon at UT Dallas</title>
      </Head>
      <Countdown />
      {/* <Attribution /> */}
      <Navbar />
      <Hero />
      <About />
      <Why />
      <PastSponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
