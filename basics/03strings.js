// Un método es todo lo que la cadena puede hacer
// ej: convertirse en mayúsculas
// Propiedad: características propias de una cadena
// ej: determinar la longitud

let cadena = "Hola Mundo";
// Devuelve el largo de la cadena
console.log(cadena.length);

// Devuelve la cadena en mayúscula
//Este método no modifica la cadena original
console.log(cadena.toUpperCase());
console.log(cadena);
// Si se necesita la nueva cadena se debe guardar en otra variable
cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);

//Devuelve la cadena completamente en minúsculas
//Ideal para validar formularios. 
// Elimina la H y M de la cadena inicial
console.log(cadena.toLowerCase());

// indexOf devuelve la primera coincidencia en un string
// JS indexa desde el cero 
// La palabra empieza en la posición 0 del string
console.log(cadena.indexOf('Hola'));
// Devuelve la posición de la u
console.log(cadena.indexOf('u'));
// Si el elemento buscado no existe devuelve -1
console.log(cadena.indexOf('P'));

// El método replace reemplaza una cadena por otra
console.log(cadena.replace('Mundo', 'Pepe'));

// extraer subcadenas
// Muestra desde el caracter 3 en adelante. Indexa desde 0
console.log(cadena.substring(3));
// Extrae desde el tercer al sexto elemento
// Funciona igual que en python
console.log(cadena.substring(3, 7));

// slice permite valores negativos
// Devuelve lo mismo que el metodo substring
console.log(cadena.slice(3));
//muestra solo los tres últimos caracteres
console.log(cadena.slice(-3));
// Muestra desde el caracter 2 y omite los 3 últimos
console.log(cadena.slice(2, -3));