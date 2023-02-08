import { TestBed } from '@angular/core/testing';

import { SendSearchValueService } from './send-search-value.service';

describe('SendSearchValueService', () => {
  let service: SendSearchValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendSearchValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
