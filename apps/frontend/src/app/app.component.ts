import { UserFacade } from '@workspace/shared/data-access';
import { Component } from '@angular/core';
import { Di } from '@workspace/shared/util-core';
import { UserForm } from './users/user.form';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  readonly form = new UserForm();
  readonly facade = Di.use(UserFacade);

  onSubmit() {
    this.facade.saveUser(this.form.value);
    this.form.reset();
  }
}
