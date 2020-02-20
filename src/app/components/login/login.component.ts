import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

interface LoginModel {email: string; pass: string;}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginModel = {email: '', pass: ''};
  ErrorMessage;
  SuccessMessage: string;

  constructor(public Auth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  ngOnInit() {

  }

  tryLogin(value: LoginModel) {
    this.authService.loginUser(value.email, value.pass)
    .then(res => {
      this.authService.isAuth();
      this.ErrorMessage = '';
      this.SuccessMessage = 'Inicio de sesión correctamente';
      console.log(res);
      this.onLoginRedirect();
    }, err => {
      this.ErrorMessage = err.message;
      this.SuccessMessage = '';
    });
  }

  loginGoogle() {
    this.authService.loginGoogleUser()
    .then((res) => {
      console.log('resUser', res);
      this.onLoginRedirect();
    }).catch(err => console.log('err', err));
  }

  loginFacebook() {
    this.authService.loginFacebookUser()
    .then((res) => {
      console.log('resUser', res);
      this.onLoginRedirect();
    }).catch(err => console.log('err', err));
  }

  onLoginRedirect(): void {
    this.router.navigate(['/Inicio']);
  }
}
