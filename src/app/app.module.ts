import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material
import { MatMenuModule, MatDialogModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule  } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Bootstrap widgets
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

// Angular FireBase
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
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';
import { LoadingComponent } from './shareid/loading/loading.component';

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
    ModalDialogComponent,
    PerfilComponent,
    MisDatosComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    HttpClientModule
  ],
  entryComponents: [ModalDialogComponent],
  providers: [DataApiService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
