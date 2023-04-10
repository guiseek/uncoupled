import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from './section-container';
import { NavListItemComponent } from './nav-list-item';
import { NavListComponent } from './nav-list';
import { ChipListComponent } from './chip-list';
import { ChipListItemComponent } from './chip-list-item';
import { TextFieldComponent } from './text-field/text-field.component';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryListItemComponent } from './library-list-item/library-list-item.component';

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
  ],
})
export class UiLayoutModule {}
