import {Component} from '@angular/core';
import {Trip} from "../../../models/trip";

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.component.html',
  styleUrls: ['./buscar-viaje.component.css']
})
export class BuscarViajeComponent {
  from: string = '';
  to: string = '';
  date: string = '';
  trips: Trip[] = [];

  searchTrips() {
    // Aquí puedes hacer una llamada a un servicio para obtener los viajes
    // Por ahora, vamos a usar datos estáticos de ejemplo
    this.trips = [
      { from: 'Lima', to: 'Trujillo', image: 'ruta/a/imagen.jpg', name: 'Nombre', passengers: '4', price: '50' },
      { from: 'Lima', to: 'Trujillo', image: 'ruta/a/imagen.jpg', name: 'Nombre', passengers: '4', price: '50' },
      { from: 'Lima', to: 'Trujillo', image: 'ruta/a/imagen.jpg', name: 'Nombre', passengers: '4', price: '50' }
    ];
  }
}
