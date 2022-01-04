import { TestBed } from '@angular/core/testing';

import { FeedDataService } from './feed-data.service';

describe('FeedDataService', () => {
  let service: FeedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
