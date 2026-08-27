# JS-Ejercicios

Repositorio de ejercicios realizados durante el aprendizaje de **fundamentos de JavaScript**.

De momento se han visto principalmente **funciones tradicionales** y **funciones flecha**. Posteriormente se agregarán ejercicios relacionados con métodos de arreglos y otros conceptos de JavaScript.

---

## Funciones tradicionales

Las funciones tradicionales se declaran utilizando la palabra reservada `function`, seguida del nombre de la función y paréntesis `()`.

Dentro de los paréntesis se pueden declarar **parámetros**, los cuales permiten que la función reciba información al momento de ser llamada.

```javascript
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3));
```

En este ejemplo:

- `sumar` es el nombre de la función.
- `a` y `b` son los parámetros.
- `return` devuelve el resultado de la operación.

### Variables globales y locales

También se revisó el alcance de las variables.

Una variable declarada fuera de una función puede ser utilizada desde diferentes partes del programa, dependiendo de su alcance.

```javascript
const numero = 10;

function mostrarNumero() {
    console.log(numero);
}
```

Por otro lado, una variable declarada dentro de una función tiene un alcance local y normalmente solo puede utilizarse dentro de dicha función.

```javascript
function ejemplo() {
    const mensaje = "Hola";
    console.log(mensaje);
}
```

---

## Funciones flecha

Las **funciones flecha** (*arrow functions*) son otra forma de escribir funciones en JavaScript.

Una función flecha puede almacenarse en una variable:

```javascript
const sumar = (a, b) => {
    return a + b;
};
```

Su estructura básica es:

```javascript
const nombreFuncion = (parametros) => {
    // Instrucciones
};
```

Donde:

- `const nombreFuncion` crea una variable que almacena la función.
- `(parametros)` contiene los valores que puede recibir la función.
- `=>` indica que se está utilizando una función flecha.
- `{ }` contiene las instrucciones de la función.

Si la función solamente necesita devolver una expresión, puede escribirse de forma abreviada:

```javascript
const sumar = (a, b) => a + b;
```

Esta función es equivalente a:

```javascript
const sumar = (a, b) => {
    return a + b;
};
```

---

## Funciones flecha en métodos de arreglos

Las funciones flecha también pueden utilizarse directamente dentro de métodos de arreglos como:

- `reduce()`
- `map()`
- `filter()`
- `forEach()`

Por ejemplo, utilizando `reduce()`:

```javascript
const calificaciones = [4.3, 5.0, 4.1, 4.4, 3.1, 4.0];

const suma = calificaciones.reduce(
    (sumador, calificacion) => sumador + calificacion,
    0
);
```

En este caso, la función flecha:

```javascript
(sumador, calificacion) => sumador + calificacion
```

indica la operación que `reduce()` realizará con los elementos del arreglo.

Más adelante se agregarán explicaciones y ejercicios específicos sobre los diferentes métodos de arreglos.

## Arreglos

Los **arreglos** (*arrays*) son estructuras de datos que permiten almacenar varios valores dentro de una sola variable.

En JavaScript, los elementos de un arreglo **no necesariamente tienen que ser del mismo tipo de dato**.

Por ejemplo:

```javascript
const numeros = [1, 2, 3, 4];

const nombres = ["Ana", "Luis", "Pedro"];

const varios = [10, "Hola", true, 3.14];
```

Aunque JavaScript permite mezclar diferentes tipos de datos dentro de un arreglo, normalmente es recomendable mantener datos relacionados entre sí para facilitar el manejo y comprensión del código.

### Declaración con `const`

Es común declarar los arreglos utilizando `const`:

```javascript
const numeros = [1, 2, 3];
```

Esto evita que posteriormente se pueda reemplazar completamente el arreglo por otro valor.

Por ejemplo, esto produciría un error:

```javascript
const numeros = [1, 2, 3];

numeros = 20;
```

Sin embargo, utilizar `const` **no significa que el contenido del arreglo sea inmutable**.

Podemos modificar sus elementos:

```javascript
const numeros = [1, 2, 3];

numeros[0] = 10;

console.log(numeros);
```

Resultado:

```text
[10, 2, 3]
```

También podemos agregar o eliminar elementos utilizando métodos.

---

### Arreglos multidimensionales

Un arreglo también puede contener otros arreglos.

Por ejemplo:

