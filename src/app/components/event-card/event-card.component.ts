import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.sass']
})
export class EventCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() flyer: string = ''
  @Input() venueName: string = ''
  @Input() startTime: string = ''
  @Input() endTime: string = ''

  ngOnInit(): void {
  }

}
