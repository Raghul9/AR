import { Component, OnInit } from '@angular/core';
import { Iregistration } from '../iregistration';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addregistration',
  templateUrl: './addregistration.component.html',
  styleUrls: ['./addregistration.component.css']
})
export class AddregistrationComponent implements OnInit {
  registration:Iregistration={title:'',fname:'',lname:'',emailid:'',password:'',phoneno:0,dob:new Date,
    gender:''}

  constructor(private registrationservice:RegistrationService,private router:Router) { }
  addRegistration(){
    this.registrationservice.addRegistration(this.registration).subscribe(()=>{alert("User Registered Successfully")})
    this.router.navigate(['/userlogin'])
    
  }
  saveUser(registration: Iregistration):void{
    
    this.registration=registration;
    this.addRegistration()
  }
  
  ngOnInit(): void {
  }
}
