import { Component, OnInit, Input } from '@angular/core';
import { DataApiService } from 'src/app/service/data-api.service';
import { MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../modal-dialog/modal-dialog.component';
import * as countdown from 'countdown';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  @Input() publicacion;
  tiempo: string;
  textBtn = 'Unirse';

  constructor(private servicio: DataApiService, public dialog: MatDialog) { }

  ngOnInit() {

    const fecha = new Date(this.publicacion.tiempo_publi);
    fecha.setDate(fecha.getDate() + 7);

    // Cuenta regreciva de la publicación
    countdown(fecha, (ts) => {
      this.tiempo = ts.days;
    });

    if (this.publicacion.tipo_publi === 'Quiero jugar') {
      this.textBtn = 'Invitar';
    }
  }

  eliminarPublicacion(id: string) {
    this.servicio.eliminarItem(id);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {});
    dialogRef.afterClosed().subscribe( res => {
      console.log(res);
    });
  }

  getRemainTime(fecha: any) {
    const start = new Date(fecha);
    const end   = new Date(fecha);
    end.setDate(end.getDate() + 7);

    return countdown(start, end);
  }

}
