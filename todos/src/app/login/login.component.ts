import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Sam';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Login';
  constructor(
    //router is automatically injectedby angular (dependency injection)
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username === 'Sam' && this.password === 'pw'){
      this.invalidLogin = false;
      //navigate to welcome page
      this.router.navigate(['welcome',this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}