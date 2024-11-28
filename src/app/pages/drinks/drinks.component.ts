import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import {
  HypertonicDrinkInput,
  HypertonicDrinkOutput,
} from '../../models/drink/hypertonic';
import { calculateFlavor, getCarbohydrateMessage } from '../../shared/helpers/drinks';
import { CommonModule } from '@angular/common';
import { DRINK_INGREDIENTS_PRICES, drinkChoiceHTML, SWEETNESS_INDEX } from '../../shared/constants';
import { OPTIONS_VALUES_TEXTS } from '../gels/principal/config';
import { calculateIngredientCost } from '@app/shared/helpers';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css',
})
export class DrinksComponent implements OnInit {
  formGroup!: FormGroup;
  private formBuilder = inject(FormBuilder);

  // Tipos de bebida
  selectedType: string = 'hypotonic';
  concentrationDefault = {
    hypotonic: 3,
    isotonic: 7,
    hypertonic: 12.5,
  };

  valuesText = OPTIONS_VALUES_TEXTS;

  // Datos de entrada
  waterVolume: number = 500; // Hipotónica e Isotónica
  carbConcentration: number = this.concentrationDefault['hypotonic']; // Hipotónica
  carbConcentrationMessage: string = getCarbohydrateMessage(
    this.carbConcentration
  );
  flavour = 0;
  sweetness: number = 0.5; // Isotónica
  sweetnessText: string = this.selectSweetness();
  weight: number = 70; // Hipertónica

  // Resultados
  results: string | null = null;

  // Información de cada bebida
  beverageInfo: { [key: string]: string } = {
    hypotonic:
      'Bebida para hidratación rápida. Concentración de carbohidratos 2-4%.',
    isotonic:
      'Bebida para entrenamientos de media duración. Concentración de carbohidratos 6-8%.',
    hypertonic:
      'Bebida para recuperación post-entrenamiento. Alta concentración de carbohidratos (>10%).',
  };

  howElection = drinkChoiceHTML;

  activeIndex: number | null = null;

  // Función para abrir o cerrar el accordion
  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  ngOnInit() {
    /*this.formGroup = this.formBuilder.group({
      type: 'hypotonic', // Valor inicial: 2 geles
      textureIndex: 0.7, // Valor inicial: textura media
      carbsPerGel: 52.7, // Valor inicial: 40g de carbohidratos por gel,
      sweetnessIndex: 0.5, // Ni poco dulce ni mucho entre 0 y 1,
      caffeine: false,
      energyGel: false,
    });*/
    this.calculate();
  }

  private selectSweetness() {
    return SWEETNESS_INDEX[
      SWEETNESS_INDEX.findIndex((data) => data.index === this.sweetness)
    ].description;
  }

  updateWeetneess() {
    this.sweetnessText = this.selectSweetness();
  }

  updateLayout(typeDrink: string, waterChange: boolean = false) {
    if (!waterChange) {
      this.carbConcentration = (this.concentrationDefault as any)[typeDrink];
    }
    this.selectedType = typeDrink;
    this.calculate();
  }

  updateCarboHidrateConcentration() {
    this.carbConcentrationMessage = getCarbohydrateMessage(
      this.carbConcentration
    );
    this.calculate();
  }

