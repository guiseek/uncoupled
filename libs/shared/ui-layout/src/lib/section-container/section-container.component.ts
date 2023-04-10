import { Component } from '@angular/core';

@Component({
  selector: 'section[workspace-container]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./section-container.component.scss'],
})
export class SectionContainerComponent {}
