import { FC } from 'react'
import type { AppProps } from 'next/app'
import '../global.css'
import { NextSeo } from 'next-seo'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo
        title='HackAI: The Largest AI Hackathon at Dallas'
        description='HackAI is a student-run annual hackathon organized by the Artificial Intelligence Society at The University of Texas of Dallas.'
        openGraph={{
          type: 'website',
          url: 'https://hackai.org/',
          title: 'HackAI: The Largest AI Hackathon at Dallas',
          description:
            "HackAI is a student-run annual hackathon organized by the Artificial Intelligence Society at The University of Texas of Dallas, aiming to connect today's students with the knowledge and resources needed to build Artificial Intelligence (AI) related projects in the span of 24 hours.",
          images: [
            {
              url: '/assets/opengraph.png',
              width: 1200,
              height: 627,
              alt: 'HackAI Logo',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
