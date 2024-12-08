# MODULO 3 - Laboratorio 1

Allison Acosta

1. Se crea el archivo medicos.json
   Se crea una estructura con los datos de "nombre", "especialidad", "años", "disponibilidad",
   y los ojetos anidados "horarios" con atributos "AM" y "PM" y el objeto anidado "contacto" con los atributos "telefono" y "mail".

2. En EquipoMedico.html se crean botones para ver la informacion de contacto de los medicos.
   Esta funcion esta en metodos.js. muestral la informacion del medico luego de filtrarse por el parametro "nombre" y usando destructuring.

3. En EquipoMedico.html se crean botones que muestran los medicos disponibles y no disponibles segun los parametros del medicos.json
   Estos botones muestran en consola los datos de los medicos con el uso de stringify.

4. En los enlaces rapidos del footer, se agrega un enlace para gestion de medicos: Mantenedor Medico. que lleva a la pagina

EL ordenamiento por burbuja utilizado es un algoritmo de ordenacion simple pero ineficiente. En el mejor caso (si esta mas o menos ordenado) es O(n), y en el peor caso es O(n2).
La complejidad es O(2) ya que tiene una estructura simple con dos bucles, es decir 2 caminos independiente para el civlo externo y el interno.

Los conceptos de Bio-O y la complejidad Ciclomatica se refieren a la eficiencia de un algoritmo y a la complejidad de estos respectivamente.
Big-O es una notación que se utiliza para medir la eficiencia de un algoritmo, describiendo cómo el tiempo de ejecución o el uso de recursos aumenta conforme crece el tamaño de la entrada. Su propósito es evaluar el rendimiento del algoritmo en función del tamaño del problema, y se enfoca en el peor caso. Ejemplos comunes son O(1):tiempo constante, O(n): tiempo lineal y O(n²): tiempo cuadrático, donde el tiempo de ejecución aumenta según la relación con el tamaño de la entrada.

Por otro lado, la complejidad ciclomática mide la complejidad estructural del código, es decir, el número de caminos independientes en el flujo de control de un programa. Su propósito es evaluar cuán difícil es probar y mantener el código. Una mayor complejidad ciclomática indica que el código tiene más decisiones y ramas, lo que lo hace más difícil de entender y probar. Mientras que Big-O se centra en la eficiencia temporal, la complejidad ciclomática se enfoca en la estructura y claridad del código.

Se usa console.log y debugger; para revisar el codigo y posibles errores.
Se usa un try/catch para evaluar errores al cargar datos medicos
