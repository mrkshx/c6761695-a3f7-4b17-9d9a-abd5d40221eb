import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.sass']
})
export class EventCardComponent implements OnInit {

  @Input() id: string = ''
  @Input() title: string = ''
  @Input() flyer: string = ''
  @Input() venueName: string = ''
  @Input() venueDirection: string = ''
  @Input() startTime: string = ''
  @Input() endTime: string = ''

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
