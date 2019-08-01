import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path : 'heros', component : HerosComponent},
  {path : '', component : LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
