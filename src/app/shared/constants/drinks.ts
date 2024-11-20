export const CARBOHYDRATE_CONCENTRATION_DESCRIPTIONS = {
  hypotonic: {
    2: 'Muy ligero, ideal para hidratación rápida y reposición de electrolitos sin causar molestias digestivas.',
    3: 'Adecuado para sesiones cortas o climas cálidos donde la prioridad es la hidratación por encima de la energía.',
    4: 'Ligero, con un aporte mínimo de energía. Ideal para ejercicios de baja intensidad o como bebida de mantenimiento.',
  },
  isotonic: {
    6: 'Equilibrio perfecto entre hidratación y aporte energético. Recomendado para ejercicios de intensidad moderada.',
    7: 'Aporta suficiente energía y electrolitos para entrenamientos prolongados sin comprometer la digestión.',
    8: 'Concentración alta dentro del rango isotónico, adecuada para sesiones intensas o climas cálidos. Buena tolerancia para la mayoría.',
  },
  hypertonic: {
    10: 'Ligero y fácil de asimilar, adecuado para la mayoría de los usuarios tras ejercicios intensos. Proporciona una recuperación básica con buena tolerancia digestiva.',
    11: 'Energía ligeramente superior con buena asimilación, recomendado para entrenamientos intensos de mayor duración.',
    12: 'Equilibrio óptimo entre densidad energética y tolerancia digestiva, ideal para la mayoría de los atletas tras entrenamientos extenuantes.',
    13: 'Concentración moderada-alta, más adecuada para usuarios experimentados o sesiones de alta intensidad. Puede ser menos tolerable para personas sensibles.',
    14: 'Carga elevada de carbohidratos, ideal para recuperar rápidamente grandes reservas de glucógeno. Puede ser exigente para la digestión.',
    15: 'Muy denso y difícil de asimilar. Recomendado solo para atletas con alta tolerancia o en situaciones excepcionales de alta demanda energética.',
  },
};