```javascript
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Este arreglo puede interpretarse como una matriz de `3 x 3`.

También es posible anidar más arreglos:

```javascript
const arreglo3D = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
```

JavaScript realmente los maneja como **arreglos que contienen otros arreglos**, lo que permite representar estructuras multidimensionales.

---

# Métodos de arreglos

Los arreglos tienen diferentes **métodos** que permiten agregar, eliminar, buscar, recorrer, transformar y organizar sus elementos.

No todos los métodos realizan lo mismo. Algunos **modifican el arreglo original**, mientras que otros generan un nuevo valor o un nuevo arreglo.

---

## `push()`

Agrega uno o más elementos **al final** del arreglo.

```javascript
const numeros = [1, 2, 3];

numeros.push(4);

console.log(numeros);
```

Resultado:

```text
[1, 2, 3, 4]
```

`push()` modifica el arreglo original.

---

## `pop()`

Elimina el **último elemento** del arreglo y lo devuelve.

```javascript
const numeros = [1, 2, 3];

const eliminado = numeros.pop();

console.log(numeros);
console.log(eliminado);
```

Resultado:

```text
[1, 2]
3
```

`pop()` modifica el arreglo original.

---

## `unshift()`

Agrega uno o más elementos **al inicio** del arreglo.

```javascript
const numeros = [2, 3];

numeros.unshift(1);

console.log(numeros);
```

Resultado:

```text
[1, 2, 3]
```

`unshift()` modifica el arreglo original.

---

## `shift()`

Elimina el **primer elemento** del arreglo y lo devuelve.

```javascript
const numeros = [1, 2, 3];

const eliminado = numeros.shift();

console.log(numeros);
console.log(eliminado);
```

Resultado:

```text
[2, 3]
1
```

`shift()` modifica el arreglo original.

---

## `forEach()`

Recorre cada elemento del arreglo y ejecuta una función para cada uno.

```javascript
const numeros = [1, 2, 3];

numeros.forEach((numero) => {
    console.log(numero);
});
```

Resultado:

```text
1
2
3
```

Es útil cuando queremos **hacer algo con cada elemento**.

---

## `map()`

Recorre el arreglo y crea **un nuevo arreglo** utilizando el valor que devuelve la función en cada iteración.

```javascript
const numeros = [1, 2, 3];

const dobles = numeros.map(
    (numero) => numero * 2
);

console.log(dobles);
```

Resultado:

```text
[2, 4, 6]
```

El arreglo original permanece igual.

---

## `filter()`

Crea un nuevo arreglo únicamente con los elementos que cumplen una condición.

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(
    (numero) => numero % 2 === 0
);

console.log(pares);
```

Resultado:

```text
[2, 4, 6]
```

---

## `find()`

Busca el **primer elemento** que cumpla una condición.

```javascript
const numeros = [5, 8, 12, 20];

const encontrado = numeros.find(
    (numero) => numero > 10
);

console.log(encontrado);
```

Resultado:

```text
12
```

Aunque `20` también cumple la condición, `find()` solamente devuelve el primero que encuentra.

---

## `findIndex()`

Funciona de manera similar a `find()`, pero devuelve la **posición** del elemento.

```javascript
const numeros = [5, 8, 12, 20];

const posicion = numeros.findIndex(
    (numero) => numero > 10
);

console.log(posicion);
```

Resultado:

```text
2
```

---

## `includes()`

Comprueba si un elemento existe dentro del arreglo.

```javascript
const frutas = ["manzana", "pera", "uva"];

console.log(frutas.includes("pera"));
```

Resultado:

```text
true
```

Devuelve un valor booleano: `true` o `false`.

---

## `indexOf()`

Busca un elemento y devuelve su índice.

```javascript
const frutas = ["manzana", "pera", "uva"];

console.log(frutas.indexOf("pera"));
```

Resultado:

```text
1
```

Si el elemento no existe, devuelve:

```text
-1
```

---

## `some()`

Comprueba si **al menos un elemento** cumple una condición.

```javascript
const edades = [15, 17, 20, 16];

const hayAdultos = edades.some(
    (edad) => edad >= 18
);

console.log(hayAdultos);
```

Resultado:

```text
true
```

---

## `every()`

Comprueba si **todos los elementos** cumplen una condición.

```javascript
const edades = [20, 25, 30];

const todosAdultos = edades.every(
    (edad) => edad >= 18
);

console.log(todosAdultos);
```

Resultado:

```text
true
```

---

## `reduce()`

Permite recorrer un arreglo y **reducir todos sus elementos a un único resultado**.

Por ejemplo, podemos utilizarlo para sumar números:

