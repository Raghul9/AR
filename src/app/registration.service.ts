import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Iregistration } from './iregistration';
import {HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { Iuserlogin } from './iuserlogin';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url='http://localhost:2812/api/registration/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http:HttpClient) { }


addRegistration(registration:Iregistration):Observable<Iregistration>{
  return this.http.post<Iregistration>(this.url+"Regi",registration,this.httpOptions).pipe(catchError(this.handleError));}

userlogin(user1:Iuserlogin):Observable<any>{
    return this.http.get<any[]>(this.url+'userlogin1?emailid='+user1.emailid+'&&password='+user1.password)}  

 handleError(error:HttpErrorResponse)
  {
    let errormessage='';
    errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
    alert(errormessage);
    return throwError(errormessage);
  }
}