export const hypotonicDrinkHTML = `
<h2>1. Bebida Hipotónica (Pre-entrenamiento)</h2>

<p>Las bebidas hipotónicas son ideales para hidratar antes del entrenamiento y actividades cortas o de baja intensidad. Estas bebidas <strong>tienen una concentración de carbohidratos entre el 2% y el 4%</strong>, lo que facilita la absorción rápida sin sobrecargar el sistema digestivo.</p>

<ul>
  <li><strong>Composición</strong>: Estas bebidas tienen una menor concentración de electrolitos y carbohidratos en comparación con los fluidos corporales. Esto significa que su contenido en carbohidratos es bajo, <strong>alrededor de un 2-4% de carbohidratos</strong>.</li>
  <li><strong>Uso ideal</strong>: Se recomiendan antes de entrenamientos de corta duración o de baja intensidad. Son muy efectivas para una rápida hidratación sin agregar una carga significativa de carbohidratos.</li>
</ul>

<p><strong>Propósito</strong>: La principal función es la rehidratación rápida sin aportar demasiada energía. Esto es útil en deportes de resistencia donde necesitas mantenerte ligero e hidratado sin necesidad de un alto aporte de glucosa.</p>

<h3>Diferencia entre usar un 2% y un 4% de concentración de carbohidratos</h3>
<p>La diferencia entre usar una concentración de carbohidratos del 2% y una del 4% en una bebida deportiva se traduce principalmente en la velocidad de absorción y la cantidad de energía disponible. Estas variaciones en concentración pueden ser útiles en función de la duración e intensidad del entrenamiento, así como de los objetivos específicos de hidratación o suministro de energía.</p>

<h4>Diferencias clave entre el 2% y el 4% de carbohidratos</h4>

<h5>1. Velocidad de Absorción y Rehidratación:</h5>

<h6><strong>2% de Carbohidratos</strong></h6>
<p>Al tener una baja concentración de carbohidratos, la bebida se absorbe más rápidamente. Esto es ideal para actividades cortas o de baja intensidad, o simplemente para hidratarse antes de entrenar. La absorción rápida ayuda a evitar la sensación de pesadez en el estómago, manteniendo un equilibrio de fluidos óptimo.</p>

<h6><strong>4% de Carbohidratos</strong></h6>
<p>Aunque sigue siendo una concentración baja, el 4% proporciona un poco más de energía sin llegar a ser demasiado pesado. Sin embargo, la absorción es ligeramente más lenta que una bebida al 2%, ya que contiene una mayor densidad de carbohidratos. Esto es útil para entrenamientos de mayor intensidad o duración (alrededor de 45-60 minutos), donde es necesario un ligero aporte de energía sin comprometer la rehidratación rápida.</p>

<h5>2. Energía Disponible:</h5>

<h6><strong>2% de Carbohidratos</strong></h6>
<p>Aporta menos energía (aproximadamente 8 g de carbohidratos por cada 400 ml), lo cual es adecuado si el objetivo es únicamente rehidratarse sin una gran necesidad de aporte energético. Es útil si el entrenamiento es de baja duración (menos de 45 minutos) o de baja intensidad.</p>

<h6><strong>4% de Carbohidratos</strong></h6>
<p>Proporciona el doble de energía (aproximadamente 16 g de carbohidratos por cada 400 ml). Esto es ideal para actividades de mayor intensidad o de duración moderada, ya que ayuda a mantener los niveles de glucosa en la sangre y evita una caída de energía temprana. También es adecuado si no se consumirá una bebida intra-entreno adicional, ya que este nivel cubre algo más de requerimientos energéticos.</p>

<h5>3. Usos y Recomendaciones Específicas:</h5>

<h6><strong>2% de Carbohidratos</strong></h6>
<ul>
  <li>Antes de entrenamientos cortos (menos de 30-45 minutos), ya que su función principal es la hidratación rápida sin añadir demasiados carbohidratos.</li>
  <li>En condiciones de calor, donde el riesgo de deshidratación es mayor y la velocidad de absorción es prioritaria.</li>
</ul>

<h6><strong>4% de Carbohidratos</strong></h6>
<ul>
  <li><strong>Antes de entrenamientos de duración moderada o de intensidad media-alta</strong> (45-60 minutos) para aportar energía extra.</li>
  <li><strong>Cuando la actividad demanda un poco de energía adicional</strong>, por ejemplo, una carrera de intensidad moderada, una sesión de ciclismo de media duración, o una sesión de gimnasio de alta intensidad.</li>
</ul>

<h4>Resumen: ¿Cuándo usar cada concentración?</h4>
<ul>
  <li><strong>2% de carbohidratos</strong>: Mejor para actividades de baja intensidad o corta duración y situaciones donde la hidratación rápida es lo más importante.</li>
  <li><strong>4% de carbohidratos</strong>: Ideal para actividades de duración moderada o intensidad más alta, ya que proporciona un aporte de energía ligeramente mayor y ayuda a mantener el rendimiento durante un tiempo más prolongado.</li>
</ul>

<h3>Receta - Ejemplo</h3>
<ul>
  <li><strong>Agua</strong>: 500 ml</li>
  <li><strong>Maltodextrina</strong>: 15-20 g (para obtener una concentración de carbohidratos del 3-4%)</li>
  <li><strong>Sal</strong>: 1 g (aproximadamente 400 mg de sodio)</li>
</ul>

<h3>Análisis del ejemplo</h3>
<ul>
  <li><strong>Concentración de carbohidratos</strong>: En una bebida hipotónica, <strong>lo ideal es que la concentración de carbohidratos esté entre el 2% y el 4% para facilitar la rápida absorción y evitar posibles molestias digestivas</strong>.</li>
  <li><strong>Electrolitos (Sal)</strong>: La sal <strong>ayuda a reponer el sodio</strong>, uno de los electrolitos más importantes, especialmente si se espera sudoración. <strong>La cantidad de 1 g de sal (aproximadamente 400 mg de sodio) es adecuada para una bebida de 500 ml en situaciones normales</strong>.</li>
</ul>
`;

