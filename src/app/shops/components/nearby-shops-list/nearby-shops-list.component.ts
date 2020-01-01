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

  constructor(private shopService: ShopService,
              private locationService: LocationService) {
  }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.locationService.getCurrentLocation().then(location =>{
      this.location.longitude = location.longitude;
      this.location.latitude = location.latitude;
      this.getNearbyShops();
    }).catch(error=>{
      console.log(error); //Todo change this line
    })
      }

  getNearbyShops() {
    this.shopService.getNearbyShops(this.location).subscribe(result => {
      this.nearbyShops = result;
    },error => {

    });
  }

  dislike() {

  }

  like() {

  }
}
