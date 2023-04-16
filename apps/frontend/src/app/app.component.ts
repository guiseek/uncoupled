import {UserFacade} from '@uncoupled/user/data-access'
import {PlaylistFacade} from '@uncoupled/collection/data-access'
import {Component, OnInit} from '@angular/core'
import {Di} from '@uncoupled/shared/util-core'
import {UserForm} from './users/user.form'

@Component({
  selector: 'uncoupled-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend'

  readonly form = new UserForm()
  readonly userFacade = Di.use(UserFacade)
  readonly playlistFacade = Di.use(PlaylistFacade)

  onSubmit() {
    // this.userFacade.save(this.form.value)
    this.form.reset()
  }

  ngOnInit(): void {
    this.playlistFacade.load()
    this.userFacade.load()
  }
}
