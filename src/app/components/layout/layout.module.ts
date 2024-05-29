import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarIntranetComponent} from "./navbar-intranet/navbar-intranet.component";
import {FooterIntranetComponent} from "./footer-intranet/footer-intranet.component";



@NgModule({
  declarations: [
    NavbarIntranetComponent,
    FooterIntranetComponent,
  ],
  exports:[
    NavbarIntranetComponent,
    FooterIntranetComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
