import { TestBed } from '@angular/core/testing';

import { ViajeService } from './viaje.service';
import {HttpClientModule} from "@angular/common/http";

describe('ViajeServiceService', () => {
  let service: ViajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ViajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
