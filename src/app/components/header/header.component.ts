import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // TODO
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogget = false;
  public user: string;
  public urlImagen: string;
  public name: string;
  public username: string;
  public email: string;

  navLink = [
    { texto: 'Inicio',    icono: 'home',           ruta: 'Inicio' },
    { texto: 'Perfil',    icono: 'account_circle', ruta: 'usuario' },
    { texto: 'Canchas',   icono: 'sports_soccer',  ruta: 'registro' },
    { texto: 'Mis datos', icono: 'settings',       ruta: 'configuracion' }
  ];

  constructor(public Auth: AngularFireAuth, private authService: AuthService, private router: Router, private http: HttpClient) {
    this.isLogget = authService.getCurrentUser() ? true : false;
  }

  ngOnInit() {
    if (this.isLogget) {
      this.authService.isAuth().subscribe( user => {
        if (user) {
          this.urlImagen = user.photoURL;
          this.name = user.displayName;
          this.email = user.email;
        }
      });
    }
  }

  logout() {
    this.authService.logoutUser();
    setTimeout(() => {
      this.router.navigate(['/iniciarSesion']);
    }, 3000);
  }

}
