import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from '../bookings.service';
import { GlobalComponent } from '../globalcomponent';
import { Ibookings } from '../ibookings';
import { Idisplay } from '../idisplay';

@Component({
  selector: 'app-displaybookings',
  templateUrl: './displaybookings.component.html',
  styleUrls: ['./displaybookings.component.css']
})
export class DisplaybookingsComponent implements OnInit {
  ticketlist:Ibookings={tid:0,fid:0,seatid:0,tprice:0,fdate: new Date,status:'',payid:0  }
  ticket:any[]=[];
  constructor(private bookingsservice:BookingsService, private router:Router) { 
    this.bookingsservice.getTicketList(GlobalComponent.email).subscribe(data =>{this.ticket=data;console.log(data);}) 
  }
  
  ngOnInit(): void {
  }
   // this.router.navigate(['/flightlist'])
}

