import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";
import { AutenticacionComponent} from "./autenticacion.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule } from "@angular/forms";
import {AutenticacionRoutingModule} from "./autenticacion-routing.module";
import {LayoutModule} from "../layout/layout.module";
import {CambiarPasswordComponent} from "./cambiar-password/cambiar-password.component";

@NgModule({
  declarations: [
    AutenticacionComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    CambiarPasswordComponent
  ],
    imports: [
        RouterModule,
        RouterOutlet,
        AutenticacionRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        LayoutModule,
      CommonModule,
    ],
})
export class AutenticacionModule { }
