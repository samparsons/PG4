import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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
