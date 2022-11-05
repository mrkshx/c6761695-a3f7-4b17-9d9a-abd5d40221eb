import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsDataService {
  private eventsData: any[] = []
  private dates: string[] = []
  
  public filterKeywordSubject = new Subject<string>();
  public datesSubject = new Subject<string[]>();

  constructor(private http: HttpClient) {
    this.fetchEventsData()
  }

  getEventsData() {
    return this.eventsData
  }

  saveDates() {
    this.eventsData.forEach((event: any) => {
        if (!this.dates.includes(event.date)) {
          this.dates.push(event.date)
        }
    })
    this.dates.sort()
    this.datesSubject.next(this.dates)
  }

  removeUnselectedEvent(id: string) {
    const eventIndex = this.eventsData.findIndex(e => e._id === id)
    this.eventsData.splice(eventIndex, 1)
  }

  fetchEventsData() {
    this.http
      .get(`https://tlv-events-app.herokuapp.com/events/uk/london`)
      .subscribe((data) => {
        Object.values(data).forEach((event) => {
          this.eventsData.push(event)
        });
        this.saveDates()
      });
  }
}