```javascript
const calificaciones = [4.3, 5.0, 4.1, 4.4];

const suma = calificaciones.reduce(
    (sumador, calificacion) => sumador + calificacion,
    0
);

console.log(suma);
```

En este ejemplo:

```javascript
(sumador, calificacion) => sumador + calificacion
```

es la función que indica qué se hará en cada iteración.

- `sumador` contiene el valor acumulado.
- `calificacion` contiene el elemento actual del arreglo.
- `0` es el valor inicial del acumulador.

`reduce()` no significa específicamente "sumar". La operación depende de la función que nosotros le proporcionemos.

---

## `join()`

Une todos los elementos de un arreglo y genera un `string`.

```javascript
const palabras = ["Hola", "mundo", "JavaScript"];

const texto = palabras.join(" ");

console.log(texto);
```

Resultado:

```text
Hola mundo JavaScript
```

El argumento de `join()` indica qué se colocará entre los elementos.

---

## `concat()`

Une dos o más arreglos y devuelve un nuevo arreglo.

```javascript
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];

const resultado = arreglo1.concat(arreglo2);

console.log(resultado);
```

Resultado:

```text
[1, 2, 3, 4, 5, 6]
```

No modifica los arreglos originales.

---

## `slice()`

Obtiene una parte de un arreglo sin modificar el original.

```javascript
const numeros = [10, 20, 30, 40, 50];

const resultado = numeros.slice(1, 4);

console.log(resultado);
```

Resultado:

```text
[20, 30, 40]
```

En:

```javascript
slice(1, 4)
```

se empieza desde el índice `1`, pero el índice `4` **no se incluye**.

---

## `splice()`

Permite eliminar, agregar o reemplazar elementos en posiciones específicas.

```javascript
const numeros = [10, 20, 30, 40];

numeros.splice(1, 1);

console.log(numeros);
```

Resultado:

```text
[10, 30, 40]
```

En:

```javascript
splice(1, 1)
```

el primer `1` indica desde qué índice comenzar y el segundo indica cuántos elementos eliminar.

A diferencia de `slice()`, `splice()` **sí modifica el arreglo original**.

---

## `flat()`

Reduce los niveles de arreglos anidados.

```javascript
const numeros = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const resultado = numeros.flat();

console.log(resultado);
```

Resultado:

```text
[1, 2, 3, 4, 5, 6]
```

---

## `sort()`

Ordena los elementos del arreglo.

```javascript
const frutas = ["pera", "manzana", "uva"];

frutas.sort();

console.log(frutas);
```

Resultado:

```text
["manzana", "pera", "uva"]
```

Con números se debe tener cuidado, ya que `sort()` por defecto los compara como texto.

Para ordenar números de menor a mayor:

```javascript
const numeros = [10, 2, 30, 5];

numeros.sort(
    (a, b) => a - b
);

console.log(numeros);
```

Resultado:

```text
[2, 5, 10, 30]
```

`sort()` modifica el arreglo original.

---

## `reverse()`

Invierte el orden de los elementos.

```javascript
const numeros = [1, 2, 3, 4];

numeros.reverse();

console.log(numeros);
```

Resultado:

```text
[4, 3, 2, 1]
```

`reverse()` modifica el arreglo original.

---

## Resumen de métodos

| Método | Función principal | Modifica el arreglo |
| --- | --- | --- |
| `push()` | Agregar al final | Sí |
| `pop()` | Eliminar del final | Sí |
| `unshift()` | Agregar al inicio | Sí |
| `shift()` | Eliminar del inicio | Sí |
| `forEach()` | Recorrer elementos | No* |
| `map()` | Transformar elementos | No |
| `filter()` | Filtrar elementos | No |
| `find()` | Encontrar un elemento | No |
| `findIndex()` | Encontrar una posición | No |
| `includes()` | Comprobar existencia | No |
| `indexOf()` | Obtener posición | No |
| `some()` | Comprobar si alguno cumple | No |
| `every()` | Comprobar si todos cumplen | No |
| `reduce()` | Obtener un único resultado | No |
| `join()` | Convertir elementos en texto | No |
| `concat()` | Unir arreglos | No |
| `slice()` | Obtener una sección | No |
| `splice()` | Agregar o eliminar elementos | Sí |
| `flat()` | Aplanar arreglos anidados | No |
| `sort()` | Ordenar elementos | Sí |
| `reverse()` | Invertir elementos | Sí |

> **Nota:** `forEach()` no modifica automáticamente el arreglo, aunque dentro de su función sí podemos escribir código que modifique sus elementos.