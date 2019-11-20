import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/service/data-api.service';
import { FormJugar } from './form-jugar';

@Component({
  selector: 'app-form-jugar',
  templateUrl: './form-jugar.component.html',
  styleUrls: ['./form-jugar.component.css']
})
export class FormJugarComponent implements OnInit {

  model: any = { ID_usuario: 4, texto_publi: '', tiempo_publi: '', tipo_publi: '' };

  constructor(private servicio: DataApiService) {

  }

  ngOnInit() {
  }

  agregar() {
    console.log(this.model);
    this.servicio.addItem(this.model);
  }
}
