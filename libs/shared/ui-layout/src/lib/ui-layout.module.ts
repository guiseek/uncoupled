import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from './section-container';
import { NavListItemComponent } from './nav-list-item';
import { NavListComponent } from './nav-list';
import { ChipListComponent } from './chip-list';
import { ChipListItemComponent } from './chip-list-item';
import { TextFieldComponent } from './text-field';
import { LibraryListComponent } from './library-list';
import { LibraryListItemComponent } from './library-list-item';

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
