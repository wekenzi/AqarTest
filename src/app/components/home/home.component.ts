import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/services/api.service";
import { Order } from "src/app/models/order";
import { FullData } from "src/app/models/full-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private apiService:ApiService) { }

  loading:boolean = true;
  orders:Order[] = [];
  casherName:string;
  resturantTitle:string;

  ngOnInit(): void {
    this.apiService.getFullData()
    .subscribe(data=>{
      this.casherName = data.user.name;
      this.resturantTitle = data.restaurant.title;
      this.orders = data.order_items;
      this.loading = false;
    })
  }

  getOrdersFromApi(){
    this.apiService.getOrders()
    .subscribe(data=>{
      this.orders = data;
      this.loading = false;
    })
  }

  increaseQuantity(id){
    this.loading = true;
    this.apiService.increment(id,{})
    .subscribe(data=>{
      this.getOrdersFromApi();
    })
  }

  reduceQuantity(id){
    this.loading = true;
    this.apiService.decrement(id)
    .subscribe(data=>{
      this.getOrdersFromApi();
    })
  }

}
