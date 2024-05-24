import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,}$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]{3,}$/)]],
      correo: ['', [Validators.required, Validators.email, Validators.pattern(/.+@.+\..+/)]],
      contraseña: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]],
      confirmarContraseña: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('contraseña');
    const confirmPassword = form.get('confirmarContraseña');
    return password && confirmPassword && password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
