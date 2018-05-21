import { Routes } from '@angular/router';
import { CommitsContainer } from './commits/container/commits.container';

export const routes: Routes = [
  { path: '', redirectTo: '/commits/yanxch', pathMatch: 'full' },
  { path: 'commits/:username', component: CommitsContainer }
];