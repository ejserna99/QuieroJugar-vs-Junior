import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogget = false;

  constructor(public Auth: AngularFireAuth, private afsAuth: AuthService) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.afsAuth.isAuth().subscribe(auth => {
      this.isLogget = auth;
      if (auth) {
        console.log('Logueado');
      } else {
        console.log('No logueado');
      }
    });
  }

}
