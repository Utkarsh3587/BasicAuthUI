import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public isLoggedIn = false;
  public myForm: FormGroup;

  constructor(public router: Router, private toastr: ToastrService,
              private formBuilder: FormBuilder, private apiService: ApiService,) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {

    this.apiService.login({ email: this.myForm.value.email, password: this.myForm.value.password }).subscribe(
      _ => {
        this.isLoggedIn = true;
        this.router.navigate([`/crops`]);
        this.toastr.success('Login Successful');
      }, _ => {
        this.toastr.error('Wrong Credentials', 'Login Error');
      }
    );
  }
}
