import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
export interface GelRecommendation {
  sport: string;
  duration: string;
  intensity: string;
  ideal_scenarios: string;
  recommended_ratios: string[];
}

export const gelData: GelRecommendation[] = [
  {
    sport: 'Ciclismo',
    duration: '< 1 h',
    intensity: 'Alta (explosiva)',
    ideal_scenarios: 'Contrarreloj, sprints cortos, series de alta intensidad.',
    recommended_ratios: ['8:1', '1:0']
  },
  {
    sport: 'Ciclismo',
    duration: '1.5-3 h',
    intensity: 'Mixta',
    ideal_scenarios: 'Fondo medio, competiciones con cambios de ritmo.',
    recommended_ratios: ['2:1', '1:1']
  },
  {
    sport: 'Ciclismo',
    duration: '> 3 h',
    intensity: 'Baja-moderada (sostenida)',
    ideal_scenarios: 'Fondos largos, entrenamiento base.',
    recommended_ratios: ['1:0:8', '1:2']
  },
  {
    sport: 'Running',
    duration: '< 10 km',
    intensity: 'Alta (explosiva)',
    ideal_scenarios: 'Carreras de 5K, intervalos rápidos en pista.',
    recommended_ratios: ['8:1', '1:0']
  },
  {
    sport: 'Running',
    duration: '10-20 km',
    intensity: 'Mixta',
    ideal_scenarios: 'Medias maratones, rodajes de intensidad media.',
    recommended_ratios: ['2:1', '1:1']
  },
  {
    sport: 'Running',
    duration: '> 20 km',
    intensity: 'Baja-moderada (sostenida)',
    ideal_scenarios: 'Maratones, rodajes largos con ritmos constantes.',
    recommended_ratios: ['1:0:8', '1:2']
  },
  {
    sport: 'Trail Running',
    duration: '< 15 km',
    intensity: 'Alta (explosiva)',
    ideal_scenarios: 'Kilómetro vertical, segmentos técnicos cortos y rápidos.',
    recommended_ratios: ['8:1', '1:0']
  },
  {
    sport: 'Trail Running',
    duration: '20-50 km',
    intensity: 'Mixta',
    ideal_scenarios: 'Maratones de montaña, trails técnicos con subidas y descensos frecuentes.',
    recommended_ratios: ['2:1', '1:1']
  },
  {
    sport: 'Trail Running',
    duration: '> 50 km',
    intensity: 'Baja-moderada (sostenida)',
    ideal_scenarios: 'Ultratrails (>8 h), etapas largas con ritmo constante.',
    recommended_ratios: ['1:0:8', '1:2']
  },
  {
    sport: 'Triatlón',
    duration: '< 1 h',
    intensity: 'Alta (explosiva)',
    ideal_scenarios: 'Salidas rápidas o primeros tramos de triatlón sprint u olímpico.',
    recommended_ratios: ['8:1', '1:0']
  },
  {
    sport: 'Triatlón',
    duration: '2-4 h',
    intensity: 'Mixta',
    ideal_scenarios: 'Segmentos de ciclismo y carrera en triatlones olímpicos o media distancia.',
    recommended_ratios: ['2:1', '1:1']
  },
  {
    sport: 'Triatlón',
    duration: '> 4 h',
    intensity: 'Baja-moderada (sostenida)',
    ideal_scenarios: 'Segmentos de carrera en triatlones de media y larga distancia (Half Ironman o Ironman).',
    recommended_ratios: ['1:0:8', '1:2']
  }
];

@Component({
  selector: 'app-gel-recommendations',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './gel-recommendations.component.html',
  styleUrl: './gel-recommendations.component.css'
})
export class GelRecommendationsComponent {
  filterForm: FormGroup;
  recommendedGels: GelRecommendation[] = [];

  // Los datos del modelo (pueden cargarse de un archivo o base de datos)
  sports = ['Ciclismo', 'Running', 'Trail Running', 'Triatlón'];
  durations = ['< 1 h', '1.5-3 h', '> 3 h', '10-20 km', '> 20 km'];
  intensities = ['Alta (explosiva)', 'Mixta', 'Baja-moderada (sostenida)'];

  constructor(private fb: FormBuilder) {
    // Crear formulario reactivo con validaciones
    this.filterForm = this.fb.group({
      sport: ['', Validators.required],
      duration: ['', Validators.required],
      intensity: ['', Validators.required]
    });

    // Suscribirse a los cambios del formulario
    this.filterForm.valueChanges.subscribe(() => {
      this.filterGels();
    });
  }

  // Filtrar los geles según los criterios seleccionados
  filterGels() {
    const { sport, duration, intensity } = this.filterForm.value;

    // Filtrar los geles basados en los filtros seleccionados
    this.recommendedGels = gelData.filter(gel => {
      return (
        (sport ? gel.sport === sport : true) &&
        (duration ? gel.duration === duration : true) &&
        (intensity ? gel.intensity === intensity : true)
      );
    });
  }
}
