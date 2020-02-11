import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public Auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {

  }

  login() {
  }

  logout() {
    this.Auth.auth.signOut();
  }

  loginGoogle() {
    this.Auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // this.router.navigate(['/Inicio']);
  }

  loginFacebook() {
    this.Auth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
}
