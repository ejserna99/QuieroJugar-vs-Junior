import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
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
    FormJugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/iniciarSesion', pathMatch: 'full'},
      { path: 'iniciarSesion', component: LoginComponent },
      { path: 'registro', component: RegisterComponent },
      { path: 'recuperar', component: RecoverComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'products/:productId', component: RegisterComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
