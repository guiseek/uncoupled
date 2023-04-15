import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'ui-list,nav[ui-list]',
  template: `<ng-content select="a[ui-nav-list-item]"></ng-content>`,
  styleUrls: ['./nav-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {}
