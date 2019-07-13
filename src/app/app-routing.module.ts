import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymsComponent } from './gyms/gyms.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home',component:HomeComponent}, 
  {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'gyms',component:GymsComponent},
 {path:'binding',component:BindingComponent},
 {path:'join',component:JoinComponent},
 {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
