import { Injectable } from '@angular/core'
import { EventsDataService } from './events-data.service'
import { Event } from '../models/event.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private selectedEventIDs: string[] = []
  private selectedEvents: Event[] = []


  constructor(public eventsData: EventsDataService) { }

  addEventToShoppingCart(id: string): void {
    if (!this.selectedEventIDs.includes(id)) {
      this.selectedEventIDs.push(id)
      const event = this.eventsData.getEventbyID(id) 
      if (event !== undefined) {
        this.selectedEvents.push(event as Event)
      }
      this.eventsData.removeUnselectedEvent(id)
    }
  }

  removeEventFromShoppingCart(id: string): void {
    if (this.selectedEventIDs.includes(id)) {
      const index = this.selectedEventIDs.indexOf(id)
      this.selectedEventIDs.splice(index, 1)
      const event = this.eventsData.getEventbyID(id) 
      if (event !== undefined) {
        const index = this.selectedEvents.findIndex(event => event._id === id)
        this.selectedEvents.splice(index, 1)
      }
      this.eventsData.addUnselectedEvent(id)
    }
  }

  getEventsCount(): number {
    return this.selectedEventIDs.length
  }

  getSelectedEvents(): Event[] {
    return this.selectedEvents
  }
}
