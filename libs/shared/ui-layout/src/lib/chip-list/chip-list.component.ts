import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'ui-chip-list,ul[ui-chip-list]',
  template: `<ng-content select="li[ui-chip-list-item]"></ng-content>`,
  styleUrls: ['./chip-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipListComponent {}
