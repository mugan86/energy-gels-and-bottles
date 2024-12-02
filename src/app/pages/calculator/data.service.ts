import { Injectable } from '@angular/core';
import { GEL_INGREDIENTS_PRICES } from '@app/shared/constants';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() { }

    materials = Object.entries(GEL_INGREDIENTS_PRICES).map(([key, value]) => ({
        name: key,
        ...value,
    }));

    todoList = [
        {
            title: 'delectus aut autem',
            completed: false,
            priority: 0,
        },
        {
            title: 'quis ut nam facilis et officia qui',
            completed: false,
            priority: 1,
        },
        {
            title: 'fugiat veniam minus',
            completed: false,
            priority: 2,
        },
        {
            title: 'et porro tempora',
            completed: true,
            priority: 1,
        },
        {
            title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
            completed: false,
            priority: 0,
        },
    ];
    getmyData() {
        return [...this.todoList];
    }

    getGelsIngredients =  () => [...this.materials]
}