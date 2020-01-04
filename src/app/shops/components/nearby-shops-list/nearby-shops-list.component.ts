import {Component, OnInit} from '@angular/core';
import {Shop} from '../../models/shop.model';
import {ShopService} from '../../services/shop.service';
import {Location} from '../../models/location.model';
import {LocationService} from '../../services/location.service';

@Component({
  selector: 'app-nearby-shops-list',
  templateUrl: './nearby-shops-list.component.html',
  styleUrls: ['./nearby-shops-list.component.css']
})
export class NearbyShopsListComponent implements OnInit {


  nearbyShops: Shop[];
  location: Location = {};
  permitted: boolean = true; // var for check if we have permission of using client location

  constructor(private shopService: ShopService,
              private locationService: LocationService) {
  }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.locationService.getCurrentLocation().then(location => {
      this.location.longitude = location.longitude;
      this.location.latitude = location.latitude;
      this.permitted = true;
      this.getNearbyShops();
    }).catch(error => {
      this.location = null;
      this.permitted = false;
      this.getNearbyShops();
    });
  }

  getNearbyShops() {
    this.shopService.getNearbyShops(this.location).subscribe(result => {
      this.nearbyShops = result;
    }, error => {

    });
  }


  like(shop: Shop) {
    this.shopService.like(shop.id).subscribe(result => {
      let index = this.nearbyShops.indexOf(shop);
      if (index !== -1) {
        this.nearbyShops.splice(index, 1);
      }
    });
  }

  dislike(shop: Shop) {
    this.shopService.disLike(shop.id).subscribe(result => {
      let index = this.nearbyShops.indexOf(shop);
      if (index !== -1) {
        this.nearbyShops.splice(index, 1);
      }
    });
  }

}
