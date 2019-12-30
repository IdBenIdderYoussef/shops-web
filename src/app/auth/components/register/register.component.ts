import {Component, OnInit} from '@angular/core';
import {RegisterDto} from '../../models/register-dto';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterDto = {};
  errors: string[] = [];
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.submitted = true;
    this.authService.register(this.user).subscribe(result => {
      this.router.navigate(['auth/login']);
    }, error => {
      this.errors = ['Somethings going wrong during registration'];
    });
  }
}
