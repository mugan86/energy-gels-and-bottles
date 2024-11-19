// Valores de ingredientes por 100g
export const INGREDIENTS_PER_ONE_HUNDRED_GR = {
  maltodextrinCarbs: 95, // Carbohidratos en g por 100g de maltodextrina
  fructoseCarbs: 100, // Carbohidratos en g por 100g de fructosa
  flavoringCarbs: 6.6, // Carbohidratos en g por 100g de saborizante
};

// Composición de Evolytes (por cada 2.5g de Evolytes)
export const EVOLYTES_COMPOSITION_IN_MG = {
  sodiumPerServing: 355.7, // mg de sodio
  potassiumPerServing: 100, // mg de potasio
  magnesiumPerServing: 62, // mg de magnesio
  chloridePerServing: 903.8, // mg de cloruro
  calciumPerServing: 120, // mg de calcio
};

// Proporciones de carbohidratos
export const CARBS_PROPORTIONS = {
  maltodextrinRatio: 0.556, // 55.6% de carbohidratos de maltodextrina
  fructoseRatio: 0.444, // 44.4% de carbohidratos de fructosa
};



export const TEXTURE_INDEX = [
  {
    index: 0.0,
    name: 'Solid',
    description: 'Totalmente sólido, no fluido en absoluto',
  },
  {
    index: 0.1,
    name: 'Very thick',
    description: 'Muy espeso, casi como una pasta',
  },
  {
    index: 0.2,
    name: 'Thick',
    description: 'Espeso, con una consistencia densa',
  },
  {
    index: 0.3,
    name: 'Moderately thick',
    description: 'Consistencia espesa, pero aún algo fluida',
  },
  {
    index: 0.4,
    name: 'Slightly thick',
    description: 'Un poco espeso, pero no muy denso',
  },
  {
    index: 0.5,
    name: 'Dense',
    description: 'Consistencia densa, difícil de mover, pero no sólida',
  },
  {
    index: 0.6,
    name: 'Slightly liquid',
    description: 'Ligeramente líquido, pero aún tiene algo de cuerpo',
  },
  {
    index: 0.7,
    name: 'Fluid',
    description: 'Bastante fluido, fácil de verter',
  },
  {
    index: 0.8,
    name: 'Very fluid',
    description: 'Muy fluido, se mueve fácilmente',
  },
  {
    index: 0.9,
    name: 'Liquid',
    description: 'Totalmente líquido, sin resistencia al movimiento',
  },
  {
    index: 1.0,
    name: 'Completely liquid',
    description: 'Totalmente líquido, fluye sin ningún tipo de densidad',
  },
];

export const SLIDER_GELS_OPTIONS = [
  {
    id: 'numberOfGels',
    min: 1,
    max: 6,
    step: 1,
    text: false,
    title: 'Número de Geles',
  },
  {
    id: 'sweetnessIndex',
    min: 0,
    max: 1,
    step: 0.1,
    text: true, // sweetnessIndexText
    title: 'Índice de dulzor',
  },
  {
    id: 'textureIndex',
    min: 0.5,
    max: 0.9,
    step: 0.1,
    text: true, // textureIndexText
    title: 'Textura',
  },
  {
    id: 'carbsPerGel',
    min: 30,
    max: 90,
    step: 0.1,
    text: false,
    title: 'Carbohidratos por Gel (g)',
  },
];
