import { FC } from 'react'

const Sponsors: FC = () => {
  return (
    <div className='max-w-7xl mx-auto my-0 mt-32 mb-16' id='sponsors'>
      <h2 className='text-center font-bold text-4xl mb-8 purple-gradtext'>Past Sponsors</h2>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto my-0 px-4 py-8 grid-flow-row bg-white'>
        <div className='md:flex md:col-span-2'>
          <div className='flex flex-row items-center justify-center flex-1 p-12'>
            <img src='/assets/sponsor-logos/deepcognition.png' alt='Deep Cognition' />
          </div>
          <div className='flex flex-row items-center justify-center flex-1 p-4'>
            <img src='/assets/sponsor-logos/openai.png' alt='OpenAI' />
          </div>
          <div className='flex flex-row items-center justify-center flex-1 p-4'>
            <img src='/assets/sponsor-logos/signapay.jpeg' alt='SignaPay' />
          </div>
        </div>
        <div className='md:flex md:col-span-2'>
          <div className='flex flex-row items-center justify-center flex-1 pl-8 p-2'>
            <img
              src='/assets/sponsor-logos/csdept.png'
              alt='Department of Computer Science at The University of Texas at Dallas'
            />
          </div>
          <div className='flex flex-row items-center justify-center flex-1 p-8'>
            <img
              src='/assets/sponsor-logos/aicenter.png'
              alt='Center for Applied AI &amp; Machine Learning at The University of Texas at Dallas'
            />
          </div>
        </div>
      </div>
      <br></br>      
    </div >
  )
}

export default Sponsors
