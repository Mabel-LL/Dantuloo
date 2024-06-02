import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reservar-viaje',
  templateUrl: './reservar-viaje.component.html',
  styleUrls: ['./reservar-viaje.component.css']
})
export class ReservarViajeComponent implements OnInit {

  viaje: any = {};
  conductor: any = {};
  cantidadPasajeros: number = 1;
  estrellas: number[] = [1, 2, 3, 4, 5]; // Suponiendo que siempre son 5 estrellas

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerDatosViaje();
  }

  obtenerDatosViaje() {
    // Supongamos que tienes un endpoint para obtener los datos del viaje y del conductor
    this.http.get('/api/viaje').subscribe((data: any) => {
      this.viaje = data.viaje;
      this.conductor = data.conductor;
    });
  }

  enviarSolicitud() {
    const solicitud = {
      origen: this.viaje.origen,
      destino: this.viaje.destino,
      hora: this.viaje.hora,
      costo: this.viaje.costo,
      cantidadPasajeros: this.cantidadPasajeros,
      conductor: this.conductor
    };
    // Aquí puedes enviar la solicitud al backend
    this.http.post('/api/solicitud', solicitud).subscribe(response => {
      console.log('Solicitud enviada', response);
    });
  }
}
