import {Component} from '@angular/core';
import {BuscarViaje} from "../../../models/buscarViaje";
import {ViajeService} from "../../../services/viaje.service";

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.component.html',
  styleUrls: ['./buscar-viaje.component.css']
})
export class BuscarViajeComponent {

  viaje: BuscarViaje = {
    ciudadorigen: '',
    ciudaddestino: '',
    fechaorigen: ''
  };

  trips: any[] = [];

  constructor(private viajeService: ViajeService) { }

  buscarViaje() {
    this.viajeService.buscarViaje(this.viaje).subscribe(response => {
      console.log(response);
      this.trips = response;
    }, error => {
      console.error(error);
    });
  }
}
