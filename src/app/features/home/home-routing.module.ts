import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectrovansComponent } from './electrovans/electrovans.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'electrovan/:id',
    component: ElectrovansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
