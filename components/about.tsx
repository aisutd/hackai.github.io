import { FC } from 'react'

const About: FC = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto my-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:px-8 md:px-8 px-0'>
        <div className='py-4 px-6 col-span-1 flex flex-col items-center justify-center'>
          <h2 className='text-center font-medium text-3xl mb-4 purple-gradtext'>What is HackAI?</h2>
          <p className='text-lg text-justify'>
            HackAI is a student-run annual hackathon organized by the Artificial Intelligence
            Society at The University of Texas of Dallas, aiming to connect today&apos;s students
            with the knowledge and resources needed to build Artificial Intelligence (AI) related
            projects in the span of 24 hours. Topics such as Natural Language Processing, Machine
            Learning, Data Analytics, and more will be represented amongst these projects, and we
            are confident that both the creativity and quality of the submissions will be incredibly
            high. The hackathon encompasses various levels of competition tasks, designed to
            challenge students while providing value to sponsors.
          </p>
        </div>
        <div className='py-4 px-auto sm:px-0 md:px-6 lg:px-6 xl:px-6 col-span-1'>
          <iframe
            className='w-full h-full'
            style={{ minHeight: '20rem' }}
            src='https://www.youtube.com/embed/CmlHXa9AKUM'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        </div>
      </div>
      <div className='max-w-7xl mx-auto my-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:px-8 md:px-8 px-0'>
        <div className='py-4 px-auto sm:px-0 md:px-6 lg:px-6 xl:px-6 col-span-1'>
          <img src='/assets/hackai-1.jpg' alt='HackAI participants coding' className='w-full' />
        </div>
        <div className='py-4 px-6 col-span-1 flex flex-col items-center justify-center'>
          <h2 className='text-center font-medium text-3xl mb-4 purple-gradtext'>Our Mission</h2>
          <p className='text-lg text-justify'>
            Today, artificial intelligence is a buzzword that’s continuously mentioned. Still, many
            students are unaware of what it means, the subtopics within the field, and how they can
            get started and nurture their interests, especially beginners. We hope to take the
            mystery out of this specialized niche in computer science and bring it forward to
            students through a hackathon dedicated to featuring AI-related material. We aim for our
            virtual event to provide both learning and competition opportunities and connect them to
            professionals who can further guide them in their AI journey.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
