import { FC, ReactNode, useState } from 'react'
import classNames from 'classnames'

interface SegmentedControlProps {
  choices: ReactNode[]
  onChange?: (idx: number) => unknown
}

const SegmentedControl: FC<SegmentedControlProps> = ({
  choices,
  onChange,
}: SegmentedControlProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(-1)

  const select = (idx: number) => {
    let setIdx = -1
    if (selectedIdx !== idx) {
      setIdx = idx
    }
    setSelectedIdx(setIdx)
    onChange(setIdx)
  }

  return (
    <div className='flex flex-row items-center justify-center'>
      {choices.map((choice, idx) => (
        <button
          className={classNames(
            'px-6',
            'py-1',
            selectedIdx === idx ? 'bg-blue-500' : 'bg-blue-400',
            'hover:bg-blue-500',
            'font-medium',
            'outline-none',
            idx === 0 && 'rounded-l-full',
            idx === choices.length - 1 && 'rounded-r-full'
          )}
          key={idx}
          onClick={() => select(idx)}>
          {choice}
        </button>
      ))}
    </div>
  )
}

export default SegmentedControl
