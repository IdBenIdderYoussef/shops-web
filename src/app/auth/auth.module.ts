import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import { LogoutComponent } from './components/logout/logout.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    JwtModule
  ]
})
export class AuthModule {
}
