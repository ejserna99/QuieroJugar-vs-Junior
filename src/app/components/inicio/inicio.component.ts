import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../service/data-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {

  items:any;

  constructor(private conexion: DataApiService, private router:Router)
  {
    this.items = conexion.publicaciones();
  }

  ngOnInit() {
  }

  cargarLogin() {
    this.router.navigate(['iniciarSesion']);
  }

}
