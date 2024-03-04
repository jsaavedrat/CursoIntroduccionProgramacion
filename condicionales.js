const hora = 22;

if (hora < 12) {
    // console.log("Buenos días");
} else if (hora < 18) {
    // console.log("Buenas tardes");
} else if (hora <= 22) {
    // console.log("Buenas tardes noches");
} else {
    // console.log("Buenas noches");
}



const diaSemana = "viernes";

const diaSemana2 = "lunes";

switch (diaSemana2) {
    case "lunes":
        if (diaSemana == "viernes") {
            //  console.log("Es el viernes");

        }
        console.log("Es el primer día de la semana");
        break;
    case "martes":
        console.log("Es el segundo día de la semana");
        break;
    // ... más casos ...
    default:
    // console.log("No es un día válido");
}
if (diaSemana == "lunes") {
    console.log("Es el viernes");

} else {
    if (diaSemana == "viernes") {
        //    console.log("Es Viernes");
    }
    //console.log("Es otro dia");
}

// Declaración de variables al principio
var contadorVar = 0;
const contadorConst = 9;
let contadorLet = 0;

if (true) {
    // Modificación de variables dentro del bloque
    var contadorVar = 10; // La variable 'contadorVar' se modifica globalmente
    const contadorConst = 19; // La variable 'contadorConst' es local al bloque
    let contadorLet = 10; // La variable 'contadorLet' es local al bloque

    console.log('Valor de contadorVar dentro del bloque:', contadorVar); // Imprime 10
    console.log('Valor de contadorConst dentro del bloque:', contadorConst); // Imprime 9
    console.log('Valor de contadorLet dentro del bloque:', contadorLet); // Imprime 0
}

// Impresión de valores fuera del bloque
console.log('Valor de contadorVar fuera del bloque:', contadorVar); // Imprime 10
console.log('Valor de contadorConst fuera del bloque:', contadorConst); // Imprime 9
console.log('Valor de contadorLet fuera del bloque:', contadorLet); // Imprime 0

/* Ejercicio: crear condicionales donde las
 opciones de seleccion sean las operaciones matematicas de la lamina 
 "Operaciones Aritmeticas" de la Presentacion Semana 1*/
 
let operacion= "suma";
let varA = 15;
let varB = 10;

if (operacion == "suma") {
    console.log(varA + varB)
} else if (operacion == "resta") {
    console.log(varA - varB)    
} else {
    console.log('Opcion invalida')
}