import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Iadminlogin } from './iadminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  url='http://localhost:2812/api/adminlogin/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http:HttpClient) { }

  adminlogin(admin1:Iadminlogin):Observable<any>{
    return this.http.get<any[]>(this.url+'admin?userid='+ admin1.userid + '&&password=' + admin1.password)} 

    handleError(error:HttpErrorResponse) 
    {
      let errormessage='';
      errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
      alert(errormessage);
      return throwError(errormessage);
    }
}
