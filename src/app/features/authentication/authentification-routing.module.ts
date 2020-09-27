import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: "",
  component: AuthentificationComponent,
  children: [
    {
      path: "login",
      component: LoginComponent
    }
    
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
