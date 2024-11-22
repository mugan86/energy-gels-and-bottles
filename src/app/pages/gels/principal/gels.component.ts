import { Component, isDevMode } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from '../../../shared/components/accordion/accordion.module';
import { GelItemComponent } from '../../../shared/components/item/gel-item/gel-item.component';
import {
  GEL_INFO_ACCORDION_OPTIONS,
  GEL_INGREDIENTS_PRICES,
  getGelTypes,
  SLIDER_GELS_OPTIONS,
  START_COST_GEL,
  SWEETNESS_INDEX,
  TEXTURE_INDEX,
} from '../../../shared/constants';
import {
  calculateCustomGelIngredients,
  calculateSelectProportionGelIngredients,
  calculateIngredientCost,
} from '../../../shared/helpers';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { ButtonToggleGroupComponent } from '../../../shared/components/button-toggle-group/button-toggle-group.component';

@Component({
  selector: 'app-gels',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AccordionModule,
    GelItemComponent,
    CommonModule,
    AlertComponent,
    ButtonToggleGroupComponent
  ],
  templateUrl: './gels.component.html',
  styleUrl: './gels.component.css',
})
export class GelsComponent {
  title = 'geles';
  gelForm: FormGroup;
  result: any;
  numberOfGels = 1;
  isPremium = localStorage.getItem('premium') === 'OK';
  costByGel = START_COST_GEL;
  gelsTypes = getGelTypes(this.isPremium);
  selectedType: string = this.gelsTypes[0].id;
  sweetnessRangeShow = true;

  valuesText = {
    sweetnessIndex:
      SWEETNESS_INDEX[SWEETNESS_INDEX.findIndex((data) => data.index === 0.5)]
        .description,
    textureIndex:
      TEXTURE_INDEX[TEXTURE_INDEX.findIndex((data) => data.index === 0.7)]
        .description,
  };

  accordionOptions = GEL_INFO_ACCORDION_OPTIONS.map((item) => {
    return {
      question: item.title,
      answer: item.description,
    };
  });

  slideGelsOptions = SLIDER_GELS_OPTIONS;

  constructor(private formBuilder: FormBuilder) {
    // Crear el formulario reactivo con valores iniciales
    this.gelForm = this.formBuilder.group({
      numberOfGels: [2], // Valor inicial: 2 geles
      textureIndex: [0.7], // Valor inicial: textura media
      carbsPerGel: [52.7], // Valor inicial: 40g de carbohidratos por gel,
      sweetnessIndex: 0.5, // Ni poco dulce ni mucho entre 0 y 1,
      caffeine: false,
      energyGel: false,
    });

    // Escuchar los cambios en el formulario
    this.gelForm.valueChanges.subscribe(
      ({ sweetnessIndex, textureIndex }: any) => {
        this.valuesText.sweetnessIndex =
          SWEETNESS_INDEX[
            SWEETNESS_INDEX.findIndex((data) => data.index === sweetnessIndex)
          ].description;
        this.valuesText.textureIndex =
          TEXTURE_INDEX[
            TEXTURE_INDEX.findIndex((data) => data.index === textureIndex)
          ].description;
        this.calculateIngredients();
      }
    );

    // Calcular los ingredientes inicialmente
    this.calculateIngredients();
  }

  getTextValue = (id: string) => (this.valuesText as any)[id];

  updateLayout = (selectedType: string | number) => {
    console.log(selectedType);
    this.selectedType = selectedType as string;
    this.sweetnessRangeShow = (selectedType === 'custom');
    this.calculateIngredients();
  };

  update($event: string | number, property: string) {
    this.gelForm.get(property)!.setValue($event);
  }

  private setGelCost = () => {
    Object.keys(this.result.ingredients).forEach((value) => {
      console.log(this.result.ingredients[value]);
      const selectIngredient = (GEL_INGREDIENTS_PRICES as any)[value];
      console.log(selectIngredient, value);
      const costIngredient = calculateIngredientCost(
        selectIngredient.weight,
        selectIngredient.unit,
        selectIngredient.price,
        this.result.ingredients[value],
        value === 'caffeine' || value === 'energyGel' ? 'unit' : 'gr'
      );
      (this.costByGel as any)[value] = costIngredient;
      (this.costByGel as any)['total'] += costIngredient;
    });
    console.log(
      'Coste Total del Gel',
      (this.costByGel as any)['total'].toFixed(4),
      `€`
    );
  }

  // Función para calcular los ingredientes basado en el formulario
  calculateIngredients(): void {
    (this.costByGel as any)['total'] = 0;
    const {
      numberOfGels,
      textureIndex,
      carbsPerGel,
      sweetnessIndex,
      caffeine,
      energyGel,
    } = this.gelForm.value;
    isDevMode() && console.log(this.gelForm.value);
    this.numberOfGels = numberOfGels;
    try {
      if (this.selectedType === 'custom') {
        this.result = calculateCustomGelIngredients(
          carbsPerGel,
          textureIndex,
          sweetnessIndex,
          caffeine,
          energyGel
        );
        this.setGelCost();
        console.log(this.costByGel);
        return;
      }

      this.result = calculateSelectProportionGelIngredients(
        carbsPerGel,
        this.selectedType,
        textureIndex,
        caffeine,
        energyGel
      );
      this.setGelCost();
    } catch (error) {
      console.error(error);
      this.result = null;
    }
  }
}
