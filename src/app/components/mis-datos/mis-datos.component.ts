import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../register/register.model';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  registerForm = new RegisterModel('Edwin', '', '', '', '', '', '');

  constructor() { }

  ngOnInit() {
  }

}
