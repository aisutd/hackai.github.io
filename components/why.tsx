import { FC } from 'react'

const Why: FC = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto my-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:px-8 md:px-8 px-0'>
        <div className='py-4 px-6 col-span-1'>
          <img src='/assets/participants.jpg' alt='HackAI participants' className='w-full' />
        </div>
        <div className='py-4 px-6 col-span-1 flex flex-col items-center justify-center'>
          <h2 className='text-center font-medium text-3xl mb-4'>Why Attend HackAI?</h2>
          <p className='text-lg text-justify'>
            Attending HackAI gives you a chance to delve into the world of AI, and demonstrate your
            skills by entering the competitions! You can meet fellow participants, recruiters, learn
            topics from other organizations, and take part in our socials - not to mention a chance
            to get some awesome swag!
          </p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto my-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:px-8 md:px-8 px-0'>
        <div className='py-4 px-6 col-span-1 flex flex-col items-center justify-center'>
          <h2 className='text-center font-medium text-3xl mb-4'>Why Sponsor HackAI?</h2>
          <p className='text-lg text-justify'>
            Sponsoring HackAI is a win-win situation, as your contribution could allow us to provide
            the resources our participants need to complete company challenges. In return, your
            company or organization will gain access to top tech talent, advertising opportunities,
            branding recognition, time to present tech talks or showcase products, and even a
            potential solution to a business challenge you may provide.
          </p>
        </div>
        <div className='py-4 px-6 col-span-1'>
          <img src='/assets/sponsors.jpg' alt='HackAI sponsors' className='w-full' />
        </div>
      </div>
    </>
  )
}

export default Why
