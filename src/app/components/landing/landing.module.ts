import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {LandingComponent} from "./landing.component";

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
  ],
})
export class LandingModule { }
