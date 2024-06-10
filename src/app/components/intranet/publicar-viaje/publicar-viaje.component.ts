import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViajeService} from "../../../services/viaje.service";
import {ViajeUno} from "../../../models/viajeUno";
import {ViajeDos} from "../../../models/viajeDos";

@Component({
  selector: 'app-publicar-viaje',
  templateUrl: './publicar-viaje.component.html',
  styleUrls: ['./publicar-viaje.component.css']
})

export class PublicarViajeComponent implements OnInit, AfterViewInit {
  locationCenter: google.maps.LatLngLiteral = { lat: -10.466746, lng: -75.365439 };
  destinationCenter: google.maps.LatLngLiteral = { lat: -10.466746, lng: -75.365439 };
  locationZoom = 6;
  destinationZoom = 6;
  locationLocation: google.maps.LatLngLiteral | null = null;
  destinationLocation: google.maps.LatLngLiteral | null = null;
  formStep1!: FormGroup;
  formStep2!: FormGroup;
  currentStep: number = 1;
  formSubmitted: boolean = false;
  showMap1: boolean = false;
  showMap2: boolean = false;

  @ViewChild('locationLocationInput', { static: false }) locationLocationInput!: ElementRef;
  @ViewChild('locationCityInput', { static: false }) locationCityInput!: ElementRef;
  @ViewChild('locationDepartmentInput', { static: false }) locationDepartmentInput!: ElementRef;
  @ViewChild('locationCountryInput', { static: false }) locationCountryInput!: ElementRef;
  @ViewChild('destinationLocationInput', { static: false }) destinationLocationInput!: ElementRef;
  @ViewChild('destinationCityInput', { static: false }) destinationCityInput!: ElementRef;
  @ViewChild('destinationDepartmentInput', { static: false }) destinationDepartmentInput!: ElementRef;
  @ViewChild('destinationCountryInput', { static: false }) destinationCountryInput!: ElementRef;

  constructor(private fb: FormBuilder, private viajeuno: ViajeService, private viajedos: ViajeService) {}

