import { Component, OnInit } from '@angular/core';
import { EventsDataService } from 'src/app/services/events-data.service';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.sass'],
})
export class EventsViewComponent implements OnInit {


  constructor(public eventsData: EventsDataService) {
  }

  ngOnInit(): void {
  }
}
