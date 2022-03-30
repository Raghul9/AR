import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { Ifdetails } from './ifdetails';
import { Iaddflight } from './iaddflight';

@Injectable({
  providedIn: 'root'
})
export class FdetailsService {
  url='http://localhost:60340/api/fdetail/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private http:HttpClient) { }
  getFlight():Observable<any>{return this.http.get<any[]>(this.url+'fd')}
  getFlightList(departureloc:string,destination:string,fdate:Date):Observable<any>{
    return this.http.get<any[]>(this.url+"fd/"+departureloc+"/"+destination+"/"+fdate).pipe(catchError(this.handleError))
  }
  addFlight(fdetail:Iaddflight):Observable<Iaddflight>{
    return this.http.post<Iaddflight>(this.url+"Add",fdetail,this.httpOptions).pipe(catchError(this.handleError));
  }
  // flightlist(flight1:Ifdetails):Observable<any>{
  //   return this.http.get<any[]>(this.url+'flist?departureloc='+flight1.departureloc+'&&destination='+flight1.destination)}  
    
    handleError(error:HttpErrorResponse)
    {
      let errormessage='';
      errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
      alert(errormessage);
      return throwError(errormessage);
    }
  }
