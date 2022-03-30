import { Component, OnInit } from '@angular/core';
import { FdetailsService } from '../fdetails.service';
import { Ifdetails } from '../ifdetails';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { GlobalComponent } from '../globalcomponent';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  
  // constructor(private fdetailsservice:FdetailsService) {
  //   this.fdetailsservice.getFlightList().subscribe(data =>{this.flightlist=data;console.log(this.flightlist);})
  //  }
  flightlist:Ifdetails={departureloc:'',destination:'',fdate:new Date}
  email:string='';
  constructor(private fdetailsservice:FdetailsService, private router:Router ) { }
  // deptlist:any[]=[];
  flight:any[]=[];
  
  ngOnInit(): void {
   this.email=GlobalComponent.email;
  }
  listFlight(flight1:Ifdetails)
  {
    this.flightlist=flight1;
    this.fdetailsservice.getFlightList(this.flightlist.departureloc,this.flightlist.destination,this.flightlist.fdate).subscribe(data =>{this.flight=data;console.log(data);}) 
   // this.router.navigate(['/flightlist'])
}
gotoseat(flightid:number,flightdate:Date){
  //this.seatservice.getSeat(flightid).subscribe(data =>{this.seatdetail=data;console.log(data);})
   this.router.navigateByUrl('/selectseat' ,{state:{flightid:flightid,flightdate:flightdate,email:this.email}})
}

}
