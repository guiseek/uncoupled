import {FormControl, FormGroup, Validators} from '@angular/forms'

export class UserForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
    })
  }
}
