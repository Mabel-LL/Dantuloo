import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionComponent } from './iniciar-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('IniciarSesionComponent', () => {
  let component: IniciarSesionComponent;
  let fixture: ComponentFixture<IniciarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniciarSesionComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear', () => {
    expect(component).toBeTruthy();
  });
});
