import { Routes } from '@angular/router';

export const memberRoutes: Routes = [
  {
    path: 'features',
    loadChildren: 'app/features/member-list/member-list.module#MemberListModule'
  }
];