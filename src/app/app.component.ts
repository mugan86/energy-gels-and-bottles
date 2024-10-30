import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { calculateGelIngredients } from './shared/helpers';
import { AccordionModule } from './shared/components/accordion/accordion.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, AccordionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geles';
  gelForm: FormGroup;
  result: any;
  numberOfGels = 1;

  accordionOptions = [
    {
      "title": "Cantidades necesarias para crear geles",
      "description": ""
    },
    {
      "title": "Ingredientes",
      "description": "<p class=\"content\">A continuaci&oacute;n ten&eacute;is tenéis disponibles los ingredientes:</p><p class=\"content\"><ul class=\"list\"><li><a href=\"https://acortar.link/PusLII\" target=\"_blank\">Maltodextrina</a></li><li><a href=\"https://acortar.link/68Wcdr\" target=\"_blank\">Fructosa</a></li><li><a href=\"https://acortar.link/evcCYK\" target=\"_blank\">Evolytes (sales)</a></li><li><a href=\"https://acortar.link/cGGU5H\" target=\"_blank\">Saborizante</a></li><li><a href=\"https://www.hsnstore.com/hsnaffiliate/click/?linkid=cHJvZHVjdHx8SFNORS1DQUZ8fEFNQURPUk5JRVRPfHxodHRwczovL3d3dy5oc25zdG9yZS5jb20vbWFyY2FzL2Vzc2VudGlhbC1zZXJpZXMvY2FmZWluYS0yMDBtZw==\" target=\"_blank\">Cafeina (opcional)</a></li></ul></p>"
    },
    {
      "title": "Básculas, selladora,...",
      "description": "<p class=\"content\">A continuaci&oacute;n ten&eacute;is el material necesario.</p><p class=\"content\"><ul class=\"list\"><li><a href=\"https://amzn.to/3U5iykF\" target=\"_blank\">Báscula de cocina</a></li><li><a href=\"https://amzn.to/3z0LMZY\" target=\"_blank\">Termoselladora</a></li><li><a href=\"https://amzn.to/4aw2sGz\" target=\"_blank\">Batidora</a></li><li><a href=\"https://a.aliexpress.com/_EzZbGe1\" target=\"_blank\">Sobres Geles (15x5,5)</a></li><li><a href=\"https://www.amazon.es/Fitly-Botella-Flexible-Mochila-Hidrataci%C3%B3n/dp/B07KNDT5J7?th=1\" target=\"_blank\">Softflask (150ml)</a></li></ul></p>"
    },
    /*{
      "title": "¿Cuánto sería el coste por gel?",
      "description": "<p class=\"content\">En TrackNavigator, <b>tu privacidad es una prioridad. No almacenamos ningún dato personal ni ningún archivo que cargues</b>.</p><p class=\"content\">El archivo GPX que subes es utilizado temporalmente para realizar el filtrado y obtener los puntos de interés (POIs) desde <a class=\"important-url\" href=\"https://www.openstreetmap.org/\" target=\"_blank\">OpenStreetMap</a>, pero no se guarda ni se comparte de ninguna otra forma. Toda la operación ocurre en tiempo real, y una vez finalizado el proceso, el archivo se descarta.</p><p class=\"content\">➡️ Para más detalles sobre cómo funciona la carga de archivos GPX, revisa <a href=\"https://www.youtube.com/watch?v=uc123toJ-oA&t=242s\" target=\"_blank\">el minuto 4:02 de nuestro videotutorial</a></p>"
    },*/
    
  ].map(item => {
    return {
      question: item.title,
      answer: item.description,
    };
  });

  constructor(private fb: FormBuilder) {
    // Crear el formulario reactivo con valores iniciales
    this.gelForm = this.fb.group({
      numberOfGels: [2],   // Valor inicial: 2 geles
      textureIndex: [0.7], // Valor inicial: textura media
      carbsPerGel: [52.7]    // Valor inicial: 40g de carbohidratos por gel
    });

    // Escuchar los cambios en el formulario
    this.gelForm.valueChanges.subscribe(() => {
      this.calculateIngredients();
    });

    // Calcular los ingredientes inicialmente
    this.calculateIngredients();
  }

  // Función para calcular los ingredientes basado en el formulario
  calculateIngredients(): void {
    const { numberOfGels, textureIndex, carbsPerGel } = this.gelForm.value;
    this.numberOfGels = numberOfGels;
    try {
      this.result = calculateGelIngredients(carbsPerGel, textureIndex);
    } catch (error) {
      console.error(error);
      this.result = null;
    }
  }
}
