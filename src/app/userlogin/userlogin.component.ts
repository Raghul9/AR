import { Component, OnInit } from '@angular/core';
import { Iuserlogin } from '../iuserlogin';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { GlobalComponent } from '../globalcomponent';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userlogin:Iuserlogin={emailid:'',password:''}
  constructor(private registrationservice:RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(user1:Iuserlogin)
  {
    GlobalComponent.email=user1.emailid;
    console.log(user1.emailid)
    this.userlogin=user1;
    this.registrationservice.userlogin(this.userlogin).subscribe(()=>{
      alert("Login Successfully")
      this.router.navigateByUrl('/searchflight',{state:{user1:user1.emailid}})
    })

}
}
