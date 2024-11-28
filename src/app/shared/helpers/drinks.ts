import { CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS } from '../constants';

export function getCarbohydrateMessage(concentration: number): string {
  // Redondear hacia abajo al entero más cercano
  const roundedConcentration = Math.round(concentration);

  // Buscar el mensaje basado en la concentración redondeada
  if (roundedConcentration >= 2 && roundedConcentration <= 4) {
    return (
      (CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS.hypotonic as any)[
        roundedConcentration
      ] || 'Concentración fuera del rango definido para hipotónicas.'
    );
  }

  if (roundedConcentration >= 6 && roundedConcentration <= 8) {
    return (
      (CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS.isotonic as any)[
        roundedConcentration
      ] || 'Concentración fuera del rango definido para isotónicas.'
    );
  }

  if (roundedConcentration >= 10 && roundedConcentration <= 15) {
    return (
      (CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS.hypertonic as any)[
        roundedConcentration
      ] || 'Concentración fuera del rango definido para hipertónicas.'
    );
  }

  return 'Concentración fuera de los rangos establecidos.';
}

const getFlavourProportionsFromSelectDrinkType = (type: 'isotonic' | 'hypotonic' | 'hypertonic') => {
  const flavorProportions = {
    isotonic: 0.006,
    hypotonic: 0.003,
    hypertonic: 0.01,
  };
  
  
  // Acceder a la proporción de sabor mediante el tipo de bebida
  const flavorPerMl = flavorProportions[type];
  
  if (flavorPerMl === undefined) {
    throw new Error('Tipo de bebida no reconocido');
  }
  
  return flavorPerMl; // 0.006 para isotonic
}

/**
 * Obtiene el factor de ajuste de sabor según el nivel de sabor deseado.
 * 
 * @param {number} [flavorLevel=3] - El nivel de sabor deseado, un valor entre 0 y 5. 
 *                                   Si no se proporciona, el valor por defecto es 3 (Sabor normal).
 *    - 0: Poco sabor.
 *    - 1: Poco sabor.
 *    - 2: Algo de sabor.
 *    - 3: Sabor normal.
 *    - 4: Un poco más de sabor.
 *    - 5: Sabor intenso.
 * @returns {number} El factor de ajuste de sabor correspondiente al nivel de sabor especificado.
 * 
 * @throws {Error} Si el nivel de sabor proporcionado no está dentro del rango permitido (0-5).
 */
const getFlavourAdjustment = (flavorLevel = 3) => {
  const flavorAdjustmentFactors: any = {
    0: 0,       // Poco sabor
    1: 0.5,     // Poco sabor
    2: 0.75,    // Algo de sabor
    3: 1,       // Sabor normal
    4: 1.25,    // Un poco más de sabor
    5: 1.5,     // Sabor intenso
  };
  
  
  // Acceder al factor de ajuste según el nivel de sabor
  const adjustmentFactor = flavorAdjustmentFactors[flavorLevel];
  
  if (adjustmentFactor === undefined) {
    throw new Error('Select without flavour');
  } 
  return adjustmentFactor;
}


/**
 * Calcula la cantidad de saborizante necesario para una bebida en función del volumen, tipo de bebida y nivel de sabor deseado.
 * 
 * @param {number} volume - El volumen de la bebida en mililitros (ml).
 * @param {'isotonic' | 'hypotonic' | 'hypertonic'} type - El tipo de bebida: 'isotonic', 'hypotonic' o 'hypertonic'.
 * @param {number} flavorLevel - El nivel de sabor deseado, un valor entre 0 y 5. Donde:
 *    - 0: Poco sabor.
 *    - 1: Algo de sabor.
 *    - 2: Sabor normal.
 *    - 3: Un poco más de sabor.
 *    - 4: Sabor intenso.
 * @returns {number} La cantidad de saborizante en gramos que se debe agregar a la bebida.
 * 
 * @throws {Error} Si el tipo de bebida no es reconocido o si el nivel de sabor está fuera del rango 0-5.
 */
export function calculateFlavor(volume: number, type: 'isotonic' | 'hypotonic' | 'hypertonic', flavorLevel: number): number {
  // Definimos las proporciones base de saborizante por tipo de bebida (en gramos por ml)
  const flavorPerMl = getFlavourProportionsFromSelectDrinkType(type);

  // Ajustamos la cantidad de saborizante según el nivel de sabor deseado
  const adjustmentFactor = getFlavourAdjustment(flavorLevel);

  // Calculamos la cantidad de saborizante final
  return volume * flavorPerMl * adjustmentFactor;
}