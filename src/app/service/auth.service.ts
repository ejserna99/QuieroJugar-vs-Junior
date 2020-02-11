import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public Auth: AngularFireAuth) { }

  isAuth() {
    return this.Auth.authState.pipe(map(auth => auth));
  }

  registerUser(){ }

  loginUser(){ }

  loginGoogleUser(){ }

  loginFacebookUser(){ }

  logoutUser(){ }
}
