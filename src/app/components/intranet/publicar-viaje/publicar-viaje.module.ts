import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { PublicarViajeComponent } from './publicar-viaje.component';


@NgModule({
  declarations: [
    PublicarViajeComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule
  ],
})
export class IntranetModule { }
