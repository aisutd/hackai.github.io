import { FC } from 'react'

const PastSponsors: FC = () => {
  return (
    <div className='max-w-7xl mx-auto my-0 mt-32 mb-16' id='past-sponsors'>
      <h2 className='text-center font-bold text-4xl mb-8'>Past Sponsors</h2>
      <div className='grid grid-cols-3 max-w-4xl mx-auto my-0 px-4 py-8 grid-flow-row bg-white'>
        <div className='flex flex-row items-center justify-center px-6'>
          <img src='/assets/sponsor-logos/atos.png' alt='' />
        </div>
        <div className='flex flex-row items-center justify-center px-6'>
          <img src='/assets/sponsor-logos/cbre.png' alt='' />
        </div>
        <div className='flex flex-row items-center justify-center px-6'>
          <img src='/assets/sponsor-logos/deepcognition.png' alt='' />
        </div>
        <div className='flex flex-row items-center justify-center px-6'>
          <img src='/assets/sponsor-logos/ecs.jpg' alt='' />
        </div>
        <div className='flex flex-row items-center justify-center px-6'>
          <img src='/assets/sponsor-logos/mavs.png' alt='' />
        </div>
        <div className='flex flex-row items-center justify-center px-6'>
          <img src='/assets/sponsor-logos/signapay.jpeg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default PastSponsors
