import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  errors: string[] = [];

  constructor(private authService: AuthService,
              private router:Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.user).subscribe(result=>{
      let username = result.username;
      let token= 'Bearer '+result.token;
      sessionStorage.setItem('username',username);
      sessionStorage.setItem('token', token);
      this.router.navigate(['shops/nearby']);
    },error => {
        this.errors = ['Email or password incorrect'];
    })
  }
}
