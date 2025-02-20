// Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

// A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

// La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

// Si no se encuentra, se devuelve null.

// Veamos unos ejemplos:
// sumPairs([3, 5, 7, 2], 10) // [3, 7]
// sumPairs([-3, -2, 7, -5], 10) // null
// sumPairs([2, 2, 3, 1], 4) // [2, 2]
// sumPairs([6, 7, 1, 2], 8) // [6, 2]
// sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

// El resultado tiene que ser un array con dos números.

// Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que recorrer las mismas situaciones dos veces 🤔?

export default function sumPairs(numbers, result) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === result) {
                return [numbers[i], numbers[j]];
            }
        }
    }
    return null;
}

const sumPairs1 = sumPairs([3, 5, 7, 2], 10);
console.log(sumPairs1); // [3, 7]

const sumPairs2 = sumPairs([-3, -2, 7, -5], 10);
console.log(sumPairs2); // null

const sumPairs3 = sumPairs([2, 2, 3, 1], 4);
console.log(sumPairs3); // [2, 2]

const sumPairs4 = sumPairs([6, 7, 1, 2], 8);
console.log(sumPairs4); // [6, 2]

const sumPairs5 = sumPairs([0, 2, 2, 3, -1, 1, 5], 6);
console.log(sumPairs5); // [1, 5]
