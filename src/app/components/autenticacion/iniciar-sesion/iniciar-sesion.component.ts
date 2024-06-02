import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuarioService} from "../../../services/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  loginForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

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

    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(user);

    // Llamar al método de inicio de sesión en el servicio
    this.usuarioService.login(user).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        // Autenticación exitosa, redirigir al usuario
        this.router.navigate(['/intranet/buscar']);
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}
