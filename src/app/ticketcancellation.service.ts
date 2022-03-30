import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Icancelticket } from './icancelticket';

@Injectable({
  providedIn: 'root'
})
export class TicketcancellationService {
  url='http://localhost:2812/api/ticketcancellation/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http:HttpClient) { }

  // getTicket(id:number,email:string):Observable<Icancelticket>{
  //   return this.http.get<Icancelticket>(this.url+"refund/"+id+"/"+email).pipe(catchError(this.handleError));}
    getTicketList(tid:number,email:string):Observable<any>{
      return this.http.get<any[]>(this.url+"refund/"+tid+"/"+email).pipe(catchError(this.handleError))
    }
    cancelTicket(ticketlist:Icancelticket):Observable<Icancelticket>{
      return this.http.post<Icancelticket>(this.url+"ticketcancellation/"+ticketlist.tid,ticketlist,this.httpOptions).pipe(catchError(this.handleError));
    }
  handleError(error:HttpErrorResponse){
    let errormessage='';
    errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
    alert(errormessage);
    return throwError(errormessage);
  }
}
