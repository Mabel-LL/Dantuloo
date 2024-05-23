import { NgModule } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {IntranetComponent} from "./intranet.component";
import { BuscarViajeComponent } from './buscar-viaje/buscar-viaje.component';
import {IntranetRoutingModule} from "./intranet-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    IntranetComponent,
    BuscarViajeComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    IntranetRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class IntranetModule { }
