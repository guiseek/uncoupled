import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ul[workspace-chip-list]',
  template: `<ng-content select="li[workspace-chip-list-item]"></ng-content>`,
  styleUrls: ['./chip-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipListComponent {}