export const isotonicDrinkHTML = `
<h2>2. Bebida Isotónica (Intra-entrenamiento)</h2>

<p>Las bebidas isotónicas son <strong>ideales para el consumo durante entrenamientos de media a larga duración (45-90 minutos) y de intensidad moderada a alta</strong>.</p>
<p>Tienen una <strong>concentración de carbohidratos entre el 6% y el 8%</strong>, proporcionando energía sostenida y ayudando a mantener el equilibrio de electrolitos.</p>

<ul>
  <li>Un 8% está en el límite superior de lo recomendado, pero sigue siendo óptimo para ejercicios de larga duración o de alta intensidad, cuando el cuerpo necesita tanto hidratación como una fuente de energía estable.</li>
</ul>

<h5>Tipo de Carbohidratos: Maltodextrina y Fructosa</h5>
<ul>
  <li><strong>Maltodextrina</strong>: Es un carbohidrato de fácil digestión y rápida absorción, que proporciona glucosa de manera inmediata al torrente sanguíneo. Esto ayuda a mantener la energía y evita la fatiga durante el ejercicio.</li>
  <li><strong>Fructosa</strong>: Se metaboliza más lentamente y utiliza una vía distinta a la de la glucosa, proporcionando una fuente de energía complementaria. Al combinar maltodextrina y fructosa, se aprovechan diferentes rutas de absorción, maximizando la ingesta de carbohidratos y reduciendo el riesgo de molestias estomacales.</li>
</ul>

<h5>Electrolitos (Sal)</h5>
<ul>
  <li><strong>1 g de sal proporciona aproximadamente 400 mg de sodio</strong>, una cantidad adecuada para 750 ml de bebida isotónica. El sodio es el principal electrolito que se pierde con el sudor, y su reposición es crucial para mantener el equilibrio hídrico y la función muscular.</li>
  <li>En un contexto de ejercicios de intensidad moderada a alta, <strong>esta cantidad de sodio ayuda a mantener la hidratación y previene los calambres musculares, mejorando el rendimiento</strong>.</li>
</ul>

<h3>Uso Recomendado</h3>
<ul>
  <li><strong>Ideal para</strong>: Actividades de duración media a larga (45-90 minutos) o en climas cálidos y condiciones de alta sudoración, proporcionando energía y reponiendo electrolitos.</li>
</ul>

<h3>Resumen y conclusión</h3>
<p>Tu bebida <strong>isotónica al 6-8%</strong> es adecuada para:</p>
<ol>
  <li><strong>Entrenamientos prolongados y de alta intensidad</strong> (ciclismo, carreras de resistencia, etc.).</li>
  <li><strong>Climas cálidos o situaciones con alta sudoración</strong> donde la reposición de electrolitos es esencial.</li>
  <li><strong>Mantener la energía y la hidratación durante el ejercicio</strong>, gracias a la combinación de carbohidratos de rápida y media absorción y una cantidad apropiada de sodio.</li>
</ol>
<p>Esta fórmula te ayuda a ajustar los ingredientes según el volumen de agua, manteniendo una bebida isotónica ideal para actividades exigentes.</p>
`;

export const hypertonicDrinkHTML = `
<h2>3. Bebida Hipertónica (Post-entrenamiento)</h2>

<p>Las bebidas hipertónicas son ideales para la recuperación tras entrenamientos intensos o de larga duración. Con una alta concentración de carbohidratos (más del 10%), ayudan a reponer el glucógeno muscular y promover la recuperación.</p>

<h3>Fórmula propuesta y recomendaciones</h3>

<h4>Agua</h4>
<p>Para una bebida hipertónica, la cantidad de agua suele ser menor que en las bebidas isotónicas o hipotónicas, ya que el objetivo no es tanto la hidratación rápida sino la reposición de energía y nutrientes. Recomendaría entre 300 ml y 500 ml de agua para facilitar la mezcla y la digestión, aunque el volumen puede adaptarse a la preferencia personal.</p>

<h4>Maltodextrina</h4>
<ol>
  <li><strong>Cantidad</strong>: La cantidad de maltodextrina será equivalente al peso corporal de la persona. Por ejemplo, si el atleta pesa 70 kg, usaremos 70 g de maltodextrina.</li>
  <li><strong>Carbohidratos efectivos</strong>: Debemos de mirar la cantidad de carbohidratos por 100 g que tiene la maltodextrina. En este caso, si son 95 g por cada 100 g, calcularíamos la cantidad de carbohidratos efectivos tomando como referencia los <strong>70 kg = 70 g de maltodextrina</strong>:
    <pre>
Carbohidratos efectivos = Peso corporal x (gr de carbohidratos por 100 gr / 100)
Carbohidratos efectivos = 70 x (95 / 100) = 66.5 gr de carbohidratos desde la maltodextrina
    </pre>
  </li>
</ol>

<h4>Whey Protein</h4>
<ol>
  <li><strong>Cantidad</strong>: La proteína de suero o Whey se usará en una proporción de la cantidad de peso del atleta dividido entre 5. En este caso:
    <pre>
Gramos de proteína = Peso corporal / 5
Gramos de proteína = 70 / 5 = 14 gr de proteínas.
    </pre>
  </li>
</ol>

<h4>Sal</h4>
<p>La cantidad de sal puede variar según la intensidad del ejercicio y el nivel de sudoración, pero una recomendación general es 1 g para reponer el sodio perdido, que es esencial para la recuperación post-entrenamiento.</p>

<h3>Ejemplo completo de la fórmula hipertónica para una persona de 70 kg</h3>
<ul>
  <li><strong>Agua</strong>: 300-500 ml.</li>
  <li><strong>Maltodextrina</strong>: 70 g (de los cuales 66.5 g son carbohidratos efectivos).</li>
  <li><strong>Whey Protein</strong>: 14 g.</li>
  <li><strong>Sal</strong>: 1 g.</li>
</ul>

<h3>Cálculo de la concentración de carbohidratos</h3>
<p>Usando 500 ml de agua, la concentración de carbohidratos se calcularía así:</p>
<ol>
  <li><strong>Carbohidratos totales efectivos</strong>: 66.5 g.</li>
  <li><strong>Concentración de carbohidratos</strong>: A continuación, cómo calcularlo:
    <pre>
Concentración de carbohidratos = (Carb. totales efectivos / Cantidad de agua ml) x 100
Concentración de carbohidratos = (66.5 / 500) x 100 = 13.3%
    </pre>
  </li>
</ol>
<p><strong>Este porcentaje del 13.3% cumple con los requisitos para una bebida hipertónica, que típicamente tiene más del 10% de carbohidratos.</strong></p>

<h3>¿Cuándo es ideal consumir esta bebida hipertónica?</h3>
<p>Esta bebida es <strong>ideal después de entrenamientos intensos y prolongados</strong>, especialmente cuando:</p>
<ol>
  <li>El <strong>ejercicio ha durado más de 90 minutos</strong>, como en ciclismo, carreras de fondo, triatlón o deportes de resistencia en general.</li>
  <li>Se necesita <strong>reponer rápidamente los depósitos de glucógeno y apoyar la síntesis de proteínas musculares</strong>.</li>
  <li>Es importante comenzar la recuperación cuanto antes, especialmente si hay otra sesión de entrenamiento dentro de 24 horas.</li>
</ol>
`;

