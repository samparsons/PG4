import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

export class User {

  constructor(
    public id: number,
    public name: string,
    public address: string,
    public username: string,
    public password: string,
    public adminstatus: boolean
  ){}
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseurl = 'http://localhost:8100/user';
  constructor(private http:HttpClient) { }

  getUserAuth(username:string,password:string): Observable<User> {
    return this.http.get<User>(this.baseurl + "/login/"+username+"/"+password)
    .pipe(
      retry(1),
      catchError(
        (error) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = this.getServerErrorMessage(error);
          }

          return throwError(() => new Error(errorMessage));
        })
    )
  }
  
  getUser(){
    return this.http.get<any>("http://localhost:8100/user")
    .pipe(
      catchError(
        (error) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = this.getServerErrorMessage(error);
          }

          return throwError(() => new Error(errorMessage));
        }),
      map(
        (res:any)=>{
          return res;
        }))
  }
 

  getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
          return `Not Found: ${error.message}`;
      }
      case 403: {
          return `Access Denied: ${error.message}`;
      }
      case 500: {
          return `Internal Server Error: ${error.message}`;
      }
      default: {
          return `Unknown Server Error: ${error.message}`;
      }

    }

  }
}