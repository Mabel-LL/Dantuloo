import { NgModule } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {IntranetComponent} from "./intranet.component";
import { BuscarViajeComponent } from './buscar-viaje/buscar-viaje.component';
import {IntranetRoutingModule} from "./intranet-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotificacionConductorComponent } from './notificacion-conductor/notificacion-conductor.component';
import {LayoutModule} from "../layout/layout.module";
import { PublicarViajeComponent } from './publicar-viaje/publicar-viaje.component';
import { ReservarViajeComponent } from './reservar-viaje/reservar-viaje.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    IntranetComponent,
    BuscarViajeComponent,
    NotificacionConductorComponent,
    PublicarViajeComponent,

    ReservarViajeComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    IntranetRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    HttpClientModule
  ],
})
export class IntranetModule { }
