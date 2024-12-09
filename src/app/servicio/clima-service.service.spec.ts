import { TestBed } from '@angular/core/testing';

import { ClimaServiceService } from './clima-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ClimaServiceService', () => {
  let service: ClimaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ClimaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
