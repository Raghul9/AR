import { Component, OnInit } from '@angular/core';
import { AdminloginService } from '../adminlogin.service';
import { Router } from '@angular/router';
import { Iadminlogin } from '../iadminlogin';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminlogin:Iadminlogin={userid:0,password:''}
  constructor(private adminloginservice:AdminloginService, private router:Router) { }

  ngOnInit(): void {
  }
  loginAdmin(admin1:Iadminlogin)
  {
    this.adminlogin=admin1;
    this.adminloginservice.adminlogin(this.adminlogin).subscribe(()=>{alert("Login Successfully")
      this.router.navigate(['/addflight'])
    })

}

}
