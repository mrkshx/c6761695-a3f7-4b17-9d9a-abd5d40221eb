import { Component, OnInit } from '@angular/core';
import { EventsDataService } from 'src/app/services/events-data.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService, private eventsData: EventsDataService) { }

  ngOnInit(): void {
  }

  onSearchInput(event: any) {
    this.eventsData.filterKeywordSubject.next(event.target.value)
  }

}
