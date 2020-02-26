import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../../service/data-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit, OnDestroy {

  items: any;
  loading = true;
  private unsubscribe$ = new Subject<void>();

  constructor(private Conexion: DataApiService, private router: Router) {
    
    console.log(Conexion);
  }

  ngOnInit() {
    this.Conexion.getCollection('publicacion').pipe(
      takeUntil(this.unsubscribe$))
      .subscribe( data => {
      this.items = data;
      this.loading = false;
    });
  }

  cargarLogin() {
    this.router.navigate(['iniciarSesion']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
