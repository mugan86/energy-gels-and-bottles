import { GelRecommendation } from '@app/models/gel';
import { Select } from '@app/models/select';

export const KEYS_FILTERS = {
  DURATIONS: {
    SIXTEEN_MAX: '60min_max',
    SIXTEEN_NINETEEN: '60-90min',
    NINETEEN_ONE_HUNDRED_EIGHTEEN: '90_180min',
    TWO_FOUR_HOURS: '2_4h',
    MORE_THREE_HOURS: 'more_3h',
    MORE_FOUR_HOURS: 'more_4h',
    MAX_10_KM: 'max_10km',
    TEN_TWENTY_KM: '10_20km',
    MORE_TWENTY_KM: 'more_20_km',
    MORE_FIFTY_KM: 'more_50_km',
  },
  INTENSITIES: {
    HIGH: 'high',
    MIX: 'mix',
    LOW: 'low'  
  },
  SPORTS: {
    CYCLING: 'cycling',
    RUNNING: 'running',
    TRAIL_RUNNING: 'trail',
    TRIATLON: 'triatlon',
  },
};

export const SPORTS: Select[] = [
  { key: KEYS_FILTERS.SPORTS.CYCLING, label: 'Ciclismo' },
  { key: KEYS_FILTERS.SPORTS.RUNNING, label: 'Running' },
  { key: KEYS_FILTERS.SPORTS.TRAIL_RUNNING, label: 'Trail Running' },
  { key: KEYS_FILTERS.SPORTS.TRIATLON, label: 'Triatlón' },
];
export const DURATIONS: Select[] = [
  { key: KEYS_FILTERS.DURATIONS.SIXTEEN_MAX, label: '< 1 h' },
  { key: KEYS_FILTERS.DURATIONS.SIXTEEN_NINETEEN, label: '1-1.5 h' },
  {
    key: KEYS_FILTERS.DURATIONS.NINETEEN_ONE_HUNDRED_EIGHTEEN,
    label: '1.5-3 h',
  },
  { key: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS, label: '2-4 h' },
  { key: KEYS_FILTERS.DURATIONS.MORE_THREE_HOURS, label: '> 3 h' },
  { key: KEYS_FILTERS.DURATIONS.MORE_FOUR_HOURS, label: '> 4 h' },
  { key: KEYS_FILTERS.DURATIONS.MAX_10_KM, label: '< 10 km' },
  { key: KEYS_FILTERS.DURATIONS.TEN_TWENTY_KM, label: '10-20 km' },
  { key: KEYS_FILTERS.DURATIONS.MORE_TWENTY_KM, label: '> 20 km' },
  { key: KEYS_FILTERS.DURATIONS.MORE_FIFTY_KM, label: '> 50 km' },
];
export const INTENSITIES: Select[] = [
  { key: KEYS_FILTERS.INTENSITIES.HIGH, label: 'Alta (explosiva)' },
  { key: KEYS_FILTERS.INTENSITIES.MIX, label: 'Mixta' },
  { key: KEYS_FILTERS.INTENSITIES.LOW, label: 'Baja-moderada (sostenida)' },
];

export const gelData: GelRecommendation[] = [
    {
      sport: KEYS_FILTERS.SPORTS.CYCLING,
      duration: KEYS_FILTERS.DURATIONS.SIXTEEN_MAX,
      intensity: KEYS_FILTERS.INTENSITIES.HIGH,
      ideal_scenarios: 'Contrarreloj, sprints cortos, series de alta intensidad.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '8:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:0' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.CYCLING,
      duration: KEYS_FILTERS.DURATIONS.NINETEEN_ONE_HUNDRED_EIGHTEEN,
      intensity: KEYS_FILTERS.INTENSITIES.MIX,
      ideal_scenarios: 'Fondo medio, competiciones con cambios de ritmo.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '2:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.CYCLING,
      duration: KEYS_FILTERS.DURATIONS.MORE_THREE_HOURS,
      intensity: KEYS_FILTERS.INTENSITIES.LOW,
      ideal_scenarios: 'Fondos largos, entrenamiento base.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '1:0:8',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.CYCLING,
      duration: KEYS_FILTERS.DURATIONS.SIXTEEN_NINETEEN,
      intensity: KEYS_FILTERS.INTENSITIES.MIX,
      ideal_scenarios:
        'Entrenamientos intermedios o competencias cortas con variación de ritmo.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '2:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.RUNNING,
      duration: KEYS_FILTERS.DURATIONS.MAX_10_KM,
      intensity: KEYS_FILTERS.INTENSITIES.HIGH,
      ideal_scenarios: 'Carreras de 5K, intervalos rápidos en pista.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '8:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:0' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.RUNNING,
      duration: KEYS_FILTERS.DURATIONS.TEN_TWENTY_KM,
      intensity: KEYS_FILTERS.INTENSITIES.MIX,
      ideal_scenarios: 'Medias maratones, rodajes de intensidad media.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '2:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.RUNNING,
      duration: KEYS_FILTERS.DURATIONS.MORE_TWENTY_KM,
      intensity: KEYS_FILTERS.INTENSITIES.LOW,
      ideal_scenarios: 'Maratones, rodajes largos con ritmos constantes.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '1:0:8',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.TRAIL_RUNNING,
      duration: KEYS_FILTERS.DURATIONS.MAX_10_KM,
      intensity: KEYS_FILTERS.INTENSITIES.HIGH,
      ideal_scenarios: 'Kilómetro vertical, segmentos técnicos cortos y rápidos.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '8:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:0' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.TRAIL_RUNNING,
      duration: KEYS_FILTERS.DURATIONS.MORE_TWENTY_KM,
      intensity: KEYS_FILTERS.INTENSITIES.MIX,
      ideal_scenarios:
        'Maratones de montaña, trails técnicos con subidas y descensos frecuentes.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '2:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.TRAIL_RUNNING,
      duration: KEYS_FILTERS.DURATIONS.MORE_FIFTY_KM,
      intensity: KEYS_FILTERS.INTENSITIES.LOW,
      ideal_scenarios: 'Ultratrails (>8 h), etapas largas con ritmo constante.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '1:0:8',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.TRIATLON,
      duration: KEYS_FILTERS.DURATIONS.SIXTEEN_MAX,
      intensity: KEYS_FILTERS.INTENSITIES.HIGH,
      ideal_scenarios:
        'Salidas rápidas o primeros tramos de triatlón sprint u olímpico.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '8:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:0' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.TRIATLON,
      duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
      intensity: KEYS_FILTERS.INTENSITIES.MIX,
      ideal_scenarios:
        'Segmentos de ciclismo y carrera en triatlones olímpicos o media distancia.',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '2:1',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
      ],
    },
    {
      sport: KEYS_FILTERS.SPORTS.TRIATLON,
      duration: KEYS_FILTERS.DURATIONS.MORE_FOUR_HOURS,
      intensity: KEYS_FILTERS.INTENSITIES.LOW,
      ideal_scenarios:
        'Segmentos de carrera en triatlones de larga distancia (Half Ironman o Ironman).',
      recommended_ratios: [
        {
          key: 'carb_to_protein',
          description: 'Carbohidratos:Proteínas',
          value: '1:0:8',
        },
        { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
      ],
    },
  ];
  
