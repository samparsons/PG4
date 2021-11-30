import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Welcome {
  welcomeMessageFromService:string = '';
  constructor(
    public message: string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeWelcomeRestService(){
    //console.log('executed the welcome backend service');
    return this.http.get<Welcome>('http://localhost:8100/welcome')
    
  }

  getFormData(body){
    this.http.post("http:localhost:8100",body);
  }

}
