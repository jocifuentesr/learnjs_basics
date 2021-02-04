// Un método es todo lo que la cadena puede hacer
// ej: convertirse en mayúsculas
// Propiedad: características propias de una cadena
// ej: determinar la longitud

//let cadena = "Hola Mundo";
//console.log(cadena);
// Devuelve el largo de la cadena
//console.log(cadena.length);

/* // Devuelve la cadena en mayúscula
//Este método no modifica la cadena original
console.log(cadena.toUpperCase());
console.log(cadena);
// Si se necesita la nueva cadena se debe guardar en otra variable
cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);
 */

//Devuelve la cadena completamente en minúsculas
//Ideal para validar formularios. 
// Elimina la H y M de la cadena inicial
//console.log(cadena.toLowerCase());

// indexOf devuelve la primera coincidencia en un string
// JS indexa desde el cero 
// La palabra empieza en la posición 0 del string
/* console.log(cadena.indexOf('Hola'));
// Devuelve la posición de la u
console.log(cadena.indexOf('u'));
// Si el elemento buscado no existe devuelve -1
console.log(cadena.indexOf('P'));
 */
// El método replace reemplaza una cadena por otra
//console.log(cadena.replace('Mundo', 'Pepe'));

/* // extraer subcadenas
// Muestra desde el caracter 3 en adelante. Indexa desde 0
console.log(cadena.substring(3));
// Extrae desde el tercer al sexto elemento
// Funciona igual que en python
console.log(cadena.substring(3, 7));
 */

/* // slice permite valores negativos
// Devuelve lo mismo que el metodo substring
console.log(cadena.slice(3));
//muestra solo los tres últimos caracteres
console.log(cadena.slice(-3));
// Muestra desde el caracter 2 y omite los 3 últimos
console.log(cadena.slice(2, -3));
 */

/*  // El método trim elimina los espacios al principio y al final
let cadena2 = "    Esta cadena tiene esapcios al inicio y al final     ";
console.log(cadena2);
console.log(cadena2.trim());
 */

 // Los métodos siguientes son de ES6
/* // startsWith indica si una cadena empieza o termina con un caracter
// Devuelve true o false
console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
//Tambié podemos decirle donde empiece a contar
console.log(cadena.startsWith("M", 5));
console.log(cadena.startsWith("u", 5));
 */

/* //endsWith hace lo mismo pero al final de la cadena
// Indica si la cadena termina en 'o'
console.log(cadena.endsWith('o'));
// Se pueden tomar trozos de la cadena 
// Devuelve el true si el cuarto caracter es a
// Considera los primeros 4 caracteres
console.log(cadena.endsWith('a', 4));
console.log(cadena.endsWith('n', 8));
// Se puede hacer lo mismo con una palabra
// Devuelve true si la cadena termina con la palabra Mundo
console.log(cadena.endsWith('Mundo')); */

/* // includes devuelve un valor true o false en caso de que el caracter exista en la cadena
console.log(cadena.includes('n'));
//En este caso devuelve false porque empieza a contar desde la posición 5. El caracter 'a' esta en la posición 4
console.log(cadena.includes('a',5));
//Le podemos indicar que empiece a revisar desde la posición 2
//para que devuelva true
console.log(cadena.includes('a',2)); */

// repeat repite una cadena la cantidad de veces que se le indique
/* let cadena3 = "Hola ";
console.log(cadena3.repeat(3));
// También recibe como parametro la cadena directamente
console.log('Chao '.repeat(10)); */

// Los templates strings nos permiten mostrar variables de manera sencilla en una impresión por pantalla
// Es el equivalente al f-string de python

let nombre = "José";
let apellido = "Cifuentes";
let edad = 35;
// Método tradicional
console.log("Hola " + nombre + " " + apellido + ".Tienes " + edad + " años");
//Lo mismo con templates strings
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);
// En un template string se pueden operar directamente las variables
console.log(`Hola ${nombre} ${apellido}. El próximo año tendrás ${edad + 1} años`)