import { Units } from "../types/units";


// Función para convertir el peso a gramos para facilitar el cálculo
function convertToGrams(amount: number, unit: Units): number {
  if (unit === "kgr") {
    return amount * 1000; // Convertir kilogramos a gramos
  }
  return amount; // Si ya está en gramos, devolvemos el valor original
}

// Función para calcular el coste de una porción específica
export function calculateIngredientCost(
  totalWeight: number,
  totalWeightUnit: Units,
  totalPrice: number,
  portionWeight: number,
  portionWeightUnit: Units
): number {
  // Convertimos los pesos a gramos para que estén en la misma unidad
  const totalWeightInGrams = totalWeightUnit === "kgr" ? convertToGrams(totalWeight, totalWeightUnit): totalWeight;
  const portionWeightInGrams = totalWeightUnit === "kgr" ? convertToGrams(portionWeight, portionWeightUnit): portionWeight;

  // Calculamos el coste usando la regla de tres
  const portionCost = (portionWeightInGrams * totalPrice) / totalWeightInGrams;

  return parseFloat(portionCost.toFixed(5)); // Redondeamos a 2 decimales para un resultado en euros
}
