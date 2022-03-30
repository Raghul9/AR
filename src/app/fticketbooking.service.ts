import { Injectable } from '@angular/core';
import { catchError, from } from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Ifticketbooking } from './ifticketbooking';

@Injectable({
  providedIn: 'root'
})
export class FticketbookingService {
  url='http://localhost:60340/api/fticketbooking/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http:HttpClient) { }
  addTicket(ticket:Ifticketbooking):Observable<number>{
    return this.http.post<number>(this.url+"AddTicket",ticket,this.httpOptions).pipe(catchError(this.handleError));}
    handleError(error:HttpErrorResponse)
  {
    let errormessage='';
    errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
    alert(errormessage);
    return throwError(errormessage);
  }
}
