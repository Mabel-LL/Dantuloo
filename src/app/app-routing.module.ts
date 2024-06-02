import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/landing/landing.module').then((m) => m.LandingModule) },
  { path: 'autenticacion', loadChildren: () => import('./components/autenticacion/autenticacion.module').then((m) => m.AutenticacionModule) },
  { path: 'intranet', loadChildren: () => import('./components/intranet/intranet.module').then((m) => m.IntranetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
