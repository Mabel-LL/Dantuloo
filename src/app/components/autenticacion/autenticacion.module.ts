import { NgModule } from '@angular/core';

import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";
import { AutenticacionComponent} from "./autenticacion.component";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutenticacionRoutingModule} from "./autenticacion-routing.module";

@NgModule({
  declarations: [
    AutenticacionComponent,
    IniciarSesionComponent,
    RegistrarseComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AutenticacionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AutenticacionModule { }
