import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    username: null,
    password: null
  };
  errorMessage: string;

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.form).subscribe(() => {
        this.router.navigateByUrl('/');
      }, err => {
        this.errorMessage = err && err.error;
      });
    } else {
      this.errorMessage = 'Please enter valid data';
    }
  }

  resetError(): void {
    this.errorMessage = null;
  }

}
