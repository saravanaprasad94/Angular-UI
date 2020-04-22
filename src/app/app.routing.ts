import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


export const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  }, 
   {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Home'
    },
    children: [ 
      {
        path: 'login',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
      } 
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
