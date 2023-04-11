import { UserFacade } from '@workspace/shared/data-access';
import { Component, OnInit } from '@angular/core';
import { Di } from '@workspace/shared/util-core';
import { UserForm } from './users/user.form';
import { LibraryFacade } from '@workspace/library/data-access';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  readonly form = new UserForm();
  readonly userFacade = Di.use(UserFacade);
  readonly libraryFacade = Di.use(LibraryFacade);

  onSubmit() {
    this.userFacade.saveUser(this.form.value);
    this.form.reset();
  }

  ngOnInit(): void {
    this.libraryFacade.loadPlaylists();
  }
}
