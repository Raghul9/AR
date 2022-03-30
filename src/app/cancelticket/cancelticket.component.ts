import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icancelticket } from '../icancelticket';
import { TicketcancellationService } from '../ticketcancellation.service';
import { GlobalComponent } from '../globalcomponent';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.css']
})
export class CancelticketComponent implements OnInit {
  ticketlist:Icancelticket={tid:0,refundamount:0};
  email:string='';
  constructor(private ticketservice:TicketcancellationService,private activateroute:ActivatedRoute) { }
  ticket:any[]=[];
  // getTicketInfo(id: number) {
  //   this.ticketservice.getTicket(id,this.email).subscribe((data:Icancelticket) => {this.ticketdata=data});
  //   console.log(this.ticketdata);
  // }

  listTicket(ticket1:Icancelticket)
  {
    this.ticketlist=ticket1;
    this.ticketservice.getTicketList(this.ticketlist.tid,this.email).subscribe(data =>{this.ticket=data;console.log(data);}) 
   // this.router.navigate(['/flightlist'])
}
addflight(){
  this.ticketservice.cancelTicket(this.ticketlist).subscribe(()=>{alert("Ticket Cancelled Successfully!")})}
  saveflight(ticketlist: Icancelticket):void{
    this.ticketlist=ticketlist;
    this.addflight()}

  ngOnInit(): void {
    this.email=GlobalComponent.email
    console.log(GlobalComponent.email)
  }

}
