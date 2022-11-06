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

  addEventToShoppingCart(id: string) {
    if (!this.selectedEventIDs.includes(id)) {
      this.selectedEventIDs.push(id)
      const event = this.eventsData.getEventbyID(id) 
      if (event !== undefined) {
        this.selectedEvents.push(event as Event)
      }
      this.eventsData.removeUnselectedEvent(id)
    }
  }

  getEventsCount() {
    return this.selectedEventIDs.length
  }

  getSelectedEvents() {
    return this.selectedEvents
  }
}
