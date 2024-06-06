import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicar-viaje',
  templateUrl: './publicar-viaje.component.html',
  styleUrls: ['./publicar-viaje.component.css']
})
export class PublicarViajeComponent implements OnInit, AfterViewInit {
  originCenter: google.maps.LatLngLiteral = { lat: -12.040430, lng: -77.035780 };  
  destinationCenter: google.maps.LatLngLiteral = { lat: -12.040430, lng: -77.035780 };  
  originZoom = 6;
  destinationZoom = 6;
  originLocation: google.maps.LatLngLiteral | null = null;
  destinationLocation: google.maps.LatLngLiteral | null = null;
  formStep1!: FormGroup;
  formStep2!: FormGroup;
  currentStep: number = 1;
  formSubmitted: boolean = false;
  public showMap1: boolean = false;
  public showMap2: boolean = false;

  @ViewChild('locationInput', { static: false }) originSearchBox!: ElementRef;
  @ViewChild('destinationInput', { static: false }) destinationSearchBox!: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formStep1 = this.fb.group({
      location: ['', Validators.required],
      destination: ['', Validators.required],
      passengers: [1, Validators.required], 
      price: [0, Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });

    this.formStep2 = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      plateNumber: ['', Validators.required],
      dni: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeSearchBox();
    });
  }

  initializeSearchBox() {
    const originInput = this.originSearchBox.nativeElement as HTMLInputElement;
    const originSearchBox = new google.maps.places.SearchBox(originInput);
    originSearchBox.addListener('places_changed', () => {
      const places = originSearchBox.getPlaces();
      if (!places || places.length === 0) {
        console.log("No places found");
        return;
      }

      const place = places[0];
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      this.originLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      this.originCenter = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.originZoom = 15;

      // Actualizar el formulario con el nombre del lugar seleccionado
      this.formStep1.patchValue({ location: place.formatted_address });
    });

    const destinationInput = this.destinationSearchBox.nativeElement as HTMLInputElement;
    const destinationSearchBox = new google.maps.places.SearchBox(destinationInput);
    destinationSearchBox.addListener('places_changed', () => {
      const places = destinationSearchBox.getPlaces();
      if (!places || places.length === 0) {
        console.log("No places found");
        return;
      }

      const place = places[0];
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      this.destinationLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      this.destinationCenter = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.destinationZoom = 15;

      // Actualizar el formulario con el nombre del lugar seleccionado
      this.formStep1.patchValue({ destination: place.formatted_address });
    });
  }

  onMapClick(event: google.maps.MapMouseEvent, type: string): void {
    if (event.latLng) {
      const geocoder = new google.maps.Geocoder();
      const location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };

      geocoder.geocode({ location }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const address = results[0].formatted_address;

          if (type === 'origin') {
            this.originLocation = location;
            this.originCenter = location;
            this.originZoom = 15;
            this.formStep1.patchValue({ location: address });
          } else if (type === 'destination') {
            this.destinationLocation = location;
            this.destinationCenter = location;
            this.destinationZoom = 15;
            this.formStep1.patchValue({ destination: address });
          }
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }

  nextStep(): void {
    this.formSubmitted = true;
    if (this.currentStep === 1 && this.formStep1.invalid) {
      console.log('El formulario de la primera parte es inválido');
      Object.keys(this.formStep1.controls).forEach(key => {
        if (this.formStep1.get(key)?.invalid) {
          console.log(`Campo inválido: ${key}, valor: ${this.formStep1.get(key)?.value}, errores: ${JSON.stringify(this.formStep1.get(key)?.errors)}`);
        }
      });
      return;
    }
    this.formSubmitted = false;
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  submitForm(): void {
    console.log('Intento de envío de formulario');
    this.formSubmitted = true;

    if (this.formStep2.invalid) {
      console.log('El formulario de la segunda parte es inválido');
      Object.keys(this.formStep2.controls).forEach(key => {
        if (this.formStep2.get(key)?.invalid) {
          console.log(`Campo inválido: ${key}, valor: ${this.formStep2.get(key)?.value}, errores: ${JSON.stringify(this.formStep2.get(key)?.errors)}`);
        }
      });
      return;
    }

    console.log('Formulario enviado', { ...this.formStep1.value, ...this.formStep2.value });
    // Aquí puedes manejar el envío del formulario, como llamar a un servicio o similar
  }

  increasePassengers(): void {
    const passengersControl = this.formStep1.get('passengers');
    if (passengersControl && typeof passengersControl.value === 'number') {
      passengersControl.setValue(passengersControl.value + 1);
    }
  }

  decreasePassengers(): void {
    const passengersControl = this.formStep1.get('passengers');
    if (passengersControl && typeof passengersControl.value === 'number' && passengersControl.value > 1) {
      passengersControl.setValue(passengersControl.value - 1);
    }
  }

  openMap1(): void {
    this.showMap1 = true;
  }

  closeMap1(): void {
    this.showMap1 = false
  }
  openMap2(): void {
    this.showMap2 = true;
  }

  closeMap2(): void {
    this.showMap2 = false
  }
}
