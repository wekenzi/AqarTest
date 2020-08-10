import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FullData } from '../models/full-data';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFullData(): Observable<FullData>{
    return this.http.get<FullData>(`http://foodie.aqarmap.net/api/orders/122`)
  }

  getOrders(): Observable<Order[]>{
    return this.http.get<FullData>(`http://foodie.aqarmap.net/api/orders/122`).pipe(
      map(x => x.order_items)
    )
  }

  increment(itemID,body): Observable<any>{
    return this.http.post<any>(`http://foodie.aqarmap.net/api/orders/122/items/${itemID}?user_id=2`,JSON.stringify(body))
  }

  decrement(itemID): Observable<any>{
    return this.http.delete<any>(`http://foodie.aqarmap.net/api/orders/122/items/${itemID}?user_id=2`)
  }

}
