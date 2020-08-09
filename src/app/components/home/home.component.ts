import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private apiService:ApiService) { }

  loading:boolean = false;

  ngOnInit(): void {
    this.getOrdersFromApi();
  }

  getOrdersFromApi(){
    this.apiService.getOrders()
    .subscribe(data=>{
      console.log(data);
    })
  }

  increaseQuantity(){

  }

  reduceQuantity(){
    
  }

}
