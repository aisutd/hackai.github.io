import { FC } from 'react'
import Count from 'react-countdown'

const Countdown: FC = () => {
  return (
    <div className='my-8 max-w-lg text-center text-2xl mx-auto p-6 bg-black bg-opacity-10 rounded-full select-none'>
      <span>Applications open in </span>
      <Count date={1610172000000} />
    </div>
  )
}

export default Countdown
