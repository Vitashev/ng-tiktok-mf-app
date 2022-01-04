import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { SliderComponent } from './components/slider/slider/slider.component';
import { CardComponent } from './components/card/card/card.component';

@NgModule({
  declarations: [RemoteEntryComponent, SliderComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
