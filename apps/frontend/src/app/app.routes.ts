import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@uncoupled/user/feature-shell').then(
        (m) => m.UserFeatureShellModule
      ),
  },
];
