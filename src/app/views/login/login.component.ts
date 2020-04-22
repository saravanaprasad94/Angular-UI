import { Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  constructor(private router: Router){}
  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
