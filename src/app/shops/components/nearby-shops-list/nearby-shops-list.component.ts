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


  calculateDistance(location1: Location, location2: Location):number {
    if ((location1.latitude == location2.latitude) && (location1.longitude == location2.longitude)) {
      return 0;
    } else {
      let radianLatitude1 = Math.PI * location1.latitude / 180;
      let radianLatitude2 = Math.PI * location2.latitude / 180;
      let theta = location1.longitude - location2.longitude;
      let radianTheta = Math.PI * theta / 180;
      let distance = Math.sin(radianLatitude1) * Math.sin(radianLatitude2) + Math.cos(radianLatitude1) * Math.cos(radianLatitude2) * Math.cos(radianTheta);
      if (distance > 1) {
        distance = 1;
      }
      distance = Math.acos(distance);
      distance = distance * 180 / Math.PI;
      distance = distance * 60 * 1.1515;

      distance = distance * 1.609344;

      return distance;
    }
  }

}
