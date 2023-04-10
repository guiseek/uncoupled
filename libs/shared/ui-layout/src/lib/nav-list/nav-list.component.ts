import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nav[workspace-list]',
  template: `<ng-content select="a[workspace-nav-list-item]"></ng-content>`,
  styleUrls: ['./nav-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavListComponent {}
