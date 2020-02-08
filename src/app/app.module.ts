import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { DataApiService } from './service/data-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PublicacionesComponent } from './components/C-inicio/publicaciones/publicaciones.component';
import { PublicacionComponent } from './components/C-inicio/publicacion/publicacion.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverComponent } from './components/recover/recover.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CardNameComponent } from './components/C-inicio/card-name/card-name.component';
import { FormJugarComponent } from './components/C-inicio/form-jugar/form-jugar.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { MensajeInComponent } from './components/C-mensaje/mensaje-in/mensaje-in.component';
import { MensajeOutComponent } from './components/C-mensaje/mensaje-out/mensaje-out.component';
import { ErrorComponent } from './components/error/error.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicacionesComponent,
    PublicacionComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    InicioComponent,
    CardNameComponent,
    FormJugarComponent,
    MensajesComponent,
    MensajeInComponent,
    MensajeOutComponent,
    ErrorComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  entryComponents: [ModalDialogComponent],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
