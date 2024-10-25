import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { calculateGelIngredients } from './shared/helpers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geles';
  gelForm: FormGroup;
  result: any;
  numberOfGels = 1;

  constructor(private fb: FormBuilder) {
    // Crear el formulario reactivo con valores iniciales
    this.gelForm = this.fb.group({
      numberOfGels: [2],   // Valor inicial: 2 geles
      textureIndex: [0.7], // Valor inicial: textura media
      carbsPerGel: [40]    // Valor inicial: 40g de carbohidratos por gel
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
