import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsViewComponent } from './components/events-view/events-view.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'events', component: EventsViewComponent, title: 'Events' },
  { path: 'shoppingcart', component: ShoppingCartComponent, title: 'Shopping cart' },
  { path: '', redirectTo: '/events', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
