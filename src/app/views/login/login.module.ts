import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    FormsModule,
    LoginRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
