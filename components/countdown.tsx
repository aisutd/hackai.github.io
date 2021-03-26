import { FC } from 'react'
import Count, { CountdownRendererFn } from 'react-countdown'

const Countdown: FC = () => {
  const renderer: CountdownRendererFn = props => {
    const day = props.days > 1 ? 'days' : 'day'
    const hour = props.hours > 1 ? 'hours' : 'hour'
    const minutes = props.minutes > 1 ? 'minutes' : 'minute'
    // const seconds = props.seconds > 1 ? 'seconds' : 'second'
    return (
      <span>
        {props.days} {day + " "}
        {props.hours} {hour + " "}
        {props.minutes} {minutes}
        {/* {props.seconds} {seconds} */}
      </span>
    )
  }

  return (
    <div className='text-center text-xl mx-auto py-2 bg-wisteria text-black select-none font-medium'>
      <span>Hacking begins in </span>
      <Count date={1616864400000} renderer={renderer} />
    </div>
  )
}

export default Countdown
