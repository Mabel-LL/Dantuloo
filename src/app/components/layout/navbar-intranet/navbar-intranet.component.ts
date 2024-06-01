import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-intranet',
  templateUrl: './navbar-intranet.component.html',
  styleUrls: ['./navbar-intranet.component.css']
})
export class NavbarIntranetComponent {
  public showModal: boolean = false;
  public notifications: string[] = [
    'Tu solicitud para el viaje de Trujillo a Lima a las 3:00pm fue aceptada.',
    'Tu solicitud para el viaje de Trujillo a Lima a las 3:00pm fue aceptada.',
    'Tu solicitud para el viaje de Trujillo a Lima a las 3:00pm fue aceptada.',
    'Tu solicitud para el viaje de Trujillo a Lima a las 3:00pm fue aceptada.'
  ];

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  deleteNotifications(): void {
    this.notifications = [];
  }
}
