import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GlobalComponent } from '../globalcomponent';

@Component({
  selector: 'app-fticketbooking',
  templateUrl: './fticketbooking.component.html',
  styleUrls: ['./fticketbooking.component.css']
})
export class FticketbookingComponent implements OnInit {

  flightid:number=0;
  flightdate:Date=new Date;
  seatid:number=0;
  seatprice:number=0;
  passid:number=0;
  passname:string='';
  payid:number=0;
  tid:number=0;
  email:string='';
  dday :string|null='';

  constructor(private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.flightid=history.state.flightid;
    this.flightdate=history.state.flightdate;
    this.dday=this.datepipe.transform(this.flightdate,"yyyy-MM-dd")
    this.seatid=history.state.seatid;
    this.seatprice=history.state.seatprice;
    this.passid=history.state.passid;
    this.passname=history.state.passname
    this.tid=history.state.tid;
    this.email=GlobalComponent.email;
    
  }

}