  ngOnInit(): void {
    this.formStep1 = this.fb.group({
      location: ['', Validators.required],
      locationCity: ['', Validators.required],
      locationDepartment: ['', Validators.required],
      locationCountry: ['', Validators.required],
      locationLat: [{ value: '', disabled: true }, Validators.required],
      locationLng: [{ value: '', disabled: true }, Validators.required],
      destination: ['', Validators.required],
      destinationCity: ['', Validators.required],
      destinationDepartment: ['', Validators.required],
      destinationCountry: ['', Validators.required],
      destinationLat: [{ value: '', disabled: true }, Validators.required],
      destinationLng: [{ value: '', disabled: true }, Validators.required],

    });

    this.formStep2 = this.fb.group({
      passengers: [1, Validators.required],
      price: [0, Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      plateNumber: ['', Validators.required],
      color: ['', Validators.required],
    });

    // Deshabilitar los inputs de salida y destino
    this.disableLocationInputs();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeSearchBox();
    });
  }

  disableLocationInputs() {
    this.formStep1.get('locationLat')?.disable();
    this.formStep1.get('locationLng')?.disable();
    this.formStep1.get('destinationLat')?.disable();
    this.formStep1.get('destinationLng')?.disable();
  }

  enableLocationInputs() {
    this.formStep1.get('location')?.enable();
    this.formStep1.get('locationCity')?.enable();
    this.formStep1.get('locationDepartment')?.enable();
    this.formStep1.get('locationCountry')?.enable();
    this.formStep1.get('locationLat')?.enable();
    this.formStep1.get('locationLng')?.enable();
    this.formStep1.get('destination')?.enable();
    this.formStep1.get('destinationCity')?.enable();
    this.formStep1.get('destinationDepartment')?.enable();
    this.formStep1.get('destinationCountry')?.enable();
    this.formStep1.get('destinationLat')?.enable();
    this.formStep1.get('destinationLng')?.enable();
  }

  initializeSearchBox() {
    const locationInput = this.locationLocationInput.nativeElement as HTMLInputElement;
    const locationSearchBox = new google.maps.places.SearchBox(locationInput);
    locationSearchBox.addListener('places_changed', () => {
      const places = locationSearchBox.getPlaces();
      if (!places || places.length === 0) {
        console.log("No places found");
        return;
      }

      const place = places[0];
      if (!place.geometry || !place.geometry.location || !place.address_components) {
        console.log("Returned place contains no geometry or address components");
        return;
      }

      this.locationLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      this.locationCenter = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.locationZoom = 15;

      console.log('location address components:', place.address_components);
      this.updateAddressComponents(place.address_components, 'location');
      this.updateLatLng(this.locationLocation.lat, this.locationLocation.lng, 'locationLat', 'locationLng');
    });

    const destinationInput = this.destinationLocationInput.nativeElement as HTMLInputElement;
    const destinationSearchBox = new google.maps.places.SearchBox(destinationInput);
    destinationSearchBox.addListener('places_changed', () => {
      const places = destinationSearchBox.getPlaces();
      if (!places || places.length === 0) {
        console.log("No places found");
        return;
      }

      const place = places[0];
      if (!place.geometry || !place.geometry.location || !place.address_components) {
        console.log("Returned place contains no geometry or address components");
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

      console.log('Destination address components:', place.address_components);
      this.updateAddressComponents(place.address_components, 'destination');
      this.updateLatLng(this.destinationLocation.lat, this.destinationLocation.lng, 'destinationLat', 'destinationLng');
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
          if (!results[0].address_components) {
            console.error("Returned place contains no address components");
            return;
          }

          console.log(type, 'address components:', results[0].address_components);
          this.updateAddressComponents(results[0].address_components, type);

          if (type === 'location') {
            this.locationLocation = location;
            this.locationCenter = location;
            this.locationZoom = 15;
            this.updateLatLng(location.lat, location.lng, 'locationLat', 'locationLng');
          } else if (type === 'destination') {
            this.destinationLocation = location;
            this.destinationCenter = location;
            this.destinationZoom = 15;
            this.updateLatLng(location.lat, location.lng, 'destinationLat', 'destinationLng');
          }
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }

  updateAddressComponents(components: google.maps.GeocoderAddressComponent[], type: string) {
    let address = '';
    let streetNumber = '';
    let city = '';
    let department = '';
    let country = '';

    components.forEach(component => {
      if (component.types.includes('street_number')) {
        streetNumber = component.long_name;
      }
      if (component.types.includes('route')) {
        address = component.long_name;
      }
      if (component.types.includes('locality')) {
        city = component.long_name;
      }
      if (component.types.includes('administrative_area_level_1')) {
        department = component.long_name;
      }
      if (component.types.includes('country')) {
        country = component.long_name;
      }
    });

    const fullAddress = streetNumber ? `${streetNumber} ${address}` : address;

    console.log(`Address: ${fullAddress}, City: ${city}, Department: ${department}, Country: ${country}`);

    const patchObject: { [key: string]: string } = {
      [`${type}`]: fullAddress,
      [`${type}City`]: city,
      [`${type}Department`]: department,
      [`${type}Country`]: country
    };

    console.log('Patching values', patchObject);

    this.formStep1.patchValue(patchObject);

    console.log(this.formStep1.value); // Add this line to verify if values are updated
  }

  updateLatLng(lat: number, lng: number, latKey: string, lngKey: string) {
    this.formStep1.patchValue({
      [latKey]: lat,
      [lngKey]: lng
    });
  }

  viajeUno(): void {
    // Habilitar los campos antes de la validación
    /*this.enableLocationInputs();*/

    // Verificar el estado del formulario
    if (this.formStep1.valid) {
      const viaje: ViajeUno = {
        departamentodestino: this.formStep1.get('destinationDepartment')?.value,
        ciudaddestino: this.formStep1.get('destinationCity')?.value,
        direcciondestino: this.formStep1.get('destination')?.value,
        paisdestino: this.formStep1.get('destinationCountry')?.value,

        departamentoorigen: this.formStep1.get('locationDepartment')?.value,
        ciudadorigen: this.formStep1.get('locationCity')?.value,
        direccionorigen: this.formStep1.get('location')?.value,
        paisorigen: this.formStep1.get('locationCountry')?.value,
      };

      this.viajeuno.publicarViajeUno(viaje).subscribe(
        response => {
          console.log('Viaje publicado con éxito', response);
          // Aquí puedes agregar la lógica para redirigir al usuario o mostrar un mensaje de éxito
          this.currentStep = 2;
        },
        error => {
          console.error('Error al publicar el viaje', error);
          // Aquí puedes agregar la lógica para manejar el error, como mostrar un mensaje al usuario
        }
      );
    } else {
      console.error('Formulario inválido');
      // Revisar los errores de cada control
      Object.keys(this.formStep1.controls).forEach(key => {
        const controlErrors = this.formStep1.get(key)?.errors;
        if (controlErrors) {
          console.error(`Error en el campo ${key}:`, controlErrors);
        }
      });
    }

    // Volver a deshabilitar los campos si es necesario
    this.disableLocationInputs();
  }


  submitForm(): void {
    if (this.formStep2.valid) {
      const infoAuto: ViajeDos = {
        marcaAuto: this.formStep2.get('brand')?.value,
        modeloAuto: this.formStep2.get('model')?.value,
        placaAuto: this.formStep2.get('plateNumber')?.value,
        colorAuto: this.formStep2.get('color')?.value,

        pasajeros: this.formStep2.get('passengers')?.value,
        precio: this.formStep2.get('price')?.value,
        fechaHoraSalida: this.formStep2.get('')?.value,
      };

      this.viajedos.publicarViajeDos(infoAuto).subscribe(
        response => {
          console.log('Informacion del auto Guardado con exito', response);
          // Aquí puedes agregar la lógica para redirigir al usuario o mostrar un mensaje de éxito
        },
        error => {
          console.error('Error al guardar la informacion del auto', error);
          // Aquí puedes agregar la lógica para manejar el error, como mostrar un mensaje al usuario
        }
      );
    } else {
      console.error('Formulario inválido');
      // Revisar los errores de cada control
      Object.keys(this.formStep2.controls).forEach(key => {
        const controlErrors = this.formStep2.get(key)?.errors;
        if (controlErrors) {
          console.error(`Error en el campo ${key}:`, controlErrors);
        }
      });
    }
  }

  increasePassengers(): void {
    const passengersControl = this.formStep2.get('passengers');
    if (passengersControl && typeof passengersControl.value === 'number') {
      passengersControl.setValue(passengersControl.value + 1);
    }
  }

  decreasePassengers(): void {
    const passengersControl = this.formStep2.get('passengers');
    if (passengersControl && typeof passengersControl.value === 'number' && passengersControl.value > 1) {
      passengersControl.setValue(passengersControl.value - 1);
    }
  }

  openMap1() {
    this.showMap1 = true;
  }

  closeMap1() {
    this.showMap1 = false;
  }

  openMap2() {
    this.showMap2 = true;
  }

  closeMap2() {
    this.showMap2 = false;
  }
}
