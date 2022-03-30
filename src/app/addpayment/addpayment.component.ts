import { Component, OnInit } from '@angular/core';
import { Ipayment } from '../ipayment';
import { PaymentService } from '../payment.service';
import { Ifticketbooking } from '../ifticketbooking';
import { Router } from '@angular/router';
import { FticketbookingService } from '../fticketbooking.service';
import { DatePipe } from '@angular/common';
import { GlobalComponent } from '../globalcomponent';


@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent implements OnInit {
  flightid:number=0;
  flightdate:Date=new Date;
  seatid:number=0;
  seatprice:number=0;
  passid:number=0;
  passname:string='';
  payid:number=0;
  tid:number=0;
  email:string='';
  payment:Ipayment={payamount:0}
  ticket:Ifticketbooking={   fid:0,
    pid:0,
    tprice:0,
    payid:0,
    //bookingdatetime:new Date,
    totalpassengers:1,
    status:'Confirm',
    emailid:'',
    fdate:new Date,
  seatid:0}

  constructor(private paymentservice:PaymentService,private router:Router,private fticketbookingservice:FticketbookingService, private datepipe:DatePipe) { }
  addPayment(){

    console.log(this.datepipe.transform(new Date(),"yyyy-MM-ddTHH:mm:ss"));
    this.paymentservice.addPayment(this.payment).subscribe({next: (data) => {this.payid=data; this.ticket.payid=this.payid} ,
    
     complete: () => this.fticketbookingservice.addTicket(this.ticket).subscribe({
       next:(data) => this.tid=data,
       complete :() => this.router.navigateByUrl('/addticket',{state:{flightid:this.flightid,flightdate:this.flightdate,seatid:this.seatid,seatprice:this.seatprice,passid:this.passid,passname:this.passname,payid:this.payid,tid:this.tid,email:this.email}})}
       )
   
     })}
  savePayment():void{
    
   this.payment.payamount=this.seatprice
   this.ticket.fid=this.flightid
  this.ticket.pid=this.passid
  this.ticket.tprice=this.seatprice
  this.ticket.fdate=this.flightdate
  this.ticket.emailid=this.email
  this.ticket.seatid=this.seatid

  
  this.addPayment()
  }

  ngOnInit(): void {
    this.flightid=history.state.flightid;
    this.flightdate=history.state.flightdate;
    this.seatid=history.state.seatid;
    this.seatprice=history.state.seatprice;
    this.passid=history.state.passid;
    this.passname=history.state.passname;
    this.email=GlobalComponent.email;
  }

}
