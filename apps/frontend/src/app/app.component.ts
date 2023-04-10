import { UserFacade } from '@workspace/shared/data-access';
import { Component } from '@angular/core';
import { Di } from '@workspace/shared/util-core';

@Component({
  selector: 'workspace-root',
  template: `
    {{ facade.users$ | async | json }}

    <button (click)="facade.loadUsers()">Load users</button>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'frontend';

  readonly facade = Di.use(UserFacade);
}
