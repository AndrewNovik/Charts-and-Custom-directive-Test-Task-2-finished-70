import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout.component';
import { TaskOneComponent } from './pages/task-one/task-one.component';
import { TaskTwoComponent } from './pages/task-two/task-two.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'task-one', pathMatch: 'full' },
      {
        path: 'task-one',
        loadComponent: () => TaskOneComponent,
      },
      {
        path: 'task-two',
        loadComponent: () => TaskTwoComponent,
      },
    ],
  },
];
