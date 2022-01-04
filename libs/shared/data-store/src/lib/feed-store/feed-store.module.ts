import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedApiService } from './api/feed-api.service';
import { FeedDataService } from './feed-data.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [FeedApiService, FeedDataService],
})
export class FeedStoreModule {}
