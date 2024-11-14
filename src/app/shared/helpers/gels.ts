import { EVOLYTES_COMPOSITION_IN_MG, INGREDIENTS_PER_ONE_HUNDRED_GR } from "../constant";

const getNutritionalValues = (maltodextrin: number, fructose: number, flavoring: number) => {
    const { maltodextrinCarbs, fructoseCarbs, flavoringCarbs } = INGREDIENTS_PER_ONE_HUNDRED_GR;

    const totalCarbs = (maltodextrin * maltodextrinCarbs / 100) + (fructose * fructoseCarbs / 100) + (flavoring * flavoringCarbs / 100);
    const totalSugars = (maltodextrin * 0.07 * maltodextrinCarbs / 100) + fructose; // Sumar azúcares
    const calories = totalCarbs * 4; // 4 kcal por gramo de carbohidrato

    return {
        totalCarbs,
        totalSugars,
        calories
    }
}

export function calculateGelIngredients(carbsPerGel: number, textureIndex: number, sweetnessIndex: number, caffeine: number) {
    // Valores de ingredientes por 100g
    const { maltodextrinCarbs, fructoseCarbs } = INGREDIENTS_PER_ONE_HUNDRED_GR;

    // Composición de Evolytes (por cada 2.5g de Evolytes)
    const { sodiumPerServing, potassiumPerServing, magnesiumPerServing, chloridePerServing, calciumPerServing } = EVOLYTES_COMPOSITION_IN_MG;

    // Ajuste de proporciones para alcanzar los 30 g de maltodextrina y 24 g de fructosa en carbohidratos con dulzor variable
    const baseMaltodextrinCarbs = 30;
    const baseFructoseCarbs = 24;

    // Ajuste de dulzor: varía entre menos dulce (más maltodextrina) y más dulce (más fructosa)
    const adjustedMaltodextrinRatio = baseMaltodextrinCarbs - (3 * sweetnessIndex); // 30g base, ajustado hasta 27g
    const adjustedFructoseRatio = baseFructoseCarbs + (3 * sweetnessIndex); // 24g base, ajustado hasta 27g

    // Normalizar para mantener el total deseado de carbohidratos
    const maltodextrinCarbsNeeded = (adjustedMaltodextrinRatio / (adjustedMaltodextrinRatio + adjustedFructoseRatio)) * carbsPerGel;
    const fructoseCarbsNeeded = carbsPerGel - maltodextrinCarbsNeeded;

    // Convertir los carbohidratos necesarios en gramos de ingrediente
    const maltodextrin = (maltodextrinCarbsNeeded / maltodextrinCarbs) * 100;
    const fructose = (fructoseCarbsNeeded / fructoseCarbs) * 100;
    const flavoring = 3; // Cantidad fija de saborizante (g) para un gel
    const evolytes = 3;   // Cantidad fija de Evolytes (g) para un gel

    // Calcular el peso total de los ingredientes
    const totalIngredientsWeight = maltodextrin + fructose + flavoring + evolytes;
    let water = 100 - totalIngredientsWeight; // Ajustar para llegar a 100 g de peso total

    // Ajuste de agua basado en el índice de textura
    const textureAdjustment = (textureIndex * 0.4 - 0.2) * 100; // Entre -20g y +20g
    water += textureAdjustment;

    // Verificar si la cantidad de agua es válida
    if (water < 0) {
        throw new Error("El peso total de los ingredientes excede los 100 gramos. Ajusta el contenido de carbohidratos.");
    }

    // Dividir el agua entre 2.5 para mejorar la consistencia
    water = water / 2.5;

    // Valores nutricionales
    const { totalSugars, calories } = getNutritionalValues(maltodextrin, fructose, flavoring);
   
    // Calcular los valores de electrolitos basado en la cantidad de Evolytes utilizada
    const servingsOfEvolytes = evolytes / 2.5;
    const sodium = sodiumPerServing * servingsOfEvolytes;
    const potassium = potassiumPerServing * servingsOfEvolytes;
    const magnesium = magnesiumPerServing * servingsOfEvolytes;
    const chloride = chloridePerServing * servingsOfEvolytes;
    const calcium = calciumPerServing * servingsOfEvolytes;

    // Resultados
    return {
        totalGelWeight: (maltodextrin + fructose + flavoring + evolytes + water).toFixed(2),
        ingredients: {
            maltodextrin: maltodextrin.toFixed(2),
            fructose: fructose.toFixed(2),
            flavoring: flavoring.toFixed(2),
            evolytes: evolytes.toFixed(2),
            water: water.toFixed(2),
            caffeine: Number(caffeine)
        },
        nutritionalValues: {
            totalCarbs: carbsPerGel.toFixed(2), 
            totalSugars: totalSugars.toFixed(2),
            calories: calories.toFixed(2),
            sodium: sodium.toFixed(2),
            potassium: potassium.toFixed(2),
            magnesium: magnesium.toFixed(2),
            chloride: chloride.toFixed(2),
            calcium: calcium.toFixed(2)
        }
    };
}
