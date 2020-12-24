import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className='mt-32 w-full bg-white bg-opacity-10'>
      <div className='py-4 max-w-7xl mx-auto text-center'>
        <div className='flex flex-row items-center justify-between mx-auto max-w-xs my-4'>
          <a href='//instagram.com/utdais' className='text-wisteria font-medium'>
            <img src='/assets/ig.svg' className='h-6' alt='a' />
          </a>
          <a href='//linkedin.com/company/ais-utd' className='text-wisteria font-medium'>
            <img src='/assets/li.svg' className='h-6' alt='a' />
          </a>
          <a href='//facebook.com/groups/1551548501821102/' className='text-wisteria font-medium'>
            <img src='/assets/fbk.svg' className='h-6' alt='' />
          </a>
          <a href='mailto:contact@aisociety.io' className='text-wisteria font-medium'>
            <img src='/assets/mail.svg' className='h-6' alt='mail' />
          </a>
        </div>
        <div className='mt-8'>© 2020 AIS UTD. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
