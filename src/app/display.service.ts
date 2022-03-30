import { Injectable } from '@angular/core';
import { Idisplay } from './idisplay';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { throwError } from 'rxjs';
import{catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  fdisplay(id: number) {
    throw new Error('Method not implemented.');
  }
  url='http://localhost:60340/api/fdetail/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  constructor(private http:HttpClient) { }
  getfdisplay():Observable<any>{return this.http.get<any[]>(this.url+'fd')}
  getdisplay():Observable<Idisplay>{
    return this.http.get<Idisplay>(this.url+"fd").pipe(catchError(this.handleError));}
    editDisplay(display:Idisplay):Observable<Idisplay>
    {
      return this.http.put<Idisplay>(this.url+'EditDisplay/'+display.fid,display,this.httpOptions).pipe(catchError(this.handleError));
    }
    handleError(error:HttpErrorResponse){
      let errormessage='';
      errormessage=error.status+'\n'+error.statusText+'\n' +error.error;
      alert(errormessage);
      return throwError(errormessage);
    }
  }