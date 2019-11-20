import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {

  items:Observable<any[]>;

  constructor(private router:Router, db: AngularFirestore)
  {
    this.items = db.collection('publicacion').valueChanges();
  }

  ngOnInit() {
  }

  cargarLogin() {
    this.router.navigate(['iniciarSesion']);
  }

}