/**
 * Información adicional de las bebidas
 */
export const drinksAditionalInfo = {
  hypotonic: hypotonicDrinkHTML,
  isotonic: isotonicDrinkHTML,
  hypertonic: hypertonicDrinkHTML,
};

export const drinkChoiceHTML = `
<h3>¿Cómo elegir la bebida adecuada?</h3>
<h4>Tipo de entrenamiento</h4> 
<p>Si es de alta intensidad y prolongado, una bebida isotónica puede servir durante la actividad, y una hipertónica para la recuperación. Si es de corta duración, probablemente una bebida hipotónica sea suficiente para mantenerte hidratado.</p>
<h4>Duración</h4>
<p>A mayor duración, mayor es la necesidad de incluir carbohidratos y electrolitos, lo cual hace a las bebidas isotónicas e hipertónicas más adecuadas.</p>
<h4>Intensidad</h4>
<p>Para entrenamientos de baja a moderada intensidad, una bebida hipotónica o solo agua suele ser suficiente, pero a mayor intensidad y sudoración, las isotónicas se vuelven necesarias.</p>
`;

export const drinkSummaryHTML = `
<h3>Resumen de Uso para Cada Bebida</h3>
<table>
  <thead>
    <tr>
      <th>Tipo de Bebida</th>
      <th>Objetivo</th>
      <th>Carbohidratos</th>
      <th>Ejemplo de Uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hipotónica</td>
      <td>Pre-entrenamiento</td>
      <td>2-4%</td>
      <td>Rápida rehidratación, ideales antes o para entrenamientos cortos.</td>
    </tr>
    <tr>
      <td>Isotónica</td>
      <td>Intra-entrenamiento</td>
      <td>6-8%</td>
      <td>Balanceadas para mantener hidratación y energía durante entrenamientos más largos. Energía sostenida en ejercicios de &gt; 45 min.</td>
    </tr>
    <tr>
      <td>Hipertónica</td>
      <td>Post-entrenamiento</td>
      <td>&gt;10%</td>
      <td>Recuperación tras ejercicios intensos. Para reponer rápidamente los depósitos de glucógeno post-entrenamiento.</td>
    </tr>
  </tbody>
</table>
<p>Recuerda que estas bebidas deportivas también pueden ser ajustadas a necesidades específicas, como el clima o el nivel de sudoración.</p>
`;
