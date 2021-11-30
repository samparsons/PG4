import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  n = 0;
  constructor() { }

  ngOnInit(): void {
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
