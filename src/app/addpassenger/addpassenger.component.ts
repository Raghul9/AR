import { Component, OnInit } from '@angular/core';
import { Ipassengerdetails } from '../ipassengerdetails';
import { PassengerdetailsService } from '../passengerdetails.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GlobalComponent } from '../globalcomponent';

@Component({
  selector: 'app-addpassenger',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.css']
})
export class AddpassengerComponent implements OnInit {
  passenger:Ipassengerdetails=
  {pid:0,pname:'',pemailid:'',pmobno:0,page:0,pgender:''}
  flightid:number=0;
  flightdate:Date=new Date;
  seatid:number=0;
  seatprice:number=0;
  passid:number=0;
  email:string='';
  dday :string|null='';
  constructor(private passengerdetailsservice:PassengerdetailsService,private router:Router, private datepipe:DatePipe) { }
  addPass(){
    this.passengerdetailsservice.addPass(this.passenger).subscribe({
      next: (data) => this.passid=data,
      complete: () => this.router.navigateByUrl('/addpayment',{state:{flightid:this.flightid,flightdate:this.flightdate,seatid:this.seatid,seatprice:this.seatprice,passid:this.passid,passname:this.passenger.pname,email:this.email}})
  })
    
    
    
  }
  savePass(passenger: Ipassengerdetails):void{
    
    this.passenger=passenger;
    this.addPass()
  }

  ngOnInit(): void {
    this.flightid=history.state.flightid;
    this.flightdate=history.state.flightdate;
    this.dday=this.datepipe.transform(this.flightdate,"yyyy-MM-dd")
    this.seatid=history.state.seatid;
    this.seatprice=history.state.seatprice;
    this.email=GlobalComponent.email
  }

}
