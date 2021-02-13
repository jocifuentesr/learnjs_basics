// Math Es un objeto estático. Se debe declarar cada vez que se necesite trabajar con él
// Trae definidas las constantes más importantes. 
/* console.log(Math.E);
console.log(`La constante de Euler es aproximadamente: ${Math.E}`);
console.log(`El valor de PI es aproximadamente: ${Math.PI}`);
 */

/* // valor absoluto
let num = -10.4;
console.log(Math.abs(num)); */

// ceil aproxima al entero más cercano hacia arriba
let num = 5.9;
/* console.log(`El método ceil aproxima por exceso. Devuelve ${Math.ceil(num)}`);  */

// floor aproxima al entero más cercano hacia abajo
//console.log(Math.floor(num));

// Para resolver potencias se ocupa el método pow
// El primer argumento es la base y el segundo es el expoenente
//console.log(Math.pow(2,3));
//console.log(Math.pow(2, 0.5));

// random devuelve un número aleatorio entre 0 y 1
/* console.log(`Número entre 0 y 1: ${Math.random()}`);
console.log(`Multiplicamos por 100 para obtener un número entre 0 y 100: ${Math.random() * 100}`)
console.log(`Obtenemos un número entero entre 0 y 100: ${Math.round(Math.random() * 100)}`); */

// Para obtener un número un número aleatorio entre dos números
// fórmula: console.log(Math.random() * (max - min) + min);
/* console.log(`Devuelve un número entre 1 y 10: ${Math.random() * (10 - 1) + 1}`);
console.log(`Simula el lanzamiento de un dado: ${Math.round(Math.random() * (6 - 1) + 1)}`); */

// El método sign devuelve el signo de un número
// Nos entrega como resultado tres datos dependiendo del número ingresado -1|0|1

//console.log(Math.sign(-7));

// Raíz cuadrada de un número 
console.log(Math.sqrt(9));
console.log(Math.sqrt(2));