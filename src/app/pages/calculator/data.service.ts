import { Injectable } from '@angular/core';
import { DRINK_INGREDIENTS_PRICES, GEL_INGREDIENTS_PRICES } from '@app/shared/constants';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() { }

    materials = Object.entries({
        ...GEL_INGREDIENTS_PRICES,
        ...DRINK_INGREDIENTS_PRICES
    }).map(([key, value]) => ({
        name: key,
        ...value,
    }));
    getGelsIngredients = () => [...this.materials]
}