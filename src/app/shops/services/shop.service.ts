import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Location} from '../models/location.model';
import {environment} from '../../../environments/environment';
import {Shop} from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  nearbyShopsUrl = environment.apiRootUrl + '/v1/shops/nearby';

  constructor(private httpClient: HttpClient) {
  }

  getNearbyShops(location: Location) {
    return this.httpClient.post<Shop[]>(this.nearbyShopsUrl, location);
  }

}
