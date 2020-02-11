import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public Auth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  ngOnInit() {

  }

  login() {
  }

  logout(){
    this.Auth.auth.signOut();
  }

  loginGoogle() {
  }

  // loginGoogle(): void{
  //   this.authService.loginGoogleUser()
  //   .then((res) => {
  //     this.router.navigate(['/Inicio']);
  //   }).catch(err => console.log('err', err));
  // }

  loginFacebook() {
    this.authService.loginFacebookUser()
    .then((res) => {
      console.log('resUser', res);
      this.router.navigate(['/Inicio']);
    }).catch(err => console.log('err', err));
  }
}
