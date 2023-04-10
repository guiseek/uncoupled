import { Component } from '@angular/core';

@Component({
  selector: 'a[workspace-nav-list-item]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./nav-list-item.component.scss'],
})
export class NavListItemComponent {}
