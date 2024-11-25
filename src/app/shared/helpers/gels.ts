import {
  EVOLYTES_COMPOSITION_IN_MG,
  INGREDIENTS_PER_ONE_HUNDRED_GR,
} from '../constant';
import { getGelTypes } from '../constants';

const getNutritionalValues = (
  maltodextrin: number,
  fructose: number,
  flavoring: number
) => {
  const {
    maltodextrinCarbs,
    fructoseCarbs,
    flavoringCarbs,
  } = INGREDIENTS_PER_ONE_HUNDRED_GR;

  const totalCarbs =
    (maltodextrin * maltodextrinCarbs) / 100 +
    (fructose * fructoseCarbs) / 100 +
    (flavoring * flavoringCarbs) / 100;
  const totalSugars =
    (maltodextrin * 0.07 * maltodextrinCarbs) / 100 + fructose; // Sumar azúcares
  const calories = totalCarbs * 4; // 4 kcal por gramo de carbohidrato

  return {
    totalCarbs,
    totalSugars,
    calories,
  };
};

/**
 * Toda la info en guides\electrolytes.md
 * @param carbsPerGel
 * @returns
 */
const getElectrolytes = (carbsPerGel: number) => {
  // Composición de Evolytes (por cada 2.5g de Evolytes)
  const {
    sodiumPerServing,
    potassiumPerServing,
    magnesiumPerServing,
    chloridePerServing,
    calciumPerServing,
  } = EVOLYTES_COMPOSITION_IN_MG;

  // Ajuste a cualquier cantidad de carbohidratos, basándonos en 2.5gr evolytes usados con 30gr de CH:
  const servingsOfEvolytes = (carbsPerGel / 30) * 2.5;
  return {
    evolytesPerGel: servingsOfEvolytes,
    sodium: ((sodiumPerServing * servingsOfEvolytes) / 2.5).toFixed(2),
    potassium: ((potassiumPerServing * servingsOfEvolytes) / 2.5).toFixed(2),
    magnesium: ((magnesiumPerServing * servingsOfEvolytes) / 2.5).toFixed(2),
    chloride: ((chloridePerServing * servingsOfEvolytes) / 2.5).toFixed(2),
    calcium: ((calciumPerServing * servingsOfEvolytes) / 2.5).toFixed(2),
  };
};

export function calculateCustomGelIngredients(
  carbsPerGel: number,
  textureIndex: number,
  sweetnessIndex: number,
  caffeine: number,
  energyGel: number
) {
  // Valores de ingredientes por 100g
  const { maltodextrinCarbs, fructoseCarbs } = INGREDIENTS_PER_ONE_HUNDRED_GR;

  // Ajuste de proporciones para alcanzar los 30 g de maltodextrina y 24 g de fructosa en carbohidratos con dulzor variable
  const baseMaltodextrinCarbs = 30;
  const baseFructoseCarbs = 24;

  // Ajuste de dulzor: varía entre menos dulce (más maltodextrina) y más dulce (más fructosa)
  const adjustedMaltodextrinRatio = baseMaltodextrinCarbs - 3 * sweetnessIndex; // 30g base, ajustado hasta 27g
  const adjustedFructoseRatio = baseFructoseCarbs + 3 * sweetnessIndex; // 24g base, ajustado hasta 27g

  // Normalizar para mantener el total deseado de carbohidratos
  const maltodextrinCarbsNeeded =
    (adjustedMaltodextrinRatio /
      (adjustedMaltodextrinRatio + adjustedFructoseRatio)) *
    carbsPerGel;
  const fructoseCarbsNeeded = carbsPerGel - maltodextrinCarbsNeeded;

  // Convertir los carbohidratos necesarios en gramos de ingrediente
  const maltodextrin = (maltodextrinCarbsNeeded / maltodextrinCarbs) * 100;
  const fructose = (fructoseCarbsNeeded / fructoseCarbs) * 100;
  const flavoring = 3; // Cantidad fija de saborizante (g) para un gel

  // Información de Evolytes
  const { evolytesPerGel, ...nutritional } = getElectrolytes(carbsPerGel);

  // Calcular el peso total de los ingredientes
  const totalIngredientsWeight =
    maltodextrin + fructose + flavoring + evolytesPerGel;
  let water = 110 - totalIngredientsWeight; // Ajustar para llegar a 110 g de peso total

  // Ajuste de agua basado en el índice de textura
  const textureAdjustment = (textureIndex * 0.4 - 0.2) * 100; // Entre -20g y +20g
  water += textureAdjustment;

  // Verificar si la cantidad de agua es válida
  if (water < 0) {
    throw new Error(
      'El peso total de los ingredientes excede los 100 gramos. Ajusta el contenido de carbohidratos.'
    );
  }

  // Dividir el agua entre 2.5 para mejorar la consistencia
  water = water / 2.5;

  // Valores nutricionales
  const { totalSugars, calories } = getNutritionalValues(
    maltodextrin,
    fructose,
    flavoring
  );

  // Resultados
  return {
    totalGelWeight: (
      maltodextrin +
      fructose +
      flavoring +
      evolytesPerGel +
      water
    ).toFixed(2),
    ingredients: {
      maltodextrin: maltodextrin.toFixed(2),
      fructose: fructose.toFixed(2),
      flavoring: flavoring.toFixed(2),
      evolytes: evolytesPerGel.toFixed(2),
      water: water.toFixed(2),
      caffeine: Number(caffeine),
      energyGel: Number(energyGel),
    },
    nutritionalValues: {
      totalCarbs: carbsPerGel.toFixed(2),
      totalSugars: totalSugars.toFixed(2),
      calories: calories.toFixed(2),
      // Calcular los valores de electrolitos basado en la cantidad de Evolytes utilizada
      ...nutritional,
    },
  };
}

