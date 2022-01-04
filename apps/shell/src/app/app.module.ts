import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FeedStoreModule } from '@ng-tiktok-mf-app/shared/data-store';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FeedStoreModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('feed/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent],
})
export class AppModule {}