  // Calcular resultados
  calculate() {
    const flavourGr = calculateFlavor(this.waterVolume, this.selectedType as any,  Math.floor(Math.random() * 5) + 1)
    switch (this.selectedType) {
      case 'hypotonic':
        const carbs = (this.waterVolume * this.carbConcentration) / 100;
        const maltodextrin = (carbs * 100) / 95;
        // 95gr ch ----- 100 gr
        // carbs ch ----- x gr
        const salt = Math.max(1, (this.waterVolume / 500) * 1);
        /*this.results = `Carbohidratos que contiene: ${carbs.toFixed(
          2
        )} g. / Maltodextrina: ${maltodextrin.toFixed(2)}g. / Sal necesaria: ${
          salt < 1 ? 1 : salt.toFixed(2)
        } g.`;*/
        const selectIngredientMalto = (DRINK_INGREDIENTS_PRICES as any)['maltodextrin'];
        const costIngredientMalto = calculateIngredientCost(
          selectIngredientMalto.weight,
          selectIngredientMalto.unit,
          selectIngredientMalto.price,
          maltodextrin,
          'gr'
        );
        const selectIngredientSalt = (DRINK_INGREDIENTS_PRICES as any)['salt'];

        const costSalt = calculateIngredientCost(
          selectIngredientSalt.weight,
          selectIngredientSalt.unit,
          selectIngredientSalt.price,
          salt,
          'gr'
        );
        const selectFlavour = (DRINK_INGREDIENTS_PRICES as any)['flavoring'];
        const costFlavour = calculateIngredientCost(
          selectFlavour.weight,
          selectFlavour.unit,
          selectIngredientSalt.price,
          flavourGr,
          'gr'
        );
        console.log('MALto', costIngredientMalto, 'SALT', costSalt, 'Flavour', costFlavour)
        console.log('COST', costIngredientMalto + costSalt + costFlavour, '€')
        this.results = `
        <ul>
        <li>Carbohidratos: ${carbs.toFixed(2)}.gr</li>
        <li>Agua: ${this.waterVolume} ml.</li>
        <li>Maltodextrina: ${maltodextrin.toFixed(
          2
        )} gr.<li>Sal: ${salt.toFixed(2)} gr.</li>
        </ul>`;
        break;
      case 'isotonic':
        const { maltodextrin: malto, fructose } = this.getIsotonic(
          this.waterVolume,
          this.carbConcentration,
          this.sweetness
        );

        this.results = `Ingredientes a añadir en la bebida: Maltodextrina ${malto}gr. / Fructosa: ${fructose} gr. / Agua ${this.waterVolume}`;
        break;
      case 'hypertonic':
        const {
          maltodextrin: maltos,
          protein: pro,
          salt: sa,
          effectiveCarbs,
          waterVolume,
        } = this.calculateHypertonicDrink({
          carbConcentration: this.carbConcentration,
          weight: this.weight,
        });

        this.results = `
        <ul>
        <li>Carbohidratos: ${effectiveCarbs.toFixed(2)}.gr</li>
        <li>Agua: ${waterVolume} ml.</li>
        <li>Maltodextrina: ${maltos.toFixed(
          2
        )} gr.</li><li>Proteína: ${pro.toFixed(
          2
        )} gr.</li><li>Sal: ${sa.toFixed(2)} gr.</li>
        </ul>`;
        break;
    }
    
  }

  private getIsotonic(
    waterVolume: number, // en ml
    carbosConcentration: number, // en %
    sweetness: number // entre 0 (mínimo dulzor) y 1 (máximo dulzor)) {
    // Función para calcular maltodextrina y fructosa
  ): { maltodextrin: number; fructose: number } {
    // Validación de entradas
    if (sweetness < 0 || sweetness > 1) {
      throw new Error('El nivel de dulzor debe estar entre 0 y 1.');
    }
    if (carbosConcentration < 6 || carbosConcentration > 8) {
      throw new Error(
        'La concentración de carbohidratos debe estar entre 6% y 8%.'
      );
    }

    // Paso 1: Calcular los carbohidratos totales
    const carbohidratosTotales = (carbosConcentration * waterVolume) / 100;

    // Paso 2: Ajustar las proporciones según el dulzor
    const proporcionMaltodextrina = 0.66 - 0.16 * sweetness; // 66% base ajustado por dulzor
    const proporcionFructosa = 0.34 + 0.16 * sweetness; // 34% base ajustado por dulzor

    // Paso 3: Calcular carbohidratos por fuente
    const carbohidratosMaltodextrina =
      carbohidratosTotales * proporcionMaltodextrina;
    const carbohidratosFructosa = carbohidratosTotales * proporcionFructosa;

    // Paso 4: Convertir maltodextrina a gramos totales (considerando que 95g = 100g)
    const maltodextrina = carbohidratosMaltodextrina / 0.95;

    // Resultado
    return {
      maltodextrin: parseFloat(maltodextrina.toFixed(2)), // Redondear a 2 decimales
      fructose: parseFloat(carbohidratosFructosa.toFixed(2)), // Redondear a 2 decimales
    };
  }

  private calculateHypertonicDrink(
    input: HypertonicDrinkInput
  ): HypertonicDrinkOutput {
    const { weight, carbConcentration } = input;

    // Validaciones básicas
    if (carbConcentration < 10 || carbConcentration > 15) {
      throw new Error(
        'La concentración de carbohidratos debe estar entre 10% y 15%.'
      );
    }

    // Carbohidratos efectivos (70g de maltodextrina proporcionan 66.5g de carbohidratos efectivos para un peso de 70kg)
    const effectiveCarbs = weight * (95 / 100);

    // Volumen de agua necesario
    const waterVolume = (effectiveCarbs * 100) / carbConcentration;

    // Cantidad de maltodextrina necesaria (95% de carbohidratos efectivos por 100g)
    const maltodextrin = effectiveCarbs / 0.95;

    // Cantidad de proteína necesaria (1/5 de la maltodextrina)
    const protein = maltodextrin / 5;

    // Cantidad de sal necesaria (mínimo de 1g por 500ml de agua)
    const salt = Math.max(1, (waterVolume / 500) * 1);

    return {
      effectiveCarbs,
      waterVolume: parseFloat(waterVolume.toFixed(2)),
      maltodextrin: parseFloat(maltodextrin.toFixed(2)),
      protein: parseFloat(protein.toFixed(2)),
      salt: parseFloat(salt.toFixed(2)),
    };
  }
}
