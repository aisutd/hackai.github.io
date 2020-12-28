import { useState } from 'react'

type FAQCardProps = {
  question: string
  answer: string
}

const FAQCard = (props: FAQCardProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false)
  const arrow = expanded ? '\u25BC' : '\u25B6'
  const toggle = () => {
    setExpanded(!expanded)
  }
  return (
    <div className='mx-auto px-8' style={{ maxWidth: '970px' }}>
      <div className='flex flex-row items-top pb-4 text-white hover:text-capri transition-all duration-75 ease-in-out'>
        <div className='pr-10 text-xl cursor-pointer select-none' onClick={toggle}>
          {arrow}
        </div>
        <div>
          <span className='font-medium text-xl select-none cursor-pointer' onClick={toggle}>
            {props.question}
          </span>
          {expanded && <div className='mt-4 text-lg text-white'>{props.answer}</div>}
        </div>
      </div>
    </div>
  )
}

export default FAQCard
