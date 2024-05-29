import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionConductorComponent } from './notificacion-conductor.component';

describe('NotificacionConductorComponent', () => {
  let component: NotificacionConductorComponent;
  let fixture: ComponentFixture<NotificacionConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificacionConductorComponent]
    });
    fixture = TestBed.createComponent(NotificacionConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
