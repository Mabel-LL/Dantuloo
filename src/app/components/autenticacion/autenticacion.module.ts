import { NgModule } from '@angular/core';
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";
import { AutenticacionComponent} from "./autenticacion.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule } from "@angular/forms";
import {AutenticacionRoutingModule} from "./autenticacion-routing.module";
import {LayoutModule} from "../layout/layout.module";

@NgModule({
  declarations: [
    AutenticacionComponent,
    IniciarSesionComponent,
    RegistrarseComponent
  ],
    imports: [
        RouterModule,
        RouterOutlet,
        AutenticacionRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        LayoutModule,
    ],
})
export class AutenticacionModule { }
