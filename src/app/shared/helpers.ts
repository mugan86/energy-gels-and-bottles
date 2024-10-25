import { CARBS_PROPORTIONS, EVOLYTES_COMPOSITION_IN_MG, INGREDIENTS_PER_ONE_HUNDRED_GR } from "./constant";

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

export function calculateGelIngredients(carbsPerGel: number, textureIndex: number) {
    // Valores de ingredientes por 100g
    const { maltodextrinCarbs, fructoseCarbs } = INGREDIENTS_PER_ONE_HUNDRED_GR;

    // Composición de Evolytes (por cada 2.5g de Evolytes)
    const { sodiumPerServing, potassiumPerServing, magnesiumPerServing, chloridePerServing, calciumPerServing } = EVOLYTES_COMPOSITION_IN_MG;      // mg de calcio

    // Proporciones de carbohidratos
    const { maltodextrinRatio, fructoseRatio } = CARBS_PROPORTIONS;

    // Calcular las cantidades necesarias de carbohidratos de cada ingrediente
    const maltodextrinCarbsNeeded = carbsPerGel * maltodextrinRatio; // g
    const fructoseCarbsNeeded = carbsPerGel * fructoseRatio;         // g

    // Calcular la cantidad de maltodextrina y fructosa en gramos
    const maltodextrin = (maltodextrinCarbsNeeded / maltodextrinCarbs) * 100; // g
    const fructose = (fructoseCarbsNeeded / fructoseCarbs) * 100;             // g
    const flavoring = 3; // Cantidad fija de saborizante (g) para un gel
    const evolytes = 3;   // Cantidad fija de Evolytes (g) para un gel

    // Calcular la cantidad de agua base

    const totalIngredientsWeight = maltodextrin + fructose + flavoring + evolytes;
    let water = 100 - totalIngredientsWeight; // Ajustar para llegar a 100 g

    // Ajuste de agua basado en el índice de textura
    // textureIndex: 0 = denso, 1 = líquido
    // El ajuste puede variar entre -20% (más denso) y +20% (más líquido)
    const textureAdjustment = (textureIndex * 0.4 - 0.2) * 100; // Entre -20g y +20g
    water += textureAdjustment;

    // Verificar si la cantidad de agua es válida
    if (water < 0) {
        throw new Error("Total ingredient weight exceeds 100 grams. Please adjust the carbohydrate content.");
    }

    // Valores nutricionales
    const { totalSugars, calories} = getNutritionalValues(maltodextrin, fructose, flavoring)
   
    // Calcular los valores de electrolitos basado en la cantidad de Evolytes utilizada
    const servingsOfEvolytes = evolytes / 2.5; // Evolytes por cada 2.5g
    const sodium = sodiumPerServing * servingsOfEvolytes; // mg
    const potassium = potassiumPerServing * servingsOfEvolytes; // mg
    const magnesium = magnesiumPerServing * servingsOfEvolytes; // mg
    const chloride = chloridePerServing * servingsOfEvolytes; // mg
    const calcium = calciumPerServing * servingsOfEvolytes; // mg

    // Resultados
    return {
        totalGelWeight: (maltodextrin + fructose + flavoring + evolytes + water).toFixed(2),
        ingredients: {
            maltodextrin: maltodextrin.toFixed(2),
            fructose: fructose.toFixed(2),
            flavoring: flavoring.toFixed(2), // Saborizante
            evolytes: evolytes.toFixed(2),
            water: (water / 2).toFixed(2),    
        },
        nutritionalValues: {
            totalCarbs: carbsPerGel.toFixed(2), // Esto ahora será igual al argumento
            totalSugars: totalSugars.toFixed(2),
            calories: calories.toFixed(2),
            sodium: sodium.toFixed(2),       // mg de sodio
            potassium: potassium.toFixed(2), // mg de potasio
            magnesium: magnesium.toFixed(2), // mg de magnesio
            chloride: chloride.toFixed(2),   // mg de cloruro
            calcium: calcium.toFixed(2)      // mg de calcio
        }
    };
}