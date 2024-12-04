import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [
  {
    path: 'gels/recommendations',
    loadComponent: () =>
      import('./pages/gels/gel-recommendations/gel-recommendations.component').then((mod) => mod.GelRecommendationsComponent),
  },
  {
    path: 'gels/info',
    loadComponent: () =>
      import('./pages/gels/info/info.component').then((mod) => mod.GelsInfoComponent),
  },
  {
    path: 'gels',
    loadComponent: () =>
      import('./pages/gels/principal/gels.component').then((mod) => mod.GelsComponent),
  },
  {
    path: 'gels/:proportion',
    loadComponent: () =>
      import('./pages/gels/principal/gels.component').then((mod) => mod.GelsComponent),
  },
  {
    path: 'drinks',
    loadComponent: () =>
      import('./pages/drinks/drinks.component').then(
        (mod) => mod.DrinksComponent
      ),
  },
  {
    path: 'materials',
    loadComponent: () =>
      import('./pages/materials/materials.component').then(
        (mod) => mod.MaterialsComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (mod) => mod.HomeComponent
      ),
  },
  {
    path: 'calculator',
    loadComponent: () =>
      import('./pages/calculator/calculator.component').then(
        (mod) => mod.CalculatorComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    /*loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),*/
    loadComponent: () =>
      import('./pages/gels/principal/gels.component').then((mod) => mod.GelsComponent),
    providers: [
      importProvidersFrom([
        TranslateModule.forChild()
      ])
    ]
  },
  {
    path: ':proportion',
    pathMatch: 'full',
    /*loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),*/
    loadComponent: () =>
      import('./pages/gels/principal/gels.component').then((mod) => mod.GelsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (mod) => mod.PageNotFoundComponent
      ),
  },
];
