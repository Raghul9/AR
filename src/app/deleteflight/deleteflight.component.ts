import { Component, OnInit } from '@angular/core';
import { Ifdelete } from '../ifdelete';
import { FdeleteService } from '../fdelete.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {

  fdelete:Ifdelete={fid:0}
 constructor(private fdeleteService:FdeleteService,private router:Router) { }
  deleteflight(){
    this.fdeleteService.deleteflight(this.fdelete.fid).subscribe(()=>{alert( "Flight deleted Successfully!")})}
 
    // deleteflight(fdelete: Ifdelete):void{
    //   this.fdelete=fdelete;
    //   this.deleteflight()
    deleflight(fdelete: Ifdelete):void{
      this.fdelete=fdelete;
      this.deleteflight()}

  ngOnInit(): void {
  }

}
