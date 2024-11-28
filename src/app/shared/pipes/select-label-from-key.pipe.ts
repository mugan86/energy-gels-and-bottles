import { Pipe, PipeTransform } from '@angular/core';
import {
  SPORTS as SPORTS_LIST,
  DURATIONS as DURATIONS_LIST,
  INTENSITIES as INTENSITIES_LIST,
} from '../constants';
import { Select } from '@app/models/select';

@Pipe({
  name: 'selectLabelFromKey',
  standalone: true,
})
export class SelectLabelFromKeyPipe implements PipeTransform {
  private readonly SPORTS: Select[] = SPORTS_LIST;

  private readonly DURATIONS: Select[] = DURATIONS_LIST;

  private readonly INTENSITIES: Select[] = INTENSITIES_LIST;

  transform(value?: string, ...args: Select[][]): string {
    if (!value) {
      return '';
    }

    // Dividir el texto en claves separadas por " - "
    const keys = value.split(' - ');

    // Combinar todas las listas pasadas como argumentos en un único array
    const allLists = args.flat();

    // Convertir cada clave en su etiqueta
    const labels = keys.map((key) => this.getLabelFromLists(key.trim(), allLists));

    // Combinar las etiquetas en un string final
    return labels.join(' - ');
  }

  private getLabelFromLists(key: string, allLists: Select[]): string {
    // Buscar en las listas combinadas
    const match = allLists.find((item) => item.key === key);

    // Si se encuentra, devolver el label; si no, devolver la clave original
    return match ? match.label : key;
  }
}
