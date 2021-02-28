import { FC } from 'react'

const Attribution: FC = () => {
  return (
    <div className='w-full py-1 text-center bg-black'>
      <span className='text-sm font-medium'>Hosted by the</span>
      <a
        className='text-capri text-sm font-semibold hover:text-wisteria cursor-pointer'
        href='//aisutd.org'>
        {' '}
        Artificial Intelligence Society &rarr;
      </a>
    </div>
  )
}

export default Attribution
