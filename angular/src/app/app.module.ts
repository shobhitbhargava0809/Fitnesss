import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpwComponent } from './resetpw/resetpw.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BindingComponent } from './binding/binding.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JoinComponent } from './join/join.component';
import { ViewComponent } from './view/view.component';
import { Header2Component } from './header2/header2.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { ItemsComponent } from './items/items.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { UpdatedpassComponent } from './updatedpass/updatedpass.component';
import { RaaComponent } from './raa/raa.component';
import { Raa2Component } from './raa2/raa2.component';
import { Raa3Component } from './raa3/raa3.component';
import { Raa4Component } from './raa4/raa4.component';
import { HeadingComponent } from './heading/heading.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    OrderComponent,
    LoginComponent,
    ForgotpwComponent,
    SignupComponent,
    ResetpwComponent,
    AdmindashboardComponent,
    PagenotfoundComponent,
    BindingComponent,
    JoinComponent,
    ViewComponent,
    Header2Component,
    AdminordersComponent,
    ItemsComponent,
    SettingsComponent,
    LogoutComponent,
    ViewitemsComponent,
    UpdatedpassComponent,
    RaaComponent,
    Raa2Component,
    Raa3Component,
    Raa4Component,
    HeadingComponent,
    AboutusComponent,
    
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
