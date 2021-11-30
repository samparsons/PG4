import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderPaymentComponent } from './order-payment/order-payment.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  { path: 'admin',
    component: AdminLoginComponent
  },
  { path: 'signup',
    component: SignupComponent
  },
  { path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
