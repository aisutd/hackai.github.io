import { getSpreadsheet, sheetToEvents } from './event-getter'
import Event from '../structures/event'

let data: Event[] = null

// Return cached data if available, else get the data
export default async function getEventData(): Promise<Event[]> {
  if (!data) {
    console.log('[NOTE] Retrieving data from Google Sheets API...')
    data = await getSpreadsheet().then(sheetToEvents)
  }
  return data
}

// Return specifically only the slugs
export async function getEventSlugs(): Promise<string[]> {
  const events = await getEventData()
  return events.map(e => e.slug)
}
