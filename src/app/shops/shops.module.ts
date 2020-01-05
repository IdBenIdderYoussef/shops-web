import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopsRoutingModule} from './shops-routing.module';
import {ShopsComponent} from './shops.component';
import {NearbyShopsListComponent} from './components/nearby-shops-list/nearby-shops-list.component';
import { PreferredShopsComponent } from './components/prefered-shop/preferred-shops.component';
import { NoCommaPipe } from './pipes/no-comma.pipe';

@NgModule({
  declarations: [ShopsComponent, NearbyShopsListComponent, PreferredShopsComponent, NoCommaPipe],
  imports: [
    CommonModule,
    ShopsRoutingModule,
  ]
})
export class ShopsModule {
}
