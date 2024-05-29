import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntranetComponent} from "./intranet.component";
import {BuscarViajeComponent} from "./buscar-viaje/buscar-viaje.component";
import {NotificacionConductorComponent} from "./notificacion-conductor/notificacion-conductor.component";

const routes: Routes = [
  { path: '',
    component: IntranetComponent,
    children: [
      {path: 'buscar', component: BuscarViajeComponent},
      {path: 'notificacion-conductor', component: NotificacionConductorComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
