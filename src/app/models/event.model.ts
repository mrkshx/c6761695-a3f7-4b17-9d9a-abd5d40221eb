import { Artist } from './artist.model'

export interface Event {
    _id: string,
    title: string,
    flyerFront?: string
    attending: number,
    date: string,
    startTime?: string,
    endTime?: string,
    contentUrl: string,
    venue: {
      id: string,
      name: string,
      contentUrl: string,
      live: boolean,
      direction: string
    },
    pick?: {
      id: string,
      blurb: string
    },
    artists: Artist[],
    city: string,
    country: string,
    private: boolean,
    __v: number
  }