import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  loginForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    console.log('Intento de envío de formulario');
    this.formSubmitted = true; // Establecemos formSubmitted en true al enviar el formulario

    if (this.loginForm.invalid) {
      console.log('El formulario es inválido');
      return;
    }

    console.log('Formulario enviado:', this.loginForm.value);
    // Aquí deberías tener la lógica para enviar el formulario al servidor
  }
}
