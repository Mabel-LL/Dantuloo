import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrarseComponent } from './registrarse.component';

describe('RegistrarseComponent', () => {
  let component: RegistrarseComponent;
  let fixture: ComponentFixture<RegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarseComponent],
      imports: [ReactiveFormsModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate nombre', () => {
    const nombreControl = component.form.controls['nombre'];
    expect(nombreControl.valid).toBeFalsy();

    nombreControl.setValue('John');
    expect(nombreControl.valid).toBeTruthy();

    nombreControl.setValue('John Doe');
    expect(nombreControl.valid).toBeTruthy();

    nombreControl.setValue('');
    expect(nombreControl.valid).toBeFalsy();

    nombreControl.setValue('J');
    expect(nombreControl.valid).toBeFalsy();
  });

  it('should validate apellido', () => {
    const apellidoControl = component.form.controls['apellido'];
    expect(apellidoControl.valid).toBeFalsy();

    apellidoControl.setValue('Doe Smith');
    expect(apellidoControl.valid).toBeTruthy();

    apellidoControl.setValue('');
    expect(apellidoControl.valid).toBeFalsy();

    apellidoControl.setValue('Doe');
    expect(apellidoControl.valid).toBeFalsy();
  });

  it('should validate correo electronico', () => {
    const correoControl = component.form.controls['correo'];
    expect(correoControl.valid).toBeFalsy();

    correoControl.setValue('john@example.com');
    expect(correoControl.valid).toBeTruthy();

    correoControl.setValue('');
    expect(correoControl.valid).toBeFalsy();

    correoControl.setValue('johnexample.com');
    expect(correoControl.valid).toBeFalsy();

    correoControl.setValue('john@example');
    expect(correoControl.valid).toBeFalsy();
  });

  it('should validate contraseña', () => {
    const contraseñaControl = component.form.controls['contraseña'];
    expect(contraseñaControl.valid).toBeFalsy();

    contraseñaControl.setValue('Password1');
    expect(contraseñaControl.valid).toBeTruthy();

    contraseñaControl.setValue('');
    expect(contraseñaControl.valid).toBeFalsy();

    contraseñaControl.setValue('pass');
    expect(contraseñaControl.valid).toBeFalsy();

    contraseñaControl.setValue('password');
    expect(contraseñaControl.valid).toBeFalsy();
  });

  it('should validate confirmar contraseña', () => {
    const contraseñaControl = component.form.controls['contraseña'];
    const confirmarContraseñaControl = component.form.controls['confirmarContraseña'];

    contraseñaControl.setValue('Password1');
    expect(confirmarContraseñaControl.valid).toBeFalsy();

    confirmarContraseñaControl.setValue('Password1');
    expect(confirmarContraseñaControl.valid).toBeTruthy();

    confirmarContraseñaControl.setValue('');
    expect(confirmarContraseñaControl.valid).toBeFalsy();

    confirmarContraseñaControl.setValue('Password2');
    expect(confirmarContraseñaControl.valid).toBeFalsy();
  });

  it('should validate DNI', () => {
    const dniControl = component.form.controls['dni'];
    expect(dniControl.valid).toBeFalsy();

    dniControl.setValue('12345678');
    expect(dniControl.valid).toBeTruthy();

    dniControl.setValue('');
    expect(dniControl.valid).toBeFalsy();

    dniControl.setValue('1234567');
    expect(dniControl.valid).toBeFalsy();

  });

});
