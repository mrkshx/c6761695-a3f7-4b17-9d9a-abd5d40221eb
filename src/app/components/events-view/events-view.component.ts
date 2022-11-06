import { Component, OnChanges, OnInit } from '@angular/core';
import { EventsDataService } from 'src/app/services/events-data.service';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.sass'],
})
export class EventsViewComponent implements OnInit {
  firstDate: string = '';
  lastDate: string = '';

  constructor(public eventsData: EventsDataService) {}

  ngOnInit(): void {
    this.getDateRange();
  }

  getDateRange(): void {
    this.eventsData.datesSubject.subscribe((dates: string[]) => {
      this.firstDate = dates[0]
      this.lastDate = dates[dates.length - 1]
    });
  }
}
