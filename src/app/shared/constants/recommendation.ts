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
    FOUR_SIX_HOURS: '4_6h',
    MORE_SIX_HOURS: '6+ h',
  },
  INTENSITIES: {
    HIGH: 'high',
    MIX: 'mix',
    LOW: 'low',
  },
  SPORTS: {
    CYCLING: 'cycling',
    RUNNING: 'running',
    TRAIL_RUNNING: 'trail',
    TRIATLON: 'triatlon',
  },
};

export const SPORTS: Select[] = [
  { key: KEYS_FILTERS.SPORTS.CYCLING, label: '🚴🏾‍♀️ Ciclismo 🚵🏾‍♂️' },
  { key: KEYS_FILTERS.SPORTS.RUNNING, label: '🏃‍♂️ Running 🏃‍♀️' },
  { key: KEYS_FILTERS.SPORTS.TRAIL_RUNNING, label: '🏃‍♂️ Trail Running 🏔️' },
  { key: KEYS_FILTERS.SPORTS.TRIATLON, label: '🏊 Triatlón 🏃‍♀️' },
];
export const DURATIONS: Select[] = [
  { key: KEYS_FILTERS.DURATIONS.SIXTEEN_MAX, label: '🕐 < 1 h 🕐' },
  { key: KEYS_FILTERS.DURATIONS.SIXTEEN_NINETEEN, label: '🕐 1-1.5 h 🕜' },
  {
    key: KEYS_FILTERS.DURATIONS.NINETEEN_ONE_HUNDRED_EIGHTEEN,
    label: '🕜 1.5-3 h 🕒',
  },
  { key: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS, label: '🕑 2-4 h 🕓' },
  { key: KEYS_FILTERS.DURATIONS.MORE_THREE_HOURS, label: '🕒 > 3 h 🕒' },
  { key: KEYS_FILTERS.DURATIONS.MORE_FOUR_HOURS, label: '🕓 > 4 h 🕓' },
  { key: KEYS_FILTERS.DURATIONS.FOUR_SIX_HOURS, label: '🕓 4-6 h 🕕' },
  { key: KEYS_FILTERS.DURATIONS.MORE_SIX_HOURS, label: '🕕 > 6 h 🕕' },
  { key: KEYS_FILTERS.DURATIONS.MAX_10_KM, label: '↩️ < 10 km' },
  { key: KEYS_FILTERS.DURATIONS.TEN_TWENTY_KM, label: '↩️ 10-20 km' },
  { key: KEYS_FILTERS.DURATIONS.MORE_TWENTY_KM, label: '↩️ > 20 km' },
  { key: KEYS_FILTERS.DURATIONS.MORE_FIFTY_KM, label: '↩️ > 50 km' },
];
export const INTENSITIES: Select[] = [
  { key: KEYS_FILTERS.INTENSITIES.HIGH, label: '🔥 Alta (explosiva) 🔥' },
  { key: KEYS_FILTERS.INTENSITIES.MIX, label: '📊 Mixta 📊' },
  { key: KEYS_FILTERS.INTENSITIES.LOW, label: '👟 Baja-moderada (sostenida) 👟' },
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
    duration: KEYS_FILTERS.DURATIONS.SIXTEEN_MAX,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Competencias cortas o entrenamiento rápido.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.SIXTEEN_NINETEEN,
    intensity: KEYS_FILTERS.INTENSITIES.HIGH,
    ideal_scenarios: 'Intervalos cortos, trabajo de velocidad y potencia.',
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
    duration: KEYS_FILTERS.DURATIONS.SIXTEEN_NINETEEN,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Competencias intermedias, variación de ritmo.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.NINETEEN_ONE_HUNDRED_EIGHTEEN,
    intensity: KEYS_FILTERS.INTENSITIES.HIGH,
    ideal_scenarios: 'Competencias con cambios de ritmo rápidos.',
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
    ideal_scenarios: 'Fondos moderados, competiciones de distancia media.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.HIGH,
    ideal_scenarios:
      'Segmentos de ciclismo intenso, resistencia con intervalos.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios:
      'Entrenamientos de fondo y resistencia en distancias medias.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios:
      'Entrenamiento base o paseos largos, resistencia a ritmo constante.',
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
    ideal_scenarios:
      'Fondos largos, entrenamiento de resistencia de baja intensidad.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.MORE_THREE_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Rutas largas, entrenamiento continuo a ritmo moderado.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.MORE_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Entrenamientos largos, resistencia a ritmo constante.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.MAX_10_KM,
    intensity: KEYS_FILTERS.INTENSITIES.HIGH,
    ideal_scenarios: 'Ciclismo de pista corto o contrarreloj explosiva.',
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
    duration: KEYS_FILTERS.DURATIONS.TEN_TWENTY_KM,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios:
      'Competencias de ruta con cambios de ritmo, velocidad controlada.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.MORE_TWENTY_KM,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Entrenamientos de resistencia continua, rutas largas.',
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
    duration: KEYS_FILTERS.DURATIONS.MORE_FIFTY_KM,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios:
      'Ultra ciclismo, distancias muy largas (> 4 horas), esfuerzo sostenido.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.FOUR_SIX_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Ultra trail, distancia larga, ritmo constante.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.FOUR_SIX_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Competencia larga, trail con altibajos.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.MORE_SIX_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Ultra trail, distancia larga, esfuerzo sostenido.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.CYCLING,
    duration: KEYS_FILTERS.DURATIONS.MORE_SIX_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Competición ultra larga con fluctuaciones de ritmo.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.SIXTEEN_MAX,
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
    duration: KEYS_FILTERS.DURATIONS.SIXTEEN_MAX,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Rodajes a ritmo medio o competencias cortas.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.SIXTEEN_NINETEEN,
    intensity: KEYS_FILTERS.INTENSITIES.HIGH,
    ideal_scenarios: '10K rápidos, entrenamientos progresivos.',
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
    duration: KEYS_FILTERS.DURATIONS.SIXTEEN_NINETEEN,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Rodajes controlados o medias maratones cortas.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.NINETEEN_ONE_HUNDRED_EIGHTEEN,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios:
      'Medias maratones estándar, rodajes largos con cambios de ritmo.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.NINETEEN_ONE_HUNDRED_EIGHTEEN,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Rodajes sostenidos en zona aeróbica.',
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
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Preparación de maratón con ritmos variados.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Fondos largos con ritmo constante.',
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
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.MORE_THREE_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Maratones completas, tiradas de ultra.',
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
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.MAX_10_KM,
    intensity: KEYS_FILTERS.INTENSITIES.HIGH,
    ideal_scenarios: 'Carreras explosivas (5K y 10K cortos).',
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
    ideal_scenarios: 'Rodajes largos moderados.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.MORE_TWENTY_KM,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Entrenamientos largos y maratones.',
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
    sport: KEYS_FILTERS.SPORTS.RUNNING,
    duration: KEYS_FILTERS.DURATIONS.MORE_FIFTY_KM,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Ultramaratones (>6 h), ritmos constantes.',
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
    ideal_scenarios: 'Trail corto y rápido, subidas o sprints.',
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
    duration: KEYS_FILTERS.DURATIONS.MAX_10_KM,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Competencia corta o entrenamiento con cambios.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.TRAIL_RUNNING,
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.HIGH,
    ideal_scenarios: 'Subidas rápidas, intervalos, velocidad alta.',
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
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Carrera moderada, cambios de ritmo.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.TRAIL_RUNNING,
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Trail running de resistencia continua a ritmo lento.',
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
    duration: KEYS_FILTERS.DURATIONS.FOUR_SIX_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Ultra trail, distancia larga, ritmo constante.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.TRAIL_RUNNING,
    duration: KEYS_FILTERS.DURATIONS.FOUR_SIX_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios: 'Competencia larga, trail con altibajos.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.TRAIL_RUNNING,
    duration: KEYS_FILTERS.DURATIONS.FOUR_SIX_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Ultra trail, distancia larga, esfuerzo sostenido.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },
  {
    sport: KEYS_FILTERS.SPORTS.TRAIL_RUNNING,
    duration: KEYS_FILTERS.DURATIONS.MORE_SIX_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios: 'Ultra trail, distancia muy larga, esfuerzo constante.',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
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
  {
    sport: KEYS_FILTERS.SPORTS.TRIATLON,
    duration: KEYS_FILTERS.DURATIONS.TWO_FOUR_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
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

  // Nueva recomendación para Triatlón (4-6 horas, Mixta)
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
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },

  // Nueva recomendación para Triatlón (6+ horas, Baja)
  {
    sport: KEYS_FILTERS.SPORTS.TRIATLON,
    duration: KEYS_FILTERS.DURATIONS.MORE_THREE_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.LOW,
    ideal_scenarios:
      'Segmentos de carrera en triatlones de larga distancia (Half Ironman o Ironman).',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '2:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:2' },
    ],
  },

  // Nueva recomendación para Triatlón (6+ horas, Mixta)
  {
    sport: KEYS_FILTERS.SPORTS.TRIATLON,
    duration: KEYS_FILTERS.DURATIONS.MORE_THREE_HOURS,
    intensity: KEYS_FILTERS.INTENSITIES.MIX,
    ideal_scenarios:
      'Segmentos de carrera en triatlones de larga distancia (Half Ironman o Ironman).',
    recommended_ratios: [
      {
        key: 'carb_to_protein',
        description: 'Carbohidratos:Proteínas',
        value: '4:1',
      },
      { key: 'carbs_only', description: 'Carbohidratos solo', value: '1:1' },
    ],
  },
];
