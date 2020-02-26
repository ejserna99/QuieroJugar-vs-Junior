import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../register/register.model';
import { DataApiService } from 'src/app/service/data-api.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  registerForm = new RegisterModel('', '', '', '', '', '', '', '', '');

  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {
  }

  fotoPerfil(value) {
    console.log(value.target.files[0]);
    this.dataApiService.addImage(value.target.files[0]);
  }
}
