import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SectionContainerComponent} from './section-container'
import {NavListItemComponent} from './nav-list-item'
import {NavListComponent} from './nav-list'
import {ChipListComponent} from './chip-list'
import {ChipListItemComponent} from './chip-list-item'
import {TextFieldComponent} from './text-field'
import {LibraryListComponent} from './library-list'
import {LibraryListItemComponent} from './library-list-item'
import {TableComponent} from './table/table.component'

@NgModule({
  imports: [CommonModule],
  declarations: [
    SectionContainerComponent,
    NavListComponent,
    NavListItemComponent,
    ChipListComponent,
    ChipListItemComponent,
    TextFieldComponent,
    LibraryListComponent,
    LibraryListItemComponent,
    TableComponent,
  ],
  exports: [
    SectionContainerComponent,
    NavListComponent,
    NavListItemComponent,
    ChipListComponent,
    ChipListItemComponent,
    TextFieldComponent,
    LibraryListComponent,
    LibraryListItemComponent,
    TableComponent,
  ],
})
export class UiLayoutModule {}
