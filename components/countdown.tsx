import { FC } from 'react'
import Count, { CountdownRendererFn } from 'react-countdown'

const Countdown: FC = () => {
  const renderer: CountdownRendererFn = props => {
    const day = props.days > 1 ? 'days' : 'day'
    const hour = props.hours > 1 ? 'hours' : 'hour'
    const minutes = props.minutes > 1 ? 'minutes' : 'minute'
    return (
      <span>
        {props.days} {day}
      </span>
    )
  }

  return (
    <div className='text-center text-xl mx-auto py-2 bg-wisteria text-black select-none font-medium'>
      <span>Applications open in </span>
      <Count date={1612159200000} renderer={renderer} />
      <span>!</span>
    </div>
  )
}

export default Countdown
