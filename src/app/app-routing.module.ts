import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsViewComponent } from './components/events-view/events-view.component';

const routes: Routes = [
  { path: 'events', component: EventsViewComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