export function calculateSelectProportionGelIngredients(
  carbsPerGel: number,
  idProporcion: string,
  texturaIndex: number,
  caffeine: number,
  energyGel: number
) {
  // Verificar índice de textura válido
  if (texturaIndex < 0.5 || texturaIndex > 0.9) {
    throw new Error('El índice de textura debe estar entre 0.5 y 0.9');
  }

  // Buscar proporción seleccionada por ID
  const gelTypeSelect = getGelTypes().find((p) => p.id === idProporcion);

  if (!gelTypeSelect) {
    throw new Error('Proporción no válida');
  }

  const { malto, fructosa } = gelTypeSelect;
  const totalPartes = malto + fructosa;

  // Definir los porcentajes de carbohidratos de maltodextrina y fructosa
  const maltodextrinCarbs = 0.95; // 95% de carbohidratos en maltodextrina
  const fructoseCarbs = 1.0; // 100% de carbohidratos en fructosa

  // Calcular los carbohidratos por tipo de ingrediente
  const carbohidratosMalto = (carbsPerGel * malto) / totalPartes;
  const carbohidratosFructosa = (carbsPerGel * fructosa) / totalPartes;

  // Calcular los gramos de maltodextrina y fructosa
  const maltoGramos = carbohidratosMalto / maltodextrinCarbs;
  const fructosaGramos = carbohidratosFructosa / fructoseCarbs;

  // Calcular agua ajustada según el índice de textura
  const aguaPorCarbohidrato = 1.67; // Base: ~50 ml de agua por cada 30 g de carbohidratos
  const aguaTotal = carbsPerGel * (aguaPorCarbohidrato / 30) * texturaIndex;

  // Obtener los electrolitos desde la función getElectrolytes
  const { evolytesPerGel, ...nutritional } = getElectrolytes(carbsPerGel);

  // Valores de saborizantes (fijos por cada gel)
  const flavoring = 3;

  // Calcular valores nutricionales como azúcares y calorías
  const { totalSugars, calories } = getNutritionalValues(malto, fructosa, 3);

  // Retornar la información completa del gel
  return {
    totalGelWeight: (
      maltoGramos +
      fructosaGramos +
      flavoring +
      evolytesPerGel +
      aguaTotal
    ).toFixed(2),
    ingredients: {
      maltodextrin: maltoGramos.toFixed(2),
      fructose: fructosaGramos.toFixed(2),
      flavoring: flavoring.toFixed(2),
      evolytes: evolytesPerGel.toFixed(2),
      water: aguaTotal.toFixed(2),
      caffeine: Number(caffeine),
      energyGel: Number(energyGel),
    },
    nutritionalValues: {
      totalCarbs: carbsPerGel.toFixed(2),
      totalSugars: totalSugars.toFixed(2),
      calories: calories.toFixed(2),
      ...nutritional,
    },
  };
}
