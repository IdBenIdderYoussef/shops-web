import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopsRoutingModule} from './shops-routing.module';
import {ShopsComponent} from './shops.component';
import {NearbyShopsListComponent} from './components/nearby-shops-list/nearby-shops-list.component';
import { PreferredShopsComponent } from './components/prefered-shop/preferred-shops.component';

@NgModule({
  declarations: [ShopsComponent, NearbyShopsListComponent, PreferredShopsComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule,
  ]
})
export class ShopsModule {
}
