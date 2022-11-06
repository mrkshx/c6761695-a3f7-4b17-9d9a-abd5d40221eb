import { Component, OnInit } from '@angular/core';
import { EventsDataService } from 'src/app/services/events-data.service';
import { Event } from '../../models/event.model'

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.sass'],
})
export class EventsContainerComponent implements OnInit {
  filterKeyword: string = ''

  constructor(public eventsData: EventsDataService) {}

  ngOnInit(): void {
    this.eventsData.filterKeywordSubject.subscribe((keyword: string)=> this.filterKeyword = keyword)
  }

  getEventsByDateAndKeyword(date: string) {
    return this.eventsData.getEventsData().filter((event: Event) => event.date === date && event.title.toLowerCase().includes(this.filterKeyword.toLowerCase()))
  }
}
