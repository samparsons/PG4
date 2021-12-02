import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http:HttpClient) { }

  getGrocery(){
    return this.http.get<any>("http://localhost:8100/grocery")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}