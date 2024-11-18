import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
// Tipos de bebida
selectedType: string | null = null;

// Datos de entrada
waterVolume: number = 0; // Hipotónica e Isotónica
carbConcentration: number = 0; // Hipotónica
maltodextrin: number = 0; // Isotónica
fructose: number = 0; // Isotónica
weight: number = 0; // Hipertónica

// Resultados
results: string | null = null;

// Información de cada bebida
beverageInfo: { [key: string]: string } = {
  hypotonic: 'Bebida para hidratación rápida. Concentración de carbohidratos 2-4%.',
  isotonic: 'Bebida para entrenamientos de media duración. Concentración de carbohidratos 6-8%.',
  hypertonic: 'Bebida para recuperación post-entrenamiento. Alta concentración de carbohidratos (>10%).',
};

// Calcular resultados
calculate() {
  switch (this.selectedType) {
    case 'hypotonic':
      const carbs = (this.waterVolume * this.carbConcentration) / 100;
      const salt = (this.waterVolume * 1) / 500;
      this.results = `Carbohidratos necesarios: ${carbs.toFixed(2)} g. Sal necesaria: ${salt.toFixed(2)} g.`;
      break;
    case 'isotonic':
      const carbPercentage =
        ((this.maltodextrin * 0.95 + this.fructose) / this.waterVolume) * 100;
      this.results = `Concentración de carbohidratos: ${carbPercentage.toFixed(
        2
      )}%.`;
      break;
    case 'hypertonic':
      const carbHypertonic = this.weight * 0.95;
      const protein = this.weight / 5;
      this.results = `Carbohidratos efectivos: ${carbHypertonic.toFixed(
        2
      )} g. Proteína recomendada: ${protein.toFixed(2)} g.`;
      break;
  }
}
}


