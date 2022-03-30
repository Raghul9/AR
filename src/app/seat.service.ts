import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { Iseat } from './iseat';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  url='http://localhost:2812/api/seat/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
constructor(private http:HttpClient) { }
  getSeat(seat:number):Observable<any>{
    return this.http.get<any[]>(this.url+seat).pipe(catchError(this.handleError));
}
addseat(seat:Iseat):Observable<Iseat>{
  return this.http.post<Iseat>(this.url+"Addseat",seat,this.httpOptions).pipe(catchError(this.handleError));
}
  handleError(error:HttpErrorResponse){
      let errormessage='';
      errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
      alert(errormessage);
      return throwError(errormessage);
    }
    
    
  
}
