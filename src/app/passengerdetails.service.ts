import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Ipassengerdetails } from './ipassengerdetails';


@Injectable({
  providedIn: 'root'
})
export class PassengerdetailsService {
  url='http://localhost:2812/api/PassengerDetail/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http:HttpClient) { }
  addPass(passenger:Ipassengerdetails):Observable<number>{
    return this.http.post<number>(this.url+"AddPassenger",passenger,this.httpOptions).pipe(catchError(this.handleError));}
    handleError(error:HttpErrorResponse)
  {
    let errormessage='';
    errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
    alert(errormessage);
    return throwError(errormessage);
  }
}
