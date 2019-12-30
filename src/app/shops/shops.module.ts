import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopsRoutingModule} from './shops-routing.module';
import {ShopsComponent} from './shops.component';
import { NearbyShopsListComponent } from './components/nearby-shops-list/nearby-shops-list.component';

@NgModule({
  declarations: [ShopsComponent, NearbyShopsListComponent,],
  imports: [
    CommonModule,
    ShopsRoutingModule,
  ]
})
export class ShopsModule { }
