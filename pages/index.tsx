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
        <link rel='icon' type='image/svg+xml' href='/assets/hackaibrain.png' />
        <title>HackAI: The Largest AI Hackathon at UT Dallas</title>
        <meta
          name='description'
          content='Welcome to HackAI, the largest AI Hackathon at UT Dallas'
        />
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
