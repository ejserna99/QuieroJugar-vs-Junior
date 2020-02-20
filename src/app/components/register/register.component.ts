import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { RegisterModel } from './register.model';
import { Router } from '@angular/router';
import { MatDatepicker } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

// /** Error when invalid control is dirty, touched, or submitted. */
// export ​class MyErrorStateMatcher implements ErrorStateMatcher {
//   ​isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     ​const isSubmitted = form && form.submitted;
//     ​return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   ​}
//  }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  FormControl = new FormControl('', [​Validators.required, Validators.email, Validators.maxLength(2)​]);
  registerForm = new RegisterModel('', '', '', '', '', '', '');
  submitted = false;  // TODO: Remove this when we're done
  ErrorMessage: string;
  SuccessMessage: any;
  formValido = false;

  @ViewChild('Mipicker') datePicker: MatDatepicker<Date>; // TODO: Remove this when we're done

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.registerForm); }

  tryRegister(value: RegisterModel) {
    console.log(value);
    this.authService.registerUser(value)
    .then(res => {
      this.ErrorMessage = '';
      this.SuccessMessage = res;
      this.registerForm.reset();
      this.router.navigate(['/iniciarSesion']);
    }, err => {
      console.log(err);
      this.ErrorMessage = err.message;
    });
  }

  abrirPiker() { // TODO: Remove this when we're done
    this.datePicker.open();
  }

  validarPass(pass1, pass2) {
   // this.registerForm.form.valid = pass1 === pass2;
  }

}
