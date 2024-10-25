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
      "title": "¿Donde puedo encontrar los ingredientes y elementos necesarios para crear nuestros geles?",
      "description": "<p class=\"content\"><b>TExto para añadir lo necesario</b>. </p>"
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
