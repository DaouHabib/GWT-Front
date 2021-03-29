import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertesComponent } from './alertes.component';


const routes: Routes = [
  {
    path : "" , 
    component : AlertesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertesRoutingModule { }
