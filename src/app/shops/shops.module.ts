import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopsRoutingModule} from './shops-routing.module';
import {ShopsComponent} from './shops.component';
import {NearbyShopsListComponent} from './components/nearby-shops-list/nearby-shops-list.component';
import { PreferredShopsListComponent } from './components/preferred-shop-list/preferred-shops-list.component';
import { NoCommaPipe } from './pipes/no-comma.pipe';

@NgModule({
  declarations: [ShopsComponent, NearbyShopsListComponent, PreferredShopsListComponent, NoCommaPipe],
  imports: [
    CommonModule,
    ShopsRoutingModule,
  ]
})
export class ShopsModule {
}
