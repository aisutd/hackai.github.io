import Link from 'next/link'
import { FC } from 'react'
import Count from 'react-countdown'

const Hero: FC = () => {
  return (
    <div className='mt-20 flex flex-row items-center justify-center'>
      <div className='flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row items-center justify-between w-screen px-6 max-w-7xl'>
        <div className='p-4'>
          <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r text-transparent from-blue-300 via-capri to-blue-500 bg-clip-text'>
            Hack<span className='blue-gradtext-alt'>AI</span>
          </h1>
          <h3 className='py-1 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-medium'>
            March 27-28, 2021
          </h3>
          <div className='w-full flex-row items-center'>
            <div className='text-lg mt-2 py-2'>
              The largest AI-themed hackathon at UT Dallas is back! <br />
              <span className='text-gray-300 text-md'>
                Sign up to get notified when applications open.
              </span>
            </div>
            <Link href='//form.typeform.com/to/NJCsokJY'>
              <button className='mt-6 rounded-full py-2 px-8 text-lg bg-capri text-black hover:bg-blue-400 hover:text-black text-ocean font-medium'>
                Sign up for updates
              </button>
            </Link>
          </div>
        </div>
        <div className='lg:pr-20 xl:pr-20'>
          <img src='/assets/hackai-logo.png' style={{ maxHeight: '400px', width: 'auto' }} />
        </div>
      </div>
    </div>
  )
}

export default Hero
