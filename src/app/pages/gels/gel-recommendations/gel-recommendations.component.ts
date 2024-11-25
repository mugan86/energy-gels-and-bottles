import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '@app/shared/components/button/button.component';
export interface GelRecommendation {
  sport: string;
  duration: string;
  intensity: string;
  ideal_scenarios: string;
  recommended_ratios: {key: string, description: string, value: string}[];
}

export const gelData: GelRecommendation[] = [
  {
    sport: 'Ciclismo',
    duration: '< 1 h',
    intensity: 'Alta (explosiva)',
    ideal_scenarios: 'Contrarreloj, sprints cortos, series de alta intensidad.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '8:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:0' }
    ]
  },
  {
    sport: 'Ciclismo',
    duration: '1.5-3 h',
    intensity: 'Mixta',
    ideal_scenarios: 'Fondo medio, competiciones con cambios de ritmo.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '2:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' }
    ]
  },
  {
    sport: 'Ciclismo',
    duration: '> 3 h',
    intensity: 'Baja-moderada (sostenida)',
    ideal_scenarios: 'Fondos largos, entrenamiento base.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '1:0:8' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' }
    ]
  },
  {
    sport: 'Ciclismo',
    duration: '1-1.5 h',
    intensity: 'Mixta',
    ideal_scenarios: 'Entrenamientos intermedios o competencias cortas con variación de ritmo.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '2:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' }
    ]
  },
  {
    sport: 'Running',
    duration: '< 10 km',
    intensity: 'Alta (explosiva)',
    ideal_scenarios: 'Carreras de 5K, intervalos rápidos en pista.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '8:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:0' }
    ]
  },
  {
    sport: 'Running',
    duration: '10-20 km',
    intensity: 'Mixta',
    ideal_scenarios: 'Medias maratones, rodajes de intensidad media.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '2:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' }
    ]
  },
  {
    sport: 'Running',
    duration: '> 20 km',
    intensity: 'Baja-moderada (sostenida)',
    ideal_scenarios: 'Maratones, rodajes largos con ritmos constantes.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '1:0:8' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' }
    ]
  },
  {
    sport: 'Trail Running',
    duration: '< 15 km',
    intensity: 'Alta (explosiva)',
    ideal_scenarios: 'Kilómetro vertical, segmentos técnicos cortos y rápidos.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '8:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:0' }
    ]
  },
  {
    sport: 'Trail Running',
    duration: '20-50 km',
    intensity: 'Mixta',
    ideal_scenarios: 'Maratones de montaña, trails técnicos con subidas y descensos frecuentes.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '2:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' }
    ]
  },
  {
    sport: 'Trail Running',
    duration: '> 50 km',
    intensity: 'Baja-moderada (sostenida)',
    ideal_scenarios: 'Ultratrails (>8 h), etapas largas con ritmo constante.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '1:0:8' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' }
    ]
  },
  {
    sport: 'Triatlón',
    duration: '< 1 h',
    intensity: 'Alta (explosiva)',
    ideal_scenarios: 'Salidas rápidas o primeros tramos de triatlón sprint u olímpico.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '8:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:0' }
    ]
  },
  {
    sport: 'Triatlón',
    duration: '2-4 h',
    intensity: 'Mixta',
    ideal_scenarios: 'Segmentos de ciclismo y carrera en triatlones olímpicos o media distancia.',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '2:1' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' }
    ]
  },
  {
    sport: 'Triatlón',
    duration: '> 4 h',
    intensity: 'Baja-moderada (sostenida)',
    ideal_scenarios: 'Segmentos de carrera en triatlones de larga distancia (Half Ironman o Ironman).',
    recommended_ratios: [
      { key: 'carb_to_protein', description: 'Carbohidratos:Proteínas', value: '1:0:8' },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' }
    ]
  }
];


@Component({
  selector: 'app-gel-recommendations',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './gel-recommendations.component.html',
  styleUrl: './gel-recommendations.component.css'
})
export class GelRecommendationsComponent {
  filterForm: FormGroup;
  recommendedGels: GelRecommendation[] = [];

  // Los datos del modelo (pueden cargarse de un archivo o base de datos)
  sports = ['Ciclismo', 'Running', 'Trail Running', 'Triatlón'];
  durations: string[] = ['< 1 h', '1-1.5 h', '1.5-3 h', '2-4 h', '> 3 h', '> 4 h', '< 10 km', '10-20 km', '> 20 km', '> 50 km'];
  intensities = ['Alta (explosiva)', 'Mixta', 'Baja-moderada (sostenida)'];

  constructor(private fb: FormBuilder, private router: Router) {
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

  select(proportion: number | string) {
    console.log(proportion);
    this.router.navigate(['/', proportion ]);
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
