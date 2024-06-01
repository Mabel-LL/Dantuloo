import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarViajeComponent } from './buscar-viaje.component';
import {FormsModule} from "@angular/forms";

describe('BuscarViajeComponent', () => {
  let component: BuscarViajeComponent;
  let fixture: ComponentFixture<BuscarViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarViajeComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(BuscarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear', () => {
    expect(component).toBeTruthy();
  });
});
