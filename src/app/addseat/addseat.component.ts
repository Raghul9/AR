import { Component, OnInit } from '@angular/core';
import { Iseat } from '../iseat';
import { SeatService } from '../seat.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addseat',
  templateUrl: './addseat.component.html',
  styleUrls: ['./addseat.component.css']
})
export class AddseatComponent implements OnInit {
  seat:Iseat={fid:0,seatid:0,seatprice:0,seattype:'',status:''}

  constructor(private seatService:SeatService,private router:Router) { }
  addseat(){
    console.log(this.seat)
    this.seatService.addseat(this.seat).subscribe(()=>{alert("Seat added Successfully!")})}
    saveSeat(seat: Iseat):void{
      this.seat=seat;
      this.addseat()}
  

  ngOnInit(): void {
  }

}
