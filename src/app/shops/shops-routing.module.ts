import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShopsComponent} from './shops.component';
import {NearbyShopsListComponent} from './components/nearby-shops-list/nearby-shops-list.component';
import {PreferredShopsComponent} from './components/prefered-shop/preferred-shops.component';

const routes: Routes = [{
  path: '',
  component: ShopsComponent,
  children: [{
    path: 'nearby',
    component: NearbyShopsListComponent,
  },{
    path: 'preferred',
    component: PreferredShopsComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule {
}
