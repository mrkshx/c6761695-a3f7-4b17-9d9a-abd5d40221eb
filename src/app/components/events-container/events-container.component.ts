import { Component, OnInit } from '@angular/core';
import { EventsDataService } from 'src/app/services/events-data.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.sass'],
})
export class EventsContainerComponent implements OnInit {
  filterKeyword: string = ''

  constructor(public eventsData: EventsDataService) {}

  ngOnInit(): void {
    this.eventsData.filterKeywordSubject.subscribe(keyword => this.filterKeyword = keyword)
  }

  getEventsByDateAndKeyword(date: string) {
    return this.eventsData.getEventsData().filter(event => event.date === date && event.title.includes(this.filterKeyword))
  }
}
