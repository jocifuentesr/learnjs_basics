// Tipos de condicionales: simples, compuestos y múltiples
// condicional simple
let num = 0;
//if(num > 0) console.log(`${num} es mayor que 0`);

// condicional compuesto
/* if(num > 0) { 
    console.log(`${num} es mayor que 0`);
}else{
    console.log(`${num} es menor que cero`);
} */

// condicional múltiple
/* if(num > 0) { 
    console.log(`${num} es mayor que 0`);
}else if (num < 0){
    console.log(`${num} es menor que cero`);
}else{
    console.log(`${num} es igual a cero`);
} */

// Condicionales con operadores lógicos
// && and
// || or
/* let num1 = 5, num2 = 7;
if(num1 > 0 && num2 > 0 ){
    console.log('Los dos números son mayores que cero');
}
 */
//Condicionales anidados
let num1 = 7, num2 = 4;
if(num1 > 0){
    if(num2 > 0){
        console.log('Los dos números son mayores que 0')
    }
}