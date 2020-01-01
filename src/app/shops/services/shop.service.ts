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
  likeShopUrl = environment.apiRootUrl + '/v1/shops/like';
  removeLikeShopUrl = environment.apiRootUrl + '/v1/shops/remove-like';
  preferredShopsUrl = environment.apiRootUrl + '/v1/shops/preferred-shops';

  constructor(private httpClient: HttpClient) {
  }

  getNearbyShops(location: Location) {
    return this.httpClient.post<Shop[]>(this.nearbyShopsUrl, location);
  }

  getPreferredShops() {
    return this.httpClient.get<Shop[]>(this.preferredShopsUrl);
  }

  like(shopId:number){
    return this.httpClient.post<any>(this.likeShopUrl,shopId)
  }

  removeLike(shopId:number){
    return this.httpClient.post<any>(this.removeLikeShopUrl,shopId)
  }

}
