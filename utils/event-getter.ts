/* eslint-disable @typescript-eslint/no-explicit-any */
import { google } from 'googleapis'
import { arrayEquals } from './arrays'
import Event, { EventType, EVENT_TYPES } from '../structures/event'

/**
 * A lot of this code was inspired by the acmutd/calendar-converter project.
 * Please don't sue me ;-;
 */

export const COLUMN_NAMES = [
  'Slug',
  'Name',
  'Type',
  'Presenter',
  'Track',
  'Date',
  'Start Time',
  'End Time',
  'Location',
  'Link',
  'Description',
] as const

type ColType = typeof COLUMN_NAMES[number]

export const getSpreadsheet = async (): Promise<any[][]> => {
  // Auth is handled via the GOOGLE_APPLICATION_CREDENTIALS env var.
  // This should point to a service account that has access to the spreadsheet.
  const sheets = google.sheets({
    version: 'v4',
    auth: new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    }),
  })
  const sheet = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.EVENT_SPREADSHEET,
    range: 'Main!A:K',
  })
  // Extract an any[][]
  const data = sheet.data.values
  return data ?? []
}

export const sheetToEvents = (spreadsheet: any[][]): Event[] => {
  if (!arrayEquals(spreadsheet[0], COLUMN_NAMES)) {
    throw new Error('Unexpected header row in spreadsheet: ' + JSON.stringify(spreadsheet[0]))
  }
  spreadsheet.shift()
  return spreadsheet.map(rowToEvent).filter(x => !!x)
}

const rowToEvent = (row: any[], idx: number): Event => {
  const getVal = (col: ColType): any => row[COLUMN_NAMES.indexOf(col)]
  try {
    let type: string = getVal('Type')
    type = type.toLowerCase()
    // If this is a bad event type, throw an error
    if (!EVENT_TYPES.includes(type as any)) throw new Error('Event type is invalid: ' + type)
    // Split and parse track numbers, then sort
    const tracks: number[] = (getVal('Track') as string)
      .split(',')
      .map(x => parseInt(x.trim()))
      .sort()
    // Date this event is being held.
    const dateStr = getVal('Date')
    // Times are given in CDT.
    const startTimeStr = getVal('Start Time')
    const endTimeStr = getVal('End Time')
    // Use Date.parse(...) to convert into Date objects.
    // POTENTIAL FOOTGUN ALERT - Times will be off if you use this during CST.
    // Also, Date.parse is...flaky at best.
    // There is some work to do on robustness here.
    const startTime = Date.parse(`${dateStr} ${startTimeStr} CDT`)
    const endTime = Date.parse(`${dateStr} ${endTimeStr} CDT`)
    return {
      slug: getVal('Slug'),
      name: getVal('Name'),
      type: type as EventType,
      presenter: getVal('Presenter'),
      tracks,
      startTime,
      endTime,
      location: getVal('Location'),
      link: getVal('Link'),
      description: getVal('Description'),
    }
  } catch (err) {
    // If anything goes wrong, we ignore this row and print an error
    console.error(`[Event Parsing Error] Row ${idx + 2}`)
    console.error(`${err}`)
    return null
  }
}
