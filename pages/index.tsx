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

const Home: FC = () => {
  const eventMeta = `
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "HackAI 2021",
  "startDate": "2021-03-27T8:30:00-06:00",
  "endDate": "2021-07-28T18:30-06:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://hackai.org/"
    },
  "image": [
    "https://hackai.org/assets/participants.jpg",
    "https://hackai.org/assets/sponsors.jpg",
   ],
  "description": "A student-run annual hackathon aiming to connect today's students with the knowledge and resources needed to build AI-related projects in the span of 24 hours.",
  "organizer": {
    "@type": "Organization",
    "name": "The Artificial Intelligence Society at UT Dallas",
    "url": "https://aisutd.org/"
  }
}
`
  return (
    <div>
      <Head>
        <title>HackAI: The Largest AI Hackathon at UT Dallas</title>
        <script type='application/ld+json'>{eventMeta}</script>
      </Head>
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Why />
      <PastSponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
