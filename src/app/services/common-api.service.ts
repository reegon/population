import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  constructor(private http:HttpClient) { }
  get(url){
    let headers = new HttpHeaders();
    return  this.http.get(url, {headers}).pipe(
      map(results => results)
    );
  }
  post(url,data) {

  }
}