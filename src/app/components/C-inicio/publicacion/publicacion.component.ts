import { Component, OnInit, Input } from '@angular/core';
import { DataApiService } from 'src/app/service/data-api.service';
import { MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  @Input() publicacion;

  // tslint:disable-next-line:variable-name
  public text_btn = 'Unirse';
  constructor(private servicio: DataApiService,
              public dialog: MatDialog) { }

  ngOnInit() {
    if (this.publicacion.tipo_publi === 'Quiero jugar') {
      this.text_btn = 'Invitar';
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

}
