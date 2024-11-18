import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'gels',
    loadComponent: () =>
      import('./pages/gels/gels.component').then((mod) => mod.GelsComponent),
  },
  {
    path: 'drinks',
    loadComponent: () =>
      import('./pages/drinks/drinks.component').then(
        (mod) => mod.DrinksComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (mod) => mod.PageNotFoundComponent
      ),
  },
];
