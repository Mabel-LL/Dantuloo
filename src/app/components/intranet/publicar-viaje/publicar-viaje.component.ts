import { Component } from '@angular/core';

@Component({
  selector: 'app-publicar-viaje',
  templateUrl: './publicar-viaje.component.html',
  styleUrls: ['./publicar-viaje.component.css']
})
export class PublicarViajeComponent {
  currentStep = 1;
  trip = {
    location: '',
    destination: '',
    passengers: 1,
    price: null,
    date: '',
    time: ''
  };
  car = {
    brand: '',
    model: '',
    plateNumber: '',
    dni: ''
  };
  nextStep() {
    if (this.trip.date && this.trip.time) {
      this.currentStep = 2;
    } else {
      alert("Por favor, complete todos los campos antes de continuar.");
    }
  }
  submitForm() {
    this.currentStep = 1;
    alert("Por favor, complete todos los campos antes de continuar.");
      console.log("Formulario enviado:", this.trip, this.car);
  }

  decreasePassengers() {
    if (this.trip.passengers > 1) {
      this.trip.passengers--;
    }
  }

  increasePassengers() {
    this.trip.passengers++;
  }
}
