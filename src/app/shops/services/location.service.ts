import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {
  }

  getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({longitude: resp.coords.longitude, latitude: resp.coords.latitude});
      },error=>{
        reject(error);
      });
    });
  }

}
