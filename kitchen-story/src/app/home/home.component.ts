import { GroceryService } from '../service/data/grocery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  n = 0;
  public groceryList : any;
  search : string = '';

  constructor(private api:GroceryService) { }
  

  ngOnInit(): void {
    this.api.getGrocery()
    .subscribe(res=>{
      this.groceryList = res;
    })
  }

  fn(operator:string){
    if(operator==='+'){
      return this.n++; 
    } if(operator==='-'){
      return this.n--;
    } else {
      return this.n;
    }
  }


  
}
