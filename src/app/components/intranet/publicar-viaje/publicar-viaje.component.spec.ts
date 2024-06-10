import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicarViajeComponent } from './publicar-viaje.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('PublicarViajeComponent', () => {
  let component: PublicarViajeComponent;
  let fixture: ComponentFixture<PublicarViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicarViajeComponent],
      imports:[GoogleMapsModule, HttpClientModule,FormsModule,ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(PublicarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
