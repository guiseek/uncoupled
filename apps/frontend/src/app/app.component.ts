import {UserFacade} from '@uncoupled/user/data-access'
import {LibraryFacade} from '@uncoupled/library/data-access'
import {Component, OnInit} from '@angular/core'
import {Di} from '@uncoupled/shared/util-core'
import {UserForm} from './users/user.form'

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend'

  readonly form = new UserForm()
  readonly userFacade = Di.use(UserFacade)
  readonly libraryFacade = Di.use(LibraryFacade)

  onSubmit() {
    this.userFacade.save(this.form.value)
    this.form.reset()
  }

  ngOnInit(): void {
    this.libraryFacade.load()
    this.userFacade.load()
  }
}
