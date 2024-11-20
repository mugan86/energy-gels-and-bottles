import { Units } from "../types/units"

export const GEL_INGREDIENTS_PRICES = {
    evolytes: {
        price: 4.9,
        weight: 150,
        unit: 'gr' as Units
    },
    flavoring: {
        price: 8.2,
        weight: 200,
        unit: 'gr' as Units
    },
    fructose: {
        price: 4.9,
        weight: 1,
        unit: 'kgr' as Units
    },
    maltodextrin: {
        price: 4.9,
        weight: 1,
        unit: 'kgr' as Units
    },
    water: {
        price: 0,
        weight: 1,
        unit: 'kgr' as Units
    },
    caffeine: {
        price: 3.8,
        weight: 120,
        unit: 'unit' as Units
    },
    energyGel: {
        price: 6.95,
        weight: 50,
        unit: 'unit' as Units
    }
}

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

  export const GEL_INFO_ACCORDION_OPTIONS = [
    {
      title: 'Cantidades necesarias para crear geles',
      description: '',
    },
    {
      title: 'Ingredientes',
      description:
        '<p class="content">A continuaci&oacute;n ten&eacute;is tenéis disponibles los ingredientes:</p><p class="content"><ul class="list"><li><a href="https://acortar.link/PusLII" target="_blank">Maltodextrina</a></li><li><a href="https://acortar.link/68Wcdr" target="_blank">Fructosa</a></li><li><a href="https://acortar.link/evcCYK" target="_blank">Evolytes (sales)</a></li><li><a href="https://acortar.link/cGGU5H" target="_blank">Saborizante</a></li><li><a href="https://www.hsnstore.com/hsnaffiliate/click/?linkid=cHJvZHVjdHx8SFNORS1DQUZ8fEFNQURPUk5JRVRPfHxodHRwczovL3d3dy5oc25zdG9yZS5jb20vbWFyY2FzL2Vzc2VudGlhbC1zZXJpZXMvY2FmZWluYS0yMDBtZw==" target="_blank">Cafeina (opcional)</a></li></ul></p>',
    },
    {
      title: 'Básculas, selladora,...',
      description:
        '<p class="content">A continuaci&oacute;n ten&eacute;is el material necesario.</p><p class="content"><ul class="list"><li><a href="https://amzn.to/3U5iykF" target="_blank">Báscula de cocina</a></li><li><a href="https://amzn.to/3z0LMZY" target="_blank">Termoselladora</a></li><li><a href="https://amzn.to/4aw2sGz" target="_blank">Batidora</a></li><li><a href="https://a.aliexpress.com/_EzZbGe1" target="_blank">Sobres Geles (15x5,5)</a></li><li><a href="https://www.amazon.es/Fitly-Botella-Flexible-Mochila-Hidrataci%C3%B3n/dp/B07KNDT5J7?th=1" target="_blank">Softflask (150ml)</a></li></ul></p>',
    },
    /*{
      "title": "¿Cuánto sería el coste por gel?",
      "description": "<p class=\"content\">En TrackNavigator, <b>tu privacidad es una prioridad. No almacenamos ningún dato personal ni ningún archivo que cargues</b>.</p><p class=\"content\">El archivo GPX que subes es utilizado temporalmente para realizar el filtrado y obtener los puntos de interés (POIs) desde <a class=\"important-url\" href=\"https://www.openstreetmap.org/\" target=\"_blank\">OpenStreetMap</a>, pero no se guarda ni se comparte de ninguna otra forma. Toda la operación ocurre en tiempo real, y una vez finalizado el proceso, el archivo se descarta.</p><p class=\"content\">➡️ Para más detalles sobre cómo funciona la carga de archivos GPX, revisa <a href=\"https://www.youtube.com/watch?v=uc123toJ-oA&t=242s\" target=\"_blank\">el minuto 4:02 de nuestro videotutorial</a></p>"
    },*/
  ];

  export const START_COST_GEL = {
    maltodextrin: 0,
    fructose: 0,
    flavoring: 0,
    evolytes: 0,
    water: 0,
    caffeine: 0,
    total: 0,
    energyGel: 0
  };
  

  export const GELS_TYPES = [
    {
      id: 'custom',
      label: 'Customizado',
      disabled: false
    },
    {
      id: '108',
      label: '1:0:8',
      disabled: true
    },
    {
      id: '81',
      label: '8:1',
      disabled: true
    },
    {
      id: '10',
      label: '1:0',
      disabled: true
    },
    {
      id: '21',
      label: '2:1',
      disabled: true
    },
    {
      id: '12',
      label: '1:2',
      disabled: true
    },
    {
      id: '11',
      label: '1:1',
      disabled: true
    }
  ]