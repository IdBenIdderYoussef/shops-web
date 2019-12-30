import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService as AuthGuard} from './auth/services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'shops/nearby', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'shops',
    loadChildren: './shops/shops.module#ShopsModule',
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
