import { Injectable } from '@angular/core'
import { EventsDataService } from './events-data.service'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private selectedEvents: any[] = []

  constructor(public eventsData: EventsDataService) { }

  addEvent(id: string) {
    if (!this.selectedEvents.includes(id)) {
      this.selectedEvents.push(id)
      this.eventsData.removeUnselectedEvent(id)
    }

  }

  getEventsCount() {
    return this.selectedEvents.length
  }
}
