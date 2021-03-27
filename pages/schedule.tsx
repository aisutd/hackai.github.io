import { FC, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import classNames from 'classnames'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Countdown from '../components/countdown'
import getEvents from '../utils/event-cache'
import Event from '../structures/event'
import SegmentedControl from '../components/segmented-control'
import Link from 'next/link'

interface ScheduleProps {
  events: Event[]
}

const Schedule: FC<ScheduleProps> = ({ events }: ScheduleProps) => {
  const [trackFilter, setTrackFilter] = useState<number>(-1)
  const [dayFilter, setDayFilter] = useState<number>(-1)
  const day1 = new Date(1616907600000)

  return (
    <div>
      <Head>
        <title>HackAI: Schedule</title>
      </Head>
      <Countdown />
      <Navbar />
      <div className='mt-16 mb-4'>
        <h2 className='font-bold text-5xl text-center purple-gradtext'>Schedule</h2>
      </div>

      <main className='mx-auto px-4 max-w-4xl'>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2'>
          {/* Track filter controls */}
          <div className='text-center col-span-1'>
            <h4 className='text-lg font-medium mb-2'>Filter by Track</h4>
            <div className='flex flex-row items-center justify-center'>
              <SegmentedControl choices={[1, 2, 3]} onChange={idx => setTrackFilter(idx)} />
            </div>
          </div>
          {/* Hackathon day filter controls */}
          <div className='text-center col-span-1'>
            <h4 className='text-lg font-medium mb-2'>Filter by Hackathon Day</h4>
            <div className='flex flex-row items-center justify-center'>
              <SegmentedControl choices={['Day 1', 'Day 2']} onChange={idx => setDayFilter(idx)} />
            </div>
          </div>
        </div>

        <section className='mt-8'>
          {events
            .filter(ev => (trackFilter !== -1 ? ev.tracks.includes(trackFilter + 1) : true))
            .filter(ev =>
              dayFilter !== -1 ? Number(ev.startTime - day1.getTime() >= 0) === dayFilter : true
            )
            .map((ev, idx) => (
              <Link href={`/event/${ev.slug}`} key={idx}>
                <a>
                  <div
                    className={classNames(
                      'py-4 border border-b border-l-0 border-r-0 border-t-0 border-gray-300 hover:opacity-80 transition-opacity',
                      idx === 0 && 'border-t'
                    )}>
                    <div className='flex flex-row items-center'>
                      <h5 className='font-semibold text-xl'>{ev.name}</h5>
                      <div className='flex-1'></div>
                      <div className='px-3 py-1 bg-white bg-opacity-20 rounded-full font-medium'>
                        {ev.type[0].toLocaleUpperCase() + ev.type.substr(1)}
                      </div>
                    </div>
                    <div className='flex flex-row items-center'>
                      <h5 className='text-md'>Presented by {ev.presenter}</h5>
                      <span className='text-md mx-2'>&bull;</span>
                      <h5 className='text-md'>
                        {ev.tracks.length < 2 ? 'Track' : 'Tracks'} {ev.tracks.join(', ')}
                      </h5>
                    </div>
                    <h5 className='text-md'>
                      {new Date(ev.startTime).toLocaleDateString() +
                        ' ' +
                        new Date(ev.startTime).toLocaleTimeString([], {
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      &ndash;
                      {new Date(ev.endTime).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </h5>
                  </div>
                </a>
              </Link>
            ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<ScheduleProps> = async () => {
  const events = await getEvents()
  return {
    props: {
      events,
    },
  }
}

export default Schedule
