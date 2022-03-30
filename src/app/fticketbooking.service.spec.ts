import { TestBed } from '@angular/core/testing';

import { FticketbookingService } from './fticketbooking.service';

describe('FticketbookingService', () => {
  let service: FticketbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FticketbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
