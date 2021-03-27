export default interface Event {
  slug: string
  name: string
  type: EventType
  presenter: string
  tracks: number[]
  startTime: number
  endTime: number
  location: string
  link: string
  description: string
}

export const EVENT_TYPES = ['ceremonies', 'workshop', 'talk', 'panel', 'social'] as const
export type EventType = typeof EVENT_TYPES[number]
