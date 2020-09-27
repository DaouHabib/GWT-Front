import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  {
  path: '',
  redirectTo: '/authentication/login',
  pathMatch: 'full'
},
{
  path: 'authentication',
  loadChildren: () => import('./features/authentication/authentification.module').then(m => m.AuthentificationModule)
},
{
  path: 'features',
  loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
  
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
