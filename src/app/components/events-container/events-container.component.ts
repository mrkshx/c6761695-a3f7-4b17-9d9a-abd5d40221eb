import { Component, OnInit } from '@angular/core';
import { EventsDataService } from 'src/app/services/events-data.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.sass']
})
export class EventsContainerComponent implements OnInit {

  events: any[] = []

  constructor(private eventsData: EventsDataService) { }

  ngOnInit(): void {
    this.events = this.eventsData.getEventsData()
  }

}
