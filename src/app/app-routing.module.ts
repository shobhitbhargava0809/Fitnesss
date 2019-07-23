import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymsComponent } from './gyms/gyms.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';
import { AdminComponent } from './admin/admin.component';
import { MembershipComponent } from './membership/membership.component';
import { ChoiceComponent } from './choice/choice.component';


const routes: Routes = [
  {path:'home',component:HomeComponent}, 
  {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'gyms',component:GymsComponent},
 {path:'binding',component:BindingComponent},
 {path:'join',component:JoinComponent},
 {path:'login',component:LoginComponent},
 {path:'view',component:ViewComponent},
 {path:'table',component:TableComponent},
 {path:'update',component:UpdateComponent},
 {path:'admin',component:AdminComponent},
 {path:'membership',component:MembershipComponent},
 {path:'choice',component:ChoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
