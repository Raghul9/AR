import { Injectable } from '@angular/core';
import { Ifdelete } from './ifdelete';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FdeleteService {

  url='http://localhost:60340/api/fdetail/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpClient:HttpClient){ }
  deleteflight(fid:number){
    return this.httpClient.delete<Ifdelete>(this.url+'delete/'+fid);}
}
