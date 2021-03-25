import Link from 'next/link'
import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div className='mt-16'>
      <div className='mt-2 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-8 flex flex-col items-center justify-center'>
        <img
          src='/assets/hackaibrain.png'
          className='mb-4'
          style={{ maxHeight: '100px', width: 'auto' }}
        />
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold'>
          <span className='bg-gradient-to-r text-transparent from-blue-400 via-capri to-blue-500 bg-clip-text'>
            Hack
          </span>
          <span className='purple-gradtext'>AI</span>
        </h1>
        <h3 className='py-1 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-medium'>
          March 27-28, 2021
        </h3>
        <div className='text-lg mt-2 py-2 text-center'>
          The largest AI-themed hackathon at UT Dallas is back! <br />
          <span className='text-gray-300 text-md'>
            Sign up closes on March 22, 2021 at 11:59 PM CST.
          </span>
        </div>
        <Link href='https://discord.com/invite/QPwAVZtTfp'>
          <button className='mt-6 rounded-full py-2 px-8 text-lg bg-capri text-black hover:bg-blue-400 hover:text-black text-ocean font-medium'>
            Join the Discord server
          </button>
        </Link>
        <br />
        <br />

      </div>
    </div>
  )
}

export default Hero
