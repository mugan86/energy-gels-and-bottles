import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), // provider to inject routes, preload all modules and trace route change events
    isDevMode()
      ? provideRouter(
          routes,
          withPreloading(PreloadAllModules),
          withDebugTracing()
        )
      : provideRouter(routes, withPreloading(PreloadAllModules)),]
};
