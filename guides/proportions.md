Podemos definir un array de proporciones predefinidas donde cada objeto tiene un `id`, una descripción legible para el usuario, y las proporciones correspondientes. Esto facilita seleccionar una proporción mediante un identificador (`id`) y luego usarla en nuestra función de cálculo.

---

### **Array de Proporciones**
Aquí está el array con todas las proporciones solicitadas, más **1:0:8** y **8:1**:

```javascript
const proporciones = [
    { id: '108', descripcion: '1:0:8 (Fructosa alta)', malto: 1, fructosa: 8 },
    { id: '81', descripcion: '8:1 (Malto alta)', malto: 8, fructosa: 1 },
    { id: '21', descripcion: '2:1 (Balanceado)', malto: 2, fructosa: 1 },
    { id: '12', descripcion: '1:2 (Fructosa alta)', malto: 1, fructosa: 2 },
    { id: '10', descripcion: '1:0 (Solo Malto)', malto: 1, fructosa: 0 },
    { id: '11', descripcion: '1:1 (Equilibrado)', malto: 1, fructosa: 1 }
];
```

---

### **Función para Seleccionar Proporción y Calcular Ingredientes**
Podemos modificar la función para buscar la proporción en el array por su `id`:

```javascript
function calcularIngredientesDesdeID(carbohidratosTotales, idProporcion) {
    // Buscar la proporción seleccionada por ID
    const proporcionSeleccionada = proporciones.find(p => p.id === idProporcion);

    if (!proporcionSeleccionada) {
        throw new Error("Proporción no válida");
    }

    // Extraer las partes de maltodextrina y fructosa
    const { malto, fructosa, descripcion } = proporcionSeleccionada;

    // Sumar las partes para calcular el total
    const totalPartes = malto + fructosa;

    // Porcentajes de carbohidratos en cada ingrediente
    const maltoPorcentajeCarbohidratos = 0.95; // Maltodextrina: 95% carbohidratos
    const fructosaPorcentajeCarbohidratos = 1.00; // Fructosa: 100% carbohidratos

    // Cálculo de carbohidratos de cada componente
    const carbohidratosMalto = (carbohidratosTotales * malto) / totalPartes;
    const carbohidratosFructosa = (carbohidratosTotales * fructosa) / totalPartes;

    // Conversión a gramos de cada ingrediente
    const maltoGramos = carbohidratosMalto / maltoPorcentajeCarbohidratos;
    const fructosaGramos = carbohidratosFructosa / fructosaPorcentajeCarbohidratos;

    return {
        descripcion, // Descripción de la proporción
        maltodextrina: maltoGramos.toFixed(2),
        fructosa: fructosaGramos.toFixed(2)
    };
}

// Ejemplo de uso
const carbohidratosElegidos = 90; // Cambia este valor según lo que necesites

// Selecciona una proporción por ID
console.log(calcularIngredientesDesdeID(carbohidratosElegidos, '108')); // 1:0:8
console.log(calcularIngredientesDesdeID(carbohidratosElegidos, '21')); // 2:1
console.log(calcularIngredientesDesdeID(carbohidratosElegidos, '10')); // 1:0
```

---

### **Explicación**
1. **Array de Proporciones**:
   - Contiene todas las proporciones como objetos con los campos:
     - `id`: Identificador único para la proporción.
     - `descripcion`: Nombre legible para el usuario.
     - `malto`: Partes de maltodextrina.
     - `fructosa`: Partes de fructosa.

2. **Función de Cálculo**:
   - Busca la proporción seleccionada en el array por su `id`.
   - Extrae las partes correspondientes para calcular las cantidades de maltodextrina y fructosa.
   - Devuelve los gramos necesarios para cada ingrediente junto con la descripción de la proporción.

3. **Salida**:
   - Devuelve un objeto con:
     - `descripcion`: Nombre de la proporción (por ejemplo, `"1:0:8 (Fructosa alta)"`).
     - `maltodextrina`: Cantidad en gramos.
     - `fructosa`: Cantidad en gramos.

---

### **Ejemplo de Salidas**
#### **1:0:8 (`'108'`)**
```javascript
calcularIngredientesDesdeID(90, '108');
// Resultado:
// {
//   descripcion: "1:0:8 (Fructosa alta)",
//   maltodextrina: "10.53",
//   fructosa: "80.00"
// }
```

#### **2:1 (`'21'`)**
```javascript
calcularIngredientesDesdeID(90, '21');
// Resultado:
// {
//   descripcion: "2:1 (Balanceado)",
//   maltodextrina: "63.16",
//   fructosa: "15.00"
// }
```

---

¡Perfecto! Con la estructura y las fórmulas que tienes, ya puedes calcular las proporciones de maltodextrina y fructosa para cualquier gel energético según los carbohidratos deseados, manteniendo control sobre el agua y la cafeína.

### **Resumen de la Configuración**
1. **Proporciones predefinidas**:
   - **1:0:8 (Fructosa alta)**: Proporción con predominancia de fructosa.
   - **8:1 (Malto alta)**: Proporción con predominancia de maltodextrina.
   - **2:1 (Balanceado)**: La proporción típica para esfuerzos mixtos.
   - **1:2, 1:0, 1:1**: Opciones para ajustar según el deporte o intensidad.

2. **Cálculo basado en ID**:
   - Selección de la proporción usando un identificador (`'108'`, `'81'`, etc.).
   - Cálculo automático de gramos de maltodextrina y fructosa según los carbohidratos totales deseados.

3. **Adicionales**:
   - Agua: Control independiente.
   - Cafeína: Una cápsula por gel.

---

Si necesitas ayuda futura con otras herramientas o optimizaciones, no dudes en preguntar. ¡Éxito en tus entrenamientos y configuraciones de nutrición! 🚴‍♂️🏃‍♂️