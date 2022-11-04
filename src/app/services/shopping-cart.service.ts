import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private selectedEvents: any[] = []

  constructor() { }

  addEvent(id: string) {
    if (!this.selectedEvents.includes(id)) {
      this.selectedEvents.push(id)
    }
  }

  getEventsCount() {
    return this.selectedEvents.length
  }
}
