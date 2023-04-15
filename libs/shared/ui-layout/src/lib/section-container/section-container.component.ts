import {Component} from '@angular/core'

@Component({
  selector: 'ui-container,section[ui-container]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./section-container.component.scss'],
})
export class SectionContainerComponent {}
