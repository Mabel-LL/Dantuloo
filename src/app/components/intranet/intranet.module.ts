import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {IntranetComponent} from "./intranet.component";

@NgModule({
  declarations: [
    IntranetComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
  ],
})
export class IntranetModule { }
