export interface HypertonicDrinkInput {
  weight: number; // Peso corporal en kg
  carbConcentration: number; // Concentración de carbohidratos en %
}

export interface HypertonicDrinkOutput {
  effectiveCarbs: number;
  waterVolume: number; // Volumen de agua necesario en ml
  maltodextrin: number; // Cantidad de maltodextrina en gramos
  protein: number; // Cantidad de proteína en gramos
  salt: number; // Cantidad de sal en gramos
}
