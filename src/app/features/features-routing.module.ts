import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';


const routes: Routes = [
  {
    path: "",
    component: FeaturesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      // ADmin part
      {
        path: 'custumers',
        loadChildren: () => import('./custumers/custumers.module').then(m => m.CustumersModule)
      },
      {
        path: 'alerts',
        loadChildren: () => import('./alertes/alertes.module').then(m => m.AlertesModule)
      },
   
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
