import { Component, OnInit, Input } from '@angular/core';
import { DataApiService } from 'src/app/service/data-api.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  @Input() publicacion;

  // tslint:disable-next-line:variable-name
  public text_btn = 'Unirse';
  constructor(private servicio: DataApiService) { }

  ngOnInit() {
    if (this.publicacion.tipo_publi == 'Quiero jugar'){
      this.text_btn = 'Invitar';
    }
  }

  eliminarPublicacion(id: string) {
    this.servicio.eliminarItem(id);
  }

}
