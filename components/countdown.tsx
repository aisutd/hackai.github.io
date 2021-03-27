import { FC } from 'react'
import Count, { CountdownRendererFn } from 'react-countdown'

const Countdown: FC = () => {
  const renderer: CountdownRendererFn = props => {
    if (props.completed) return <span>Submissions are closed!</span>
    return (
      <span>
        Project submissions due in&nbsp;
        {props.days >= 1 ? new String(props.days).padStart(2, '0') + ':' : ''}
        {new String(props.hours).padStart(2, '0')}:{new String(props.minutes).padStart(2, '0')}:
        {new String(props.seconds).padStart(2, '0')}!
      </span>
    )
  }

  return (
    <div className='text-center text-xl mx-auto py-2 bg-wisteria text-black select-none font-medium'>
      <Count date={new Date(1616947200000)} renderer={renderer} />
    </div>
  )
}

export default Countdown
