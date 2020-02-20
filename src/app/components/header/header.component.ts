import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // TODO

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogget = false;
  navLink = [
    { texto: 'Inicio',    icono: 'home',           ruta: 'Inicio' },
    { texto: 'Perfil',    icono: 'account_circle', ruta: 'usuario' },
    { texto: 'Canchas',   icono: 'sports_soccer',  ruta: 'registro' },
    { texto: 'Mis datos', icono: 'settings',       ruta: 'configuracion' }
  ];
  proooo;

  constructor(public Auth: AngularFireAuth, private authService: AuthService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.getCurrentUser();
    // this.miPromesa(); // TODO
  }

  // getConfig() { // TODO
  //   return this.http.post('https://api.seguroparaviaje.com/pais/index', null);
  // }

  // miPromesa() { // TODO
  //   this.getConfig().subscribe(data => {
  //     const one = new Promise<any>((resolve, reject) => {
  //       resolve(data['resultado']);
  //       reject(data);
  //     }).then((res) => {
  //       console.log('respais', res);
  //     }).catch(err => console.log('err', err));
  //   });
  // }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      this.isLogget = (auth) ? true : false;
      if (auth) {
        console.log('Logueado');
      } else {
        console.log('No logueado');
      }
    });
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['/iniciarSesion']);
  }

}
