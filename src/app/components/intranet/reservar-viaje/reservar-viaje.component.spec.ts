import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarViajeComponent } from './reservar-viaje.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

describe('ReservarViajeComponent', () => {
  let component: ReservarViajeComponent;
  let fixture: ComponentFixture<ReservarViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarViajeComponent],
      imports: [HttpClientModule,
      FormsModule],
    });
    fixture = TestBed.createComponent(ReservarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
