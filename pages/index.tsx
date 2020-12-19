import { FC } from 'react'
import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
