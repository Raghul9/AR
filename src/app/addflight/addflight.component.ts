import { Component, OnInit } from '@angular/core';
import { Iaddflight } from '../iaddflight';
import { FdetailsService } from '../fdetails.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  fdetail:Iaddflight={fid:0,departureloc:'',destination:'',departhour:0,departmin:0 ,arrivalhour:0,arrivalmin:0,durationhour:0,durationmin:0,fcabin:0,economicclassprice:0,businessclassprice:0,fdate:new Date}
  constructor(private fdetailService:FdetailsService,private router:Router) { }
  addflight(){
  this.fdetailService.addFlight(this.fdetail).subscribe(()=>{alert("Flight added Successfully!")})}
  saveflight(fdetail: Iaddflight):void{
    this.fdetail=fdetail;
    this.addflight()}

  ngOnInit(): void {
  }

}
