import { TestBed } from '@angular/core/testing';

import { TicketcancellationService } from './ticketcancellation.service';

describe('TicketcancellationService', () => {
  let service: TicketcancellationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketcancellationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
