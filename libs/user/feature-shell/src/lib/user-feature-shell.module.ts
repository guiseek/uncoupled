import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userFeatureShellRoutes } from './lib.routes';
import { UserFeatureShellComponent } from './user-feature-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userFeatureShellRoutes),
    RouterModule.forChild(userFeatureShellRoutes),
  ],
  declarations: [UserFeatureShellComponent],
})
export class UserFeatureShellModule {}
