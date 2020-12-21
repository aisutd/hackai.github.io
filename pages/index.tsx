import { FC } from 'react'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import About from '../components/about'
import Why from '../components/why'
import PastSponsors from '../components/past-sponsors'

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <PastSponsors />
    </div>
  )
}

export default Home
