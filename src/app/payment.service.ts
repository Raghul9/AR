import { Injectable } from '@angular/core';
import { catchError, from } from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Ipayment} from './ipayment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url='http://localhost:2812/api/paymentdetail/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http:HttpClient) { }
  addPayment(payment:Ipayment):Observable<number>{
    return this.http.post<number>(this.url+"AddPayment",payment,this.httpOptions).pipe(catchError(this.handleError));}
    handleError(error:HttpErrorResponse)
  {
    let errormessage='';
    errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
    alert(errormessage);
    return throwError(errormessage);
  }
}

