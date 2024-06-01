import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutenticacionComponent} from "./autenticacion.component";
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";
import {CambiarPasswordComponent} from "./cambiar-password/cambiar-password.component";

const routes: Routes = [
  { path: '',
    component: AutenticacionComponent,
    children: [
      {path: 'iniciar-sesion', component: IniciarSesionComponent},
      {path: 'registrarse', component: RegistrarseComponent},
      {path: 'contrasena', component: CambiarPasswordComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
