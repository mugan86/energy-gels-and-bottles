import { CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS } from "../constants";

export function getCarbohydrateMessage(
    concentration: number
  ): string {
    // Redondear hacia abajo al entero más cercano
    const roundedConcentration = Math.round(concentration);
  
    // Buscar el mensaje basado en la concentración redondeada
    if (roundedConcentration >= 2 && roundedConcentration <= 4) {
      return (CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS.hypotonic as any)[roundedConcentration] || "Concentración fuera del rango definido para hipotónicas.";
    }
    
    if (roundedConcentration >= 6 && roundedConcentration <= 8) {
      return (CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS.isotonic as any)[roundedConcentration] || "Concentración fuera del rango definido para isotónicas.";
    }
    
    if (roundedConcentration >= 10 && roundedConcentration <= 15) {
      return (CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS.hypertonic as any)[roundedConcentration] || "Concentración fuera del rango definido para hipertónicas.";
    }
  
    return "Concentración fuera de los rangos establecidos.";
  }