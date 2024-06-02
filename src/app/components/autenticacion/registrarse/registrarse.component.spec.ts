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

  it('debe crear', () => {
    expect(component).toBeTruthy();
  });



  it('debe validar el correo electrónico', () => {
    const correoControl = component.form.controls['correo'];

    correoControl.setValue('juan.ramirez@hotmail.com');
    expect(correoControl.valid).toBeTruthy();

    correoControl.setValue('juan.ramirez@hotmail');
    expect(correoControl.valid).toBeFalsy();
  });


  it('debe validar la contraseña', () => {
    const contraseñaControl = component.form.controls['contraseña'];
    expect(contraseñaControl.valid).toBeFalsy();

    contraseñaControl.setValue('Contraseña1');
    expect(contraseñaControl.valid).toBeTruthy();

    contraseñaControl.setValue('');
    expect(contraseñaControl.valid).toBeFalsy();

    contraseñaControl.setValue('con');
    expect(contraseñaControl.valid).toBeFalsy();
  });

  it('debe validar el confirmar contraseña', () => {
    const contraseñaControl = component.form.controls['contraseña'];
    const confirmarContraseñaControl = component.form.controls['confirmarContraseña'];

    contraseñaControl.setValue('Contraseña1');
    confirmarContraseñaControl.setValue('Contraseña1');
    expect(component.form.errors?.['passwordMismatch']).toBeUndefined();

    confirmarContraseñaControl.setValue('Contraseña2');
    expect(component.form.errors?.['passwordMismatch']).toBeDefined();
  });

  it('debe validar el DNI', () => {
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
