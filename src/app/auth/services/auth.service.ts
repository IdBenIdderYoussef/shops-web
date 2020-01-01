import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {RegisterDto} from '../models/register.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticateUrl = environment.apiRootUrl + '/auth/login';
  registerUrl = environment.apiRootUrl + '/v1/users/register';

  constructor(private httpClient: HttpClient,
              private jwtHelper: JwtHelperService) {
  }

  authenticate(user: User) {
    return this.httpClient.post<any>(this.authenticateUrl, user);
  }

  register(user: RegisterDto) {
    return this.httpClient.post<any>(this.registerUrl, user);
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
