# Geles

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Aplicar SEO correctamente en una aplicación Angular 18 sin SSR (Server-Side Rendering) es un desafío debido a que Angular se ejecuta en el navegador, lo que hace que el contenido no sea indexado correctamente por los motores de búsqueda, ya que estos no pueden leer el contenido generado por JavaScript de manera inmediata.

Sin embargo, hay varias estrategias que puedes utilizar para mejorar el SEO de una aplicación Angular sin usar SSR:

### 1. **Uso de Angular Universal en modo prerenderizado (Prerendering)**

Aunque no uses SSR en tiempo real, puedes optar por la prerenderización, que es una técnica en la que Angular genera HTML estático durante la construcción de la aplicación y lo sirve para los motores de búsqueda.

**Pasos:**

- Instalar Angular Universal y configurar la prerenderización:
  
  ```bash
  ng add @nguniversal/express-engine
  ```

- Configurar rutas de la aplicación para prerenderizar los componentes más importantes. Puedes hacer que solo algunas rutas se prerendericen, como la página de inicio o las páginas de productos.
- Ejecutar el comando de construcción con la opción `prerender`:
  
  ```bash
  ng run your-app:prerender
  ```

  Esto generará versiones estáticas de tus páginas que pueden ser indexadas por los motores de búsqueda.

### 2. **Uso de Meta Tags y Open Graph Tags**

Asegúrate de que tu aplicación Angular tenga correctamente configuradas las etiquetas `<meta>` para el SEO y las etiquetas Open Graph para mejorar la visualización en redes sociales. Para esto, usa el servicio `Title` y `Meta` de Angular.

**Ejemplo de uso en componentes:**

```typescript
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    // Títulos de página
    this.titleService.setTitle('Página de inicio - Mi Aplicación');

    // Meta tags
    this.metaService.addTags([
      { name: 'description', content: 'Esta es la página principal de nuestra aplicación' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Mi Aplicación - Página Principal' },
      { property: 'og:description', content: 'Descripción de la página principal' }
    ]);
  }
}
```

Estas etiquetas son cruciales para que los motores de búsqueda comprendan el contenido de tu aplicación.

### 3. **Uso de la Biblioteca Angular SEO**

Existen bibliotecas como `@ngx-seo/core` que pueden ayudar a gestionar los meta tags de manera más dinámica, incluso sin SSR. Esta biblioteca permite modificar las etiquetas `<meta>`, `<title>`, y las etiquetas Open Graph en función de las rutas y el contenido.

### 4. **Renderizado Lento o Lazy Loading**

El "lazy loading" de módulos en Angular es una técnica que puede mejorar la velocidad de carga de tu aplicación, lo que indirectamente puede mejorar el SEO. Sin embargo, si bien esta técnica mejora el rendimiento, es importante asegurarse de que las rutas que contienen contenido crítico sean prerenderizadas o carguen rápidamente para no afectar el SEO.

### 5. **Configura correctamente el archivo `robots.txt`**

Un archivo `robots.txt` bien configurado es crucial para indicar a los motores de búsqueda qué contenido deben rastrear e indexar.

Ejemplo de archivo `robots.txt`:

```text
User-agent: *
Disallow: /admin/
Allow: /
Sitemap: https://www.tusitio.com/sitemap.xml
```

### 6. **Generar un sitemap.xml**

El sitemap ayuda a los motores de búsqueda a encontrar y rastrear las páginas de tu sitio más fácilmente. Si estás usando una SPA (Single Page Application) sin SSR, es crucial asegurarte de que las URLs relevantes estén incluidas en el sitemap.

Para generar un sitemap, puedes usar herramientas de terceros que generen automáticamente un archivo `sitemap.xml` o usar servicios como `Angular Sitemap Generator`.

### 7. **Redirecciones y Enlaces Internos**

Asegúrate de que las URL sean limpias y legibles (sin parámetros complejos). Además, implementar redirecciones 301 para páginas que hayan cambiado de URL o que no existan es clave para no perder tráfico o rankings.

### 8. **Uso de Angular Router con Rutas Amigables**

El enrutador de Angular (`Angular Router`) puede configurar rutas legibles para SEO, como `/productos`, `/blog`, `/contacto`. Asegúrate de que las rutas sean claras, descriptivas y utilicen guiones (`-`) en lugar de guiones bajos (`_`) para mayor claridad.

### 9. **Incluir contenido estático clave**

Si bien Angular es dinámico, intenta incluir contenido estático importante directamente en el HTML inicial para que los motores de búsqueda lo encuentren fácilmente, como una breve descripción de la página, enlaces a categorías o productos importantes, etc.

### 10. **Medición del Rendimiento con Google Search Console y Lighthouse**

Usa Google Search Console para verificar si hay problemas de indexación o cobertura. Además, utiliza Lighthouse (integrado en las herramientas de desarrollo de Chrome) para analizar el rendimiento de tu aplicación, la accesibilidad y las mejores prácticas de SEO.

### Resumen

Aunque Angular no tenga SSR de forma predeterminada, hay formas de mejorar el SEO de una SPA mediante la prerenderización, la configuración correcta de meta tags, y una estructura bien pensada de rutas. Usar Angular Universal para prerenderizar contenido y aplicar buenas prácticas como el uso de un sitemap, meta tags y un `robots.txt` adecuado es esencial para una buena indexación en motores de búsqueda.
