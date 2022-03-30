import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AddregistrationComponent } from './addregistration/addregistration.component';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SelectflightComponent } from './selectflight/selectflight.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { FticketbookingComponent } from './fticketbooking/fticketbooking.component';
import { DatePipe } from '@angular/common';
import { AddflightComponent } from './addflight/addflight.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { AddseatComponent } from './addseat/addseat.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { DisplayComponent } from './display/display.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DisplaybookingsComponent } from './displaybookings/displaybookings.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    AddregistrationComponent,
    UserloginComponent,
    AdminloginComponent,
    SelectflightComponent,
    SelectseatComponent,
    AddpassengerComponent,
    AddpaymentComponent,
    FticketbookingComponent,
    AddflightComponent,
    DeleteflightComponent,
    AddseatComponent,
    CancelticketComponent,
    DisplayComponent,
    HomepageComponent,
    DisplaybookingsComponent,
    AboutusComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
