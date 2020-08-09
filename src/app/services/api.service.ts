import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any>{
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
    .append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`http://foodie.aqarmap.net/api/orders/122`,{headers: headers})
  }

  increment(itemID,body): Observable<any>{
    return this.http.post<any>(`http://foodie.aqarmap.net/api/orders/122/items/${itemID}?user_id=2`,JSON.stringify(body))
  }

  decrement(itemID): Observable<any>{
    return this.http.delete<any>(`http://foodie.aqarmap.net/api/orders/119/items/${itemID}?user_id=2`)
  }

}
