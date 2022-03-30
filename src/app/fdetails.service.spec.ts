import { TestBed } from '@angular/core/testing';

import { FdetailsService } from './fdetails.service';

describe('FdetailsService', () => {
  let service: FdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
