import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {NgModule} from '@angular/core';
import {LogoutComponent} from './components/logout/logout.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
    path: 'login',
    component: LoginComponent,
  },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path:'logout',
      component: LogoutComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
