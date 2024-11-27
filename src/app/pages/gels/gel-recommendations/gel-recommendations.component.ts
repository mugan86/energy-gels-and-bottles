import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GelRecommendation } from '@app/models/gel';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { DURATIONS, gelData, INTENSITIES, SPORTS } from '@app/shared/constants/recommendation';
import { SelectLabelFromKeyPipe } from '@app/shared/pipes/select-label-from-key.pipe';

@Component({
  selector: 'app-gel-recommendations',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent, SelectLabelFromKeyPipe],
  templateUrl: './gel-recommendations.component.html',
  styleUrl: './gel-recommendations.component.css'
})
export class GelRecommendationsComponent {
  filterForm: FormGroup;
  recommendedGels: GelRecommendation[] = [];

  // Los datos del modelo (pueden cargarse de un archivo o base de datos)
  sports = SPORTS;
  durations = DURATIONS;
  intensities = INTENSITIES;

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
    this.router.navigate(['/', proportion ]);
  }

  // Filtrar los geles según los criterios seleccionados
  filterGels() {
    const { sport, duration, intensity } = this.filterForm.value;
    console.log(this.filterForm.value)

    // Filtrar los geles basados en los filtros seleccionados
    this.recommendedGels = gelData.filter(gel => {
      return (
        (sport ? gel.sport === sport : true) &&
        (duration ? gel.duration === duration : true) &&
        (intensity ? gel.intensity === intensity : true)
      );
    }).map((value) => {
      return {
        ...value,
        filterAll: `${value.sport} - ${value.duration} - ${value.intensity}`
      }
    });
  }
}
