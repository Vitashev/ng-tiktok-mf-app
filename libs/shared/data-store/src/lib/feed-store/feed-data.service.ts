import { Injectable } from '@angular/core';
import { BehaviorSubject, take, tap } from 'rxjs';
import { FeedApiService } from './api/feed-api.service';

@Injectable({
  providedIn: 'root',
})
export class FeedDataService {
  feed$ = new BehaviorSubject([]);

  constructor(private feedApiService: FeedApiService) {}

  init() {
    this.feedApiService
      .getFeed()
      .pipe(
        take(1),
        tap((res) => {
          this.feed$.next(res);
        })
      )
      .subscribe();
  }
}
