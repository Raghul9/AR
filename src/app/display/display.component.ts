import { Component, OnInit } from '@angular/core';
import { Idisplay } from '../idisplay';
import { DisplayService } from '../display.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  //  display:Idisplay={fid:0,departureloc:'',destination:'',departhour:0,departmin:0 ,arrivalhour:0,arrivalmin:0,durationhour:0,durationmin:0,cabin:0,economicclass:0,businessclass:0,fdate:new Date}
   display:any[]=[];

  constructor(private displayservice:DisplayService,private router:Router) {
    this.displayservice.getfdisplay().subscribe(data =>{this.display=data;console.log(this.display);})
   }

  ngOnInit(): void {
  }

}
