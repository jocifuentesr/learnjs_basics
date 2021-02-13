let a = -25, b = 7, c = 14, mayor = 0, menor = 0, medio = 0;
console.log("ORDENA TRES NÚMEROS DE MAYOR A MENOR");
//solo funciona con tres números distintos

// Identifica el número mayor 
if(a > b && a > c){
    mayor = a;
}else if(b > a && b > c){
    mayor = b;
}else{
    mayor = c;
}

// Identifica el número menor y medio
// Si a es el número mayor
if(a == mayor){
    if(b < c){
        //El número menor es b
        menor = b;
        medio = c;

    }else{
        //El número menor es c 
        menor = c;
        medio = b;
    }
// Cuando el mayor es b
}else if (b == mayor){
    if(a > c){
        medio = a;
        menor = c;
    }else{
        menor = a;
        medio = c;
    }
// Cuando el mayor es c
}else{
    if(a > b){
        medio = a;
        menor = b;
    }else{
        menor = a;
        medio = b;
    }

}

// Imprime los números ordenados de mayor a mayor
console.log(`Los números ordenados de mayor a menor son: ${mayor}, ${medio} y ${menor}`);