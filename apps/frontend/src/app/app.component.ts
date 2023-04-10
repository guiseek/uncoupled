import { UserFacade } from '@workspace/shared/data-access';
import { Component } from '@angular/core';
import { Di } from '@workspace/shared/util-core';
import { UserForm } from './users/user.form';

@Component({
  selector: 'workspace-root',
  template: `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of facade.users$ | async">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            <button type="button" (click)="form.patchValue(user)">
              Alterar
            </button>
            <button type="button" (click)="facade.removeUser(user)">
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button (click)="facade.loadUsers()">Load users</button>

    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>
        <span>ID</span>
        <input type="number" name="id" formControlName="id" readonly />
      </label>
      <label>
        <span>Nome</span>
        <input type="text" name="name" formControlName="name" />
      </label>

      <output> {{ facade.error$ | async }} </output>

      <button>Enviar</button>
    </form>

    <router-outlet></router-outlet>
  `,
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
