import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className='mt-32 w-full bg-white bg-opacity-10'>
      <div className='py-4 max-w-7xl mx-auto text-center'>
        <div className='flex flex-row items-center justify-between mx-auto max-w-md my-4'>
          <a href='//instagram.com/aisutd' className='text-wisteria font-medium'>
            Instagram
          </a>
          <a href='//linkedin.com/company/ais-utd' className='text-wisteria font-medium'>
            LinkedIn
          </a>
          <a href='//facebook.com/groups/1551548501821102/' className='text-wisteria font-medium'>
            Facebook
          </a>
          <a href='mailto:contact@aisociety.io' className='text-wisteria font-medium'>
            Email us
          </a>
        </div>
        <div className='mt-8'>© 2020 AIS UTD. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
