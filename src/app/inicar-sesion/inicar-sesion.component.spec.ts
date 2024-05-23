import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicarSesionComponent } from './inicar-sesion.component';

describe('InicarSesionComponent', () => {
  let component: InicarSesionComponent;
  let fixture: ComponentFixture<InicarSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicarSesionComponent]
    });
    fixture = TestBed.createComponent(InicarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
