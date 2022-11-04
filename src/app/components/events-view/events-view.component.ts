import { Component, OnChanges, OnInit } from '@angular/core';
import { EventsDataService } from 'src/app/services/events-data.service';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.sass'],
})
export class EventsViewComponent implements OnInit, OnChanges {
  constructor(public eventsData: EventsDataService) {}
  firstDate = '';
  lastDate = '';

  ngOnInit(): void {
    this.getDateRange();
  }

  ngOnChanges(): void {}

  getDateRange() {
    this.eventsData.datesSubject.subscribe((dates) => {
      this.firstDate = dates[0]
      this.lastDate = dates[dates.length - 1]
    });
  }
}
