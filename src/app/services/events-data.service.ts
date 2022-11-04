import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsDataService {
  private eventsData: any[]= []

  constructor(private http: HttpClient) {}

  getEventsData() {
    return this.eventsData
  }

  fetchEventsData() {
    this.http
      .get(`https://tlv-events-app.herokuapp.com/events/uk/london`)
      .subscribe((data) => {
        Object.values(data).forEach(event => {
          this.eventsData.push(event)
        })
        }
      )
  }
}
