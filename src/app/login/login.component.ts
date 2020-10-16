import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public isLoggedIn = false;

  constructor(private apiService: ApiService, public router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.apiService.login({email: this.email, password: this.password}).subscribe(
      data => {
        this.isLoggedIn = true;
        this.router.navigate([`/crops`]);
        console.log(data);
      }, err => {
        console.log('error');
      }
    );
  }
}
