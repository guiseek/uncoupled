import {Component} from '@angular/core'

@Component({
  selector: 'a[ui-nav-list-item]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./nav-list-item.component.scss'],
})
export class NavListItemComponent {}
