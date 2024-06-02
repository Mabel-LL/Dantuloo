import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarViajeComponent } from './reservar-viaje.component';

describe('ReservarViajeComponent', () => {
  let component: ReservarViajeComponent;
  let fixture: ComponentFixture<ReservarViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarViajeComponent]
    });
    fixture = TestBed.createComponent(ReservarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
