import { TestBed } from '@angular/core/testing';

import { CertsAndEducationService } from './certs-and-education-service';

describe('CertsAndEducation', () => {
  let service: CertsAndEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertsAndEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
