import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  url='http://localhost:60340/api/fticketbooking/';
  

  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http:HttpClient) { }
  //getFlight():Observable<any>{return this.http.get<any[]>(this.url+'fd')}
  getTicketList(email:string):Observable<any>{
    return this.http.get<any[]>(this.url+"booked/"+email).pipe(catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse)
  {
    let errormessage='';
    errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
    alert(errormessage);
    return throwError(errormessage);
  }

}
