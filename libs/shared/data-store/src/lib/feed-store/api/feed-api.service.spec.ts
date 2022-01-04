import { TestBed } from '@angular/core/testing';

import { FeedApiService } from './feed-api.service';

describe('FeedApiService', () => {
  let service: FeedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
