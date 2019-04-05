import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftEditComponent } from './aircraft-edit/aircraft-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/aircraft-list', pathMatch: 'full'},
  { path: 'aircraft-list', component: AircraftListComponent },
  { path: 'aircraft-add', component: AircraftEditComponent },
  { path: 'aircraft-edit/:id', component: AircraftEditComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
