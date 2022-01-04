import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  post: any;
}
