import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShopsComponent} from './shops.component';
import {NearbyShopsListComponent} from './components/nearby-shops-list/nearby-shops-list.component';
import {PreferredShopsListComponent} from './components/preferred-shop-list/preferred-shops-list.component';

const routes: Routes = [{
  path: '',
  component: ShopsComponent,
  children: [{
    path: 'nearby',
    component: NearbyShopsListComponent,
  },{
    path: 'preferred',
    component: PreferredShopsListComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule {
}
