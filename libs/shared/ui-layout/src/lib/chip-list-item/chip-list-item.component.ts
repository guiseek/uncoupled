import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'li[workspace-chip-list-item]',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./chip-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipListItemComponent {}
