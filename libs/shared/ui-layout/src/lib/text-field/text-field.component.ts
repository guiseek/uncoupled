import {Component, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'ui-text-field',
  template: `<slot name="label"></slot><slot name="input"></slot>`,
  styleUrls: ['./text-field.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TextFieldComponent {}
