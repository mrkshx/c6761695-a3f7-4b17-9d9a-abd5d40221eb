import { TestBed } from '@angular/core/testing';

import { EventsDataService } from './events-data.service';

describe('EventsService', () => {
  let service: EventsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
