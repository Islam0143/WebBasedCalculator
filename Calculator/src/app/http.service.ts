import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  OurRequest(url: string, expression: any): Observable<any>{
     return this.http.post<any>(url, expression);
  }

}