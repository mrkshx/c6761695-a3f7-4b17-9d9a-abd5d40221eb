import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.sass']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() id: string = ''
  @Input() title: string = ''
  @Input() venueName: string = ''
  @Input() date: string = ''


  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.shoppingCart.removeEventFromShoppingCart(this.id)
  }

}
