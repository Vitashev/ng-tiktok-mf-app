import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedStoreModule } from './feed-store/feed-store.module';

@NgModule({
  imports: [CommonModule, FeedStoreModule],
})
export default class SharedDataStoreModule {}
