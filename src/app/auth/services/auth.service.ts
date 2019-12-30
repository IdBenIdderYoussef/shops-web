import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {RegisterDto} from '../models/register-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private jwtHelper: JwtHelperService) {
  }

  authenticate(user: User) {
    return this.httpClient.post<any>(environment.apiRootUrl + '/auth/login', user);
  }

  register(user: RegisterDto) {
    return this.httpClient.post<any>(environment.apiRootUrl + '/v1/users/register', user);
  }

  isUserLoggedIn() {
    let token = sessionStorage.getItem('token');
    return !(this.jwtHelper.isTokenExpired(token));
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

}
