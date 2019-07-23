import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { GymsComponent } from './gyms/gyms.component';
import { BindingComponent } from './binding/binding.component';
import { JoinComponent } from './join/join.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';
import { AdminComponent } from './admin/admin.component';
import { MembershipComponent } from './membership/membership.component';
import { ChoiceComponent } from './choice/choice.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GymsComponent,
    BindingComponent,
    JoinComponent,
    LoginComponent,
    ViewComponent,
    TableComponent,
    UpdateComponent,
    AdminComponent,
    MembershipComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimateOnScrollModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
