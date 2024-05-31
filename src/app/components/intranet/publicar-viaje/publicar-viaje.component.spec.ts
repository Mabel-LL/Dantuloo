import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarViajeComponent } from './publicar-viaje.component';

describe('PublicarViajeComponent', () => {
  let component: PublicarViajeComponent;
  let fixture: ComponentFixture<PublicarViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicarViajeComponent]
    });
    fixture = TestBed.createComponent(PublicarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
