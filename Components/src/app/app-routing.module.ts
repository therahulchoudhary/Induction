import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path : 'heros', component : HerosComponent },
  {path : '', component : LandingComponent },
  {path : 'form', component : FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
