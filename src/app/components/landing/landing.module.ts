import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {LandingComponent} from "./landing.component";
import { HomeComponent } from './home/home.component';
import {LandingRoutingModule} from "./landing-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LandingRoutingModule,
    NgOptimizedImage,
  ],
})
export class LandingModule { }
