import { TodoComponent } from './todo/todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '',
    component: LoginComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'logout',
    component: LogoutComponent
  },
  { path: 'welcome/:name',
    component: WelcomeComponent
  },
  { path: 'todos',
    component: ListTodosComponent
  },
  { path: 'todos/:id',
    component: TodoComponent
  },
  { path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
