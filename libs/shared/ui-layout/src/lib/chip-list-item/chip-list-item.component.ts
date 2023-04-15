import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'li[ui-chip-list-item]',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./chip-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipListItemComponent {}
