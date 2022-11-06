import { Injectable } from '@angular/core'
import { EventsDataService } from './events-data.service'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private selectedEventIDs: string[] = []
  private selectedEvents: any[] = []


  constructor(public eventsData: EventsDataService) { }

  addEventToShoppingCart(id: string) {
    if (!this.selectedEventIDs.includes(id)) {
      this.selectedEventIDs.push(id)
      this.selectedEvents.push(this.eventsData.getEventbyID(id))
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
