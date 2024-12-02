import { Units } from '../types/units';

export const SWEETNESS_INDEX = [
  {
    index: 0.0,
    name: 'Very little sweet',
    description: 'Casi insípido, apenas se percibe dulzor',
  },
  {
    index: 0.1,
    name: 'Slightly sweet',
    description: 'Un toque sutil de dulzor, casi neutro',
  },
  {
    index: 0.2,
    name: 'Mildly sweet',
    description: 'Dulzura leve pero clara, ligeramente perceptible',
  },
  {
    index: 0.3,
    name: 'Moderately sweet',
    description: 'Dulzura notable, pero sin ser invasiva',
  },
  {
    index: 0.4,
    name: 'Sweet',
    description: 'Suficientemente dulce, agradable al paladar',
  },
  {
    index: 0.5,
    name: 'Strongly sweet',
    description: 'Dulzura más destacada, algo que se percibe con claridad',
  },
  {
    index: 0.6,
    name: 'Very sweet',
    description: 'Dulzura intensa, claramente presente, pero no empalagosa',
  },
  {
    index: 0.7,
    name: 'Excessively sweet',
    description: 'El dulzor predomina, bastante intenso',
  },
  {
    index: 0.8,
    name: 'Extremely sweet',
    description: 'Dulzura casi dominante, notablemente empalagosa',
  },
  {
    index: 0.9,
    name: 'Exorbitant',
    description: 'Súper dulce, casi empalagosamente dulce',
  },
  {
    index: 1,
    name: 'Exorbitant',
    description: 'Súper dulce, casi empalagosamente dulce',
  },
];

export const ENERGETIC_INGREDIENTS = {
  flavoring: {
    price: 8.2,
    weight: 200,
    label: 'Saborizante',
    unit: 'gr' as Units,
  },
  fructose: {
    price: 4.9,
    weight: 1,
    label: 'Fructosa',
    unit: 'kgr' as Units,
  },
  maltodextrin: {
    price: 4.9,
    weight: 1,
    label: 'Maltodextrina',
    unit: 'kgr' as Units,
  },
  water: {
    price: 0,
    weight: 1,
    label: 'Agua',
    unit: 'kgr' as Units,
  },
};
