import { SWEETNESS_INDEX } from '@shared/constants';
import {
  GEL_INFO_ACCORDION_OPTIONS,
  TEXTURE_INDEX,
} from '@shared/constants/gels';

export const DEFAULT_FORM_OPTIONS = {
  numberOfGels: 2, // Valor inicial: 2 geles
  textureIndex: 0.7, // Valor inicial: textura media
  carbsPerGel: 52.7, // Valor inicial: 40g de carbohidratos por gel,
  sweetnessIndex: 0.5, // Ni poco dulce ni mucho entre 0 y 1,
  caffeine: false,
  energyGel: false,
};

export const GEL_ACCORDION_OPTIONS = GEL_INFO_ACCORDION_OPTIONS.map((item) => {
  return {
    question: item.title,
    answer: item.description,
  };
});

export const OPTIONS_VALUES_TEXTS = {
  sweetnessIndex:
    SWEETNESS_INDEX[SWEETNESS_INDEX.findIndex((data) => data.index === DEFAULT_FORM_OPTIONS.sweetnessIndex)]
      .description,
  textureIndex:
    TEXTURE_INDEX[TEXTURE_INDEX.findIndex((data) => data.index === DEFAULT_FORM_OPTIONS.textureIndex)]
      .description,
};
