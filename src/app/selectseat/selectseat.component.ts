import { Component, OnInit } from '@angular/core';
import { SeatService } from '../seat.service';
import { Router } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { GlobalComponent } from '../globalcomponent';

@Component({
  selector: 'app-selectseat',
  templateUrl: './selectseat.component.html',
  styleUrls: ['./selectseat.component.css']
})
export class SelectseatComponent implements OnInit {
  seatdetail:any[]=[];
  flightid:number=0;
  flightdate:Date=new Date();
  email:string='';
  dday :string|null='';
  constructor(private seatservice:SeatService, private router:Router, private htttp:HttpClient, private datepipe:DatePipe ){ }
  //console.log(this.datepipe.transform(new Date(),"yyyy-MM-ddTHH:mm:ss"));

  ngOnInit(): void {
    this.flightid=history.state.flightid;
    this.flightdate=history.state.flightdate;
    this.dday=this.datepipe.transform(this.flightdate,"yyyy-MM-dd")
    this.email=GlobalComponent.email
    this.seatservice.getSeat(this.flightid).subscribe(data =>{this.seatdetail=data;console.log(data);})
  

  }
  gotopassenger(seatid:number,seatprice:number){
    //this.seatservice.getSeat(flightid).subscribe(data =>{this.seatdetail=data;console.log(data);})
    console.log(seatprice);
     this.router.navigateByUrl('/addpassenger' ,{state:{flightid:this.flightid,flightdate:this.flightdate,seatid:seatid,seatprice:seatprice,email:this.email}})
     //flightid:number,flightdate:Date,
  }


}
