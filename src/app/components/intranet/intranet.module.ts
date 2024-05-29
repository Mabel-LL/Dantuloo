import { NgModule } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {IntranetComponent} from "./intranet.component";
import { BuscarViajeComponent } from './buscar-viaje/buscar-viaje.component';
import {IntranetRoutingModule} from "./intranet-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotificacionConductorComponent } from './notificacion-conductor/notificacion-conductor.component';
import {LayoutModule} from "../layout/layout.module";

@NgModule({
  declarations: [
    IntranetComponent,
    BuscarViajeComponent,
    NotificacionConductorComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    IntranetRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
  ],
})
export class IntranetModule { }
