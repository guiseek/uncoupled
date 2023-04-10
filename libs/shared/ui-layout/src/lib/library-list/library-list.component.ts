import { Component } from '@angular/core';

@Component({
  selector: 'ui-library-list',
  template: `<ng-content select="ui-library-list-item"></ng-content>`,
  // styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent {

}
