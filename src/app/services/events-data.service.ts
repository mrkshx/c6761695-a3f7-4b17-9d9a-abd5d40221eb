import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsDataService {
  private eventsData: any[] = []
  private unselectedEventsData: any[] = []
  private dates: string[] = []
  
  public datesSubject = new Subject<string[]>();

  constructor(private http: HttpClient) {
    this.fetchEventsData()
  }

  getEventsData() {
    return this.eventsData
  }

  getUnselectedEventsData() {
    return this.unselectedEventsData
  }

  saveDates() {
    this.unselectedEventsData.forEach((event: any) => {
        if (!this.dates.includes(event.date)) {
          this.dates.push(event.date)
        }
    })
    this.dates.sort()
    this.datesSubject.next(this.dates)
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
        this.saveDates()
      });
  }
}
