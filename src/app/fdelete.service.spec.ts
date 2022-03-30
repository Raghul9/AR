import { TestBed } from '@angular/core/testing';

import { FdeleteService } from './fdelete.service';

describe('FdeleteService', () => {
  let service: FdeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
