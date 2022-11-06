import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Event } from '../models/event.model'
@Injectable({
  providedIn: 'root',
})

export class EventsDataService {
  private eventsData: Event[] = []
  private filteredEventsData: Event[] = []
  private dates: string[] = []
  
  public filterKeywordSubject = new Subject<string>();
  public datesSubject = new Subject<string[]>();

  constructor(private http: HttpClient) {
    this.fetchEventsData()
  }

  getEventsData(): Event[] {
    return this.filteredEventsData
  }

  getEventbyID(id: string): Event | undefined{
    return this.eventsData.find((eventData: Event )=> eventData._id == id)
  }

  saveDates(): void {
    this.filteredEventsData.forEach((event: Event) => {
        if (!this.dates.includes(event.date)) {
          this.dates.push(event.date)
        }
    })
    this.dates.sort()
  }

  getDates(): string[] {
    return this.dates
  }

  removeUnselectedEvent(id: string): void {
    const eventIndex = this.filteredEventsData.findIndex((eventData: Event) => eventData._id === id)
    this.filteredEventsData.splice(eventIndex, 1)
  }

  fetchEventsData(): void {
    this.http
      .get(`https://tlv-events-app.herokuapp.com/events/uk/london`)
      .subscribe((data) => {
        this.filteredEventsData = Object.values(data)
        this.eventsData = Object.values(data)
        this.saveDates()
      });
  }
}
