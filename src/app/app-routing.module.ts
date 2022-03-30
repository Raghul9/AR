import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddregistrationComponent } from './addregistration/addregistration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { PassengerdetailsService } from './passengerdetails.service';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { FticketbookingComponent } from './fticketbooking/fticketbooking.component';
import { AddflightComponent } from './addflight/addflight.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { AddseatComponent } from './addseat/addseat.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { DisplayComponent } from './display/display.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DisplaybookingsComponent } from './displaybookings/displaybookings.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
  {path:'registration',component:AddregistrationComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'searchflight',component:SearchFlightComponent},
  {path:'selectseat',component:SelectseatComponent},
  {path:'addpassenger',component:AddpassengerComponent},
  {path:'addpayment',component:AddpaymentComponent},
  {path:'addticket',component:FticketbookingComponent},
  {path:'addflight',component:AddflightComponent},
  {path:'deleteflight',component:DeleteflightComponent},
  {path:'addseat',component:AddseatComponent},
  {path:'ticketcancel',component:CancelticketComponent},
  {path:'display',component:DisplayComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'bookings',component:DisplaybookingsComponent},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
