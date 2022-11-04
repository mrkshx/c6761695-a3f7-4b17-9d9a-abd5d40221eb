import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsDataService {
  private eventsData: any[] = []
  private unselectedEventsData: any[] = []

  constructor(private http: HttpClient) {}

  getEventsData() {
    return this.eventsData
  }

  getUnselectedEventsData() {
    return this.unselectedEventsData
  }

  removeUnselectedEvent(id: string) {
    const eventIndex = this.unselectedEventsData.findIndex(e => e._id === id)
    this.unselectedEventsData.splice(eventIndex, 1)
  }

  fetchEventsData() {
    this.http
      .get(`https://tlv-events-app.herokuapp.com/events/uk/london`)
      .subscribe((data) => {
        Object.values(data).forEach((event) => {
          this.eventsData.push(event)
          this.unselectedEventsData.push(event)
        });
      });
  }
}
