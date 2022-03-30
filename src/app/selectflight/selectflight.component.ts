import { Component, OnInit } from '@angular/core';
import { FdetailsService } from '../fdetails.service';
import { Iselectflight } from '../iselectflight';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selectflight',
  templateUrl: './selectflight.component.html',
  styleUrls: ['./selectflight.component.css']
})
export class SelectflightComponent implements OnInit {
  // flightdata:Iselectflight={fid:0,departureloc:'',destination:'', departhour:0,departmin:0,arrivalhour:0,arrivalmin:0,durationhour:0,durationmin:0,economicclassprice:0,
  // businessclassprice:0 };
  // departureloc: string ='';destination:string='';
  
  //   constructor(private fdetailsservice:FdetailsService,private activateroute:ActivatedRoute) { }
  //   getFlightInfo(departureloc: string,destination:string) {
  //     this.fdetailsservice.getFlight(departureloc="mumbai",destination="Banglore").subscribe(() => {});
  //     console.log(this.flightdata);
    constructor(){}

  
    ngOnInit(): void {
      // const d = this.activateroute.snapshot.paramMap.get('departureloc/destination');
      // this.getFlightInfo(this.departureloc,this.destination)
      // console.log("departureloc"+this.departureloc+"/"+"destination"+this.destination)
    }

}
