import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.sass']
})
export class EventCardComponent implements OnInit {

  @Input() title: string = 'Boiler Room Festival London';
  @Input() flyer: string = 'https://static.ra.co/images/events/flyer/2021/10/uk-1013-1446177-1809341-front.jpg?dateUpdated=1634054771790'
  @Input() venue = {
    name: "The Cause"
  }
  @Input() startTime: string = '2021-10-13T19:00:00.000'
  @Input() endTime: string = '2021-10-17T06:00:00.000'

  ngOnInit(): void {
  }

}
