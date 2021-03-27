import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import getEvents, { getEventSlugs } from '../../utils/event-cache'
import Event from '../../structures/event'
import Countdown from '../../components/countdown'
import Navbar from '../../components/navbar'
import Link from 'next/link'

interface EventDetailProps {
  event: Event
}

const EventDetail: FC<EventDetailProps> = ({ event }: EventDetailProps) => {
  return (
    <div>
      <Head>
        <title>HackAI: {event.name}</title>
      </Head>
      <Countdown />
      <Navbar />
      <main className='mx-auto px-4 max-w-3xl'>
        <div className='mt-12 text-center'>
          <Link href='/schedule'>
            <a className='purple-gradtext font-semibold mb-4'>&larr; Back to Schedule</a>
          </Link>
          <h2 className='mt-4 font-bold text-4xl text-center text-white mb-3'>{event.name}</h2>
          <h5 className='text-lg mb-3'>Presented by {event.presenter}</h5>
          <div className='flex flex-row items-center justify-center'>
            <div className='px-3 py-1 bg-white bg-opacity-20 rounded-full font-medium'>
              {event.type[0].toLocaleUpperCase() + event.type.substr(1)}
            </div>
            <span className='text-md mx-4'>&bull;</span>
            <h5 className='text-md'>
              {new Date(event.startTime).toLocaleDateString() +
                ' ' +
                new Date(event.startTime).toLocaleTimeString([], {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              &ndash;
              {new Date(event.endTime).toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit',
              })}
            </h5>
            <span className='text-md mx-4'>&bull;</span>
            <h5 className='text-md'>
              <a href={event.link} className='text-blue-300'>
                {event.location}
              </a>
            </h5>
          </div>
        </div>
        <p className='mt-8'>{event.description}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<EventDetailProps> = async ctx => {
  const events = await getEvents()
  const x = events.filter(ev => ev.slug === ctx.params.slug)
  if (x.length === 0) throw new Error('Slug does not have associated event')
  return {
    props: {
      event: x[0],
    },
  }
}

export async function getStaticPaths(ctx) {
  const slugs = await getEventSlugs()
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export default EventDetail
