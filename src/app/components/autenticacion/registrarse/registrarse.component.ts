import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  form!: FormGroup;
  formSubmitted = false;
  dniHasError: boolean = false;
  telefonoHasError: boolean = false;
  selectedFileName: string = '';

  constructor(private fb: FormBuilder,  private router: Router, private usuarioservice: UsuarioService ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      contraseña: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContraseña: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      tipoDePerfil: ['', Validators.required],
      fechaDeNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      fotoDePerfil: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  enviarFormulario() {
    console.log('Intento de envío de formulario');
    this.formSubmitted = true; // Establecemos formSubmitted en true al enviar el formulario

    if (this.form.invalid) {
      console.log('El formulario es inválido');
      Object.keys(this.form.controls).forEach(key => {
        if (this.form.get(key)?.invalid) {
          console.log(`Campo inválido: ${key}, valor: ${this.form.get(key)?.value}, errores: ${JSON.stringify(this.form.get(key)?.errors)}`);
        }
      });
      return;
    }

    console.log('Formulario enviado:', this.form.value);
    const usuarioData = {
      nombre: this.form.value.nombre,
      fecha_nacimiento: this.form.value.fechaDeNacimiento,
      telefono: this.form.value.telefono,
      correo: this.form.value.correo,
      contrasena: this.form.value.contraseña,
      dni: this.form.value.dni,
      sexo: this.form.value.sexo,
      role: this.form.value.tipoDePerfil,

    };

    this.usuarioservice.registrarUsuario(usuarioData).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.router.navigate(['/autenticacion/iniciar-sesion']);
        this.router.navigate(['/autenticacion/iniciar-sesion']);

      },
      (error) => {
        console.error('Error al registrar el usuario', error);
      }
    );
    // Aquí deberías tener la lógica para enviar el formulario al servidor
  }


  passwordMatchValidator(form: FormGroup) {
    const password = form.get('contraseña')?.value;
    const confirmPassword = form.get('confirmarContraseña')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }


  validateDNI() {
    const dniControl = this.form.get('dni');
    if (dniControl) {
      if (dniControl.value.length !== 8) {
        this.dniHasError = true;
        dniControl.setErrors({ length: true });
      } else {
        this.dniHasError = false;
        dniControl.setErrors(null);
      }
    }
  }

  validateTelefono() {
    const telefonoControl = this.form.get('telefono');
    if (telefonoControl) {
      if (telefonoControl.value.length !== 9) {
        this.telefonoHasError = true;
        telefonoControl.setErrors({ length: true });
      } else {
        this.telefonoHasError = false;
        telefonoControl.setErrors(null);
      }
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    } else {
      this.selectedFileName = '';
    }
  }
}
