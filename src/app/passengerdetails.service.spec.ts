import { TestBed } from '@angular/core/testing';

import { PassengerdetailsService } from './passengerdetails.service';

describe('PassengerdetailsService', () => {
  let service: PassengerdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
