import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverComponent } from './components/recover/recover.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';

const routes: Routes = [
  { path: '', redirectTo: '/iniciarSesion', pathMatch: 'full'},
  { path: 'iniciarSesion', component: LoginComponent },
  { path: 'recuperar',     component: RecoverComponent },
  { path: 'registro',      component: RegisterComponent },
  { path: 'Inicio',        component: InicioComponent },
  { path: 'usuario',       component: PerfilComponent },
  { path: 'configuracion', component: MisDatosComponent },
  { path: '**',            component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